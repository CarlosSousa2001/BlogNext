import prisma from './prisma'
export default {
    getAllUsers: async (name:string, email:string) => {
        const getUser = await prisma.user.findFirst({
            where: {
              name,
              email,
              role: "ADMIN"
            }
          });
        return getUser
    }
}