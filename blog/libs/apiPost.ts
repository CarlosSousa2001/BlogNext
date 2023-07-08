import prisma from './prisma'
export default {
    getPost: async (page:string) => {
        // quantidade de itens mostrados
        let take = 4;
        // quantidade de itens que seram "pulados"
        let skip = 0;

        if(page){
            skip = (parseInt(page) -1) * take;
        }

        const totalCount = await prisma.newPost.count();

        const getPost = await prisma.newPost.findMany({
            skip,
            take,
        })
        return {getPost, totalCount}
    },
    createPost: async (category:string,title:string, resume:string, img:string) =>{
   
        const newUser = await prisma.newPost.create({
            data:{
                img,
                category,
                title, 
                resume,
            }
        })
        return newUser
    }
}