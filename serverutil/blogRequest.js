import axios from 'axios';
const isEmpty = require("../validation/is-empty")

export default async function getPost(queryString){

	if (isEmpty(queryString)) {
		return axios.get('https://blog.staylets.co.uk/wp-json/wp/v2/posts?_embed', {
				params: { per_page: 4, categories_exclude: [2, 3] },
			})
			
	}

	const { location, tag } = queryString;

	const categoryResult = await axios.get(
		'https://blog.staylets.co.uk/wp-json/wp/v2/categories',
		{ params: { per_page: 4, slug: location } }
	);

	const tagResult = await axios.get(
		'https://blog.staylets.co.uk/wp-json/wp/v2/tags',
		{ params: { per_page: 4, slug: tag } }
	);

	const params = {};

	if (!isEmpty(categoryResult.data)) {
		params.categories = categoryResult.data[0].id;
	}

	try{
		const response = await axios
		.get('https://blog.staylets.co.uk/wp-json/wp/v2/posts?_embed', {
			params,
		});
		return response;

	}catch(e){
		throw Error(e)
	}

}