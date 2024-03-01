const axios = require('axios');

// const slugify = require('./util/slugify').default;

// configure babel since we're running node
require('@babel/register')({
	presets: [['@babel/preset-env', { targets: { esmodules: true } }], '@babel/preset-react'],
	plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
		[
			'@babel/plugin-transform-modules-commonjs',
			{
				allowTopLevelThis: true,
				loose: true,
				lazy: true,
			},
		],
	],
	ignore: [/node_modules/],
});

// remove unnecessary extensions for babel
const noop = function () {};
require.extensions['.css'] = noop;
require.extensions['.png'] = noop;
require.extensions['.gif'] = noop;
require.extensions['.jpg'] = noop;

//Import our routes
const router = require('./routes').default;
const Sitemap = require('react-router-sitemap').default;

const slugify = string => {
	if (!string) {
		return;
	}

	const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
	const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
	const p = new RegExp(a.split('').join('|'), 'g');

	return string
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w-]+/g, '') // Remove all non-word characters
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
};

const generateSitemap = async () => {
	try {
		const locations = [];
		const buildings = [];
		const propertyTypes = [];

		await axios
			.get('http://localhost:5000/api/properties')
			.then(response => {
				for (const item of response.data) {
					locations.push(slugify(item.location));

					for (const building of item.buildings) {
						buildings.push(slugify(building.name));

						for (const property of building.details) {
							propertyTypes.push(slugify(property.type));
						}
					}
				}
			})
			.catch(err => console.log(err.response));

		const paramsConfig = {
			'/accommodation/:location': [{ location: locations }],
			'/accommodation/:location/:building': [{ location: locations, building: buildings }],
			'/accommodation/:location/:building/:propertyType': [{ location: locations, building: buildings, propertyType: propertyTypes }],
			'/property/:location/:building/:propertyType': [{ location: locations, building: buildings, propertyType: propertyTypes }],
		};

		return new Sitemap(router).applyParams(paramsConfig).build('https://www.staylets.co.uk').save('../public/sitemap.xml');
	} catch (err) {
		console.log('Error trying to generate sitemap');
		console.error(err);
	}
};

generateSitemap();
