import apiPost from "@/libs/apiPost";
import { NextApiHandler } from "next";


const handlerGet: NextApiHandler = async (req, res) => {    
   const {page} = req.query ;

   const getPost = await apiPost.getPost(page as string)

   res.json(getPost)
}
const handlerPost: NextApiHandler = async (req, res) => {
    const {category,title, resume, img } = req.body
  
    const result = await apiPost.createPost(category, title, resume, img)

    res.status(201).json({status:true, post:result})
    
}
const handler: NextApiHandler = async (req, res) => {
    switch (req.method) {
        case "GET":
            handlerGet(req, res);
            break;
        case "POST":
            handlerPost(req, res);
            break;
    }
}

export default handler