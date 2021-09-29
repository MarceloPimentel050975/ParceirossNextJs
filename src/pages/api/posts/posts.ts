import { PrismaClient, Prisma } from '@prisma/client'

const prismaclient = new PrismaClient()
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res )
{

 const {
    query: { email, password },
    method,
  } = req

  if (req.method === 'GET'){
    try
    {
      console.log( "GET ...." )
    
      const userlogged = await prismaclient.post.findMany()
      if ( userlogged != null )
      {
        res.status( 200 ).json( "status:ok" )
      } else
      {
        res.status( 200 ).json( "status:nok" )
      }
    } catch ( e )
    {
    }
    
    
  } else if (req.method === 'POST') {
    try
    {
      console.log( "--->" + req.body );
      const { body } = req;
      const createdUser = await prismaclient.post.create({ data: JSON.parse(body) });
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
      console.error(e)
      return res.status(500)
    }
  } else {
    res.status(404)
  }
}