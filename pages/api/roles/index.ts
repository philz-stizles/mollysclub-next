import { connectToDatabase } from 'lib/db/mongodb'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

interface NextApiRequestWithParams extends NextApiRequest {
  params: {
    id: ObjectId
  }
}

export default async function handler(
  req: NextApiRequestWithParams,
  res: NextApiResponse<Data>
): Promise<void> {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getRoles(req, res)
    }

    case 'POST': {
      return addRole(req, res)
    }

    case 'PUT': {
      return updateRole(req, res)
    }

    case 'DELETE': {
      return deleteRole(req, res)
    }
  }
}

async function getRoles(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    // fetch the roles
    let roles = await db
      .collection('roles')
      .find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray()
    // return response
    return res.json({
      message: JSON.parse(JSON.stringify(roles)),
      success: true,
    })
  } catch (error: any | unknown) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

async function addRole(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    // add the post
    await db.collection('roles').insertOne(JSON.parse(req.body))
    // return a message
    return res.json({
      message: 'Created successfully',
      success: true,
    })
  } catch (error: any | unknown) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

async function updateRole(
  req: NextApiRequestWithParams,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()

    // update target role
    await db.collection('roles').updateOne(
      {
        _id: new ObjectId(req.params.id),
      },
      { $set: { published: true } }
    )

    // return a message
    return res.json({
      message: 'Updated successfully',
      success: true,
    })
  } catch (error: any | unknown) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

async function deleteRole(
  req: NextApiRequestWithParams,
  res: NextApiResponse
): Promise<void> {
  try {
    // Connecting to the database
    let { db } = await connectToDatabase()

    // Deleting the post
    await db.collection('roles').deleteOne({
      _id: new ObjectId(req.body),
    })

    // returning a message
    return res.json({
      message: 'Deleted successfully',
      success: true,
    })
  } catch (error: any | unknown) {
    // returning an error
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}
