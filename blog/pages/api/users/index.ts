import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";
import api from "@/libs/api";

type RequestData = {
    name:string,
    email:string
}

const handlerPost: NextApiHandler = async (req, res) => {
    const {name, email}: RequestData = req.body

    const getUser = await api.getAllUsers(name, email)

    if(!getUser){
        return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(getUser)
}
const handlerGet: NextApiHandler = async (req, res) => {
    const {name, email} = req.body

    const newUser = await prisma.user.create({
        data:{
            name,
            email,
        }
    })
    res.json({status:true, user:newUser})
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