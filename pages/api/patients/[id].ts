import { connectToDatabase } from 'lib/db/mongodb'
import { Data } from 'lib/types'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

interface NextApiRequestWithParams extends NextApiRequest {
  query: {
    id: string
  }
}

export default async function handler(
  req: NextApiRequestWithParams,
  res: NextApiResponse<Data>
): Promise<void> {
  // switch the methods
  switch (req.method) {
    case 'PUT': {
      return updatePatient(req, res)
    }

    case 'DELETE': {
      return deletePatient(req, res)
    }

    default: {
      return res.status(500).json({
        message: 'Method is not allowed',
        status: false,
      })
    }
  }
}

async function updatePatient(
  req: NextApiRequestWithParams,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()

    // update target doctor
    await db.collection('patients').updateOne(
      {
        _id: new ObjectId(req.query.id),
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

async function deletePatient(
  req: NextApiRequestWithParams,
  res: NextApiResponse
): Promise<void> {
  try {
    // Connecting to the database
    let { db } = await connectToDatabase()

    // Deleting the post
    await db.collection('patients').deleteOne({
      _id: new ObjectId(req.query.id),
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
