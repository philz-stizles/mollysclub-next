// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cors from 'lib/middlewares/cors.middleware'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Run cors
  await cors(req, res)

  res.status(200).json({ name: 'John Doe' })
}

export default handler
