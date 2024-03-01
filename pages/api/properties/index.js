const authenticate = require('../../../serverutil/authenticate');
const propertySort = require('../../../serverutil/propertySort')
const cahce = require('../../../serverutil/cahcemidleware');
const keys = require('../../../config/keys');
const axios = require('axios');

export default cahce.cacheHandler({
  get:handler
})

async function handler(req, res,cache) {

  const { error } = await authenticate();
 
  if (error) {
    return res.status(400).json({ error, msg: 'There was an auth error' });
  }

  const query = {
    pageSize: 1000,
  };

  return axios
    .get(`${keys.API}/properties`, { params: query })
    .then(response => {
      const filteredProperties = propertySort(response.data.results);
      const filterOut = filteredProperties.map((item)=>{
        return{
          ...item,
          buildings:[...item.buildings.filter((innerItem)=>{
            if(innerItem.name.search(/Caboose Town/i) === -1 && innerItem.name.search(/StayLets Village/i) === -1) return innerItem;
          })]
        }
      })
      cache && cache(filterOut);
      return res.json(filterOut);
    })
    .catch(err => res.status(400).json(err));

}
