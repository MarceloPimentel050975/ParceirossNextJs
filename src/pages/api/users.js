import { PrismaClient, Prisma } from '@prisma/client'

const prismaclient = new PrismaClient()
export default async function (req, res )
{
  if (req.method === 'GET'){
      console.log("GET ....")
  } else if (req.method === 'POST') {
    try
    {
      console.log( "--->" + req.body );
      const { body } = req;
      const createdUser = await prismaclient.user.create({ data: JSON.parse(body) });
      res.status(200).json(createdUser)
    } catch ( e )
    {
      console.log( e.code );
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          return res
            .status(409)
            .json({ error: 'A user with this email already exists' })
        }
      }
      if (e instanceof Prisma.PrismaClientValidationError) {
        if (e.code === 'P2002') {
          return res
            .status(409)
            .json({ error: 'A user with this email already exists' })
        }
      }
      console.error(e)
      return res.status(500)
    }
  } else {
    res.status(404)
  }
}