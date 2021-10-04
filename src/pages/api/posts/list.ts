
import { PrismaClient, Prisma } from '@prisma/client'

const prismaclient = new PrismaClient()

export default async function (req, res) {

    if (req.method === 'GET') {
        try {
            const posts = await prismaclient.post.findMany({});
            res.status(200).json(posts)
        } catch (e) {
            console.log(e.code);
            console.error(e)
            return res.status(500)
        }
    }
}