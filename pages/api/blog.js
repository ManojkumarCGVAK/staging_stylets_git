import axios from "axios";
import getPost from "../../serverutil/blogRequest";


export default async function handler(req, res) {
	const  queryString = req.query
	getPost(queryString)
	.then(data=>res.json(data.data))
	.catch(e=>res.status(400).json(e))

  }

