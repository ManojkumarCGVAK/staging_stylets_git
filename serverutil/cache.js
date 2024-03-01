// const clear = (req, res, next) => {
// 	cache.keys((err, keys) => {
// 		if (!err) {
// 			let resourceUrl = req.baseUrl;
// 			const resourceKeys = keys.filter(k => k.includes(resourceUrl));
// 			cache.del(resourceKeys);
// 		}
// 	});
// 	return next();
// };

const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 5 * 60 });
module.exports = {cache}