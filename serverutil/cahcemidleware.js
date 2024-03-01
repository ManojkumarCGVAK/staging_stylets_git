const cacheModule  = require('./cache');

const getUrlFromRequest = req => {
	return req.url.toString();
};

function setMethod(u){
    return (data)=>{
        cacheModule.cache.set(u,data)
    }
}

function cacheHandler(handler){
    return async(req,res)=>{
    
        const url = getUrlFromRequest(req);
        const content = cacheModule.cache.get(url);
        const setCahce = setMethod(url);
        
        if (!handler['get'])
       
             return res.status(405).end(`Method ${req.method} Not Allowed`);
        
        try {

            if (content ) {
                return res.json(content);
            }
            return handler['get'](req, res, setCahce);

        } catch (err) {
            console.log(err);
        }
        
    }
}
export {cacheHandler}