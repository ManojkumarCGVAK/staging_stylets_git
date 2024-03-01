const responseHandler = (res) =>{
    if(res.status == 200) return res.data?res.data:null  
    return null;
}

export {responseHandler}