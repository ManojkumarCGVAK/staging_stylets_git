import slugify from './slugify';

const checkForImage = name => {
	const nameSlug = slugify(name);

	try {
		require(`../images/buildings/${nameSlug}.jpg`);
		return true;
	} catch (ex) {
		return false;
	}
};

export default checkForImage;
