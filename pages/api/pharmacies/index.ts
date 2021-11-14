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
      return getPharmacies(req, res)
    }

    case 'POST': {
      return addPharmacie(req, res)
    }

    case 'PUT': {
      return updatePharmacie(req, res)
    }

    case 'DELETE': {
      return deletePharmacie(req, res)
    }
  }
}

async function getPharmacies(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    // fetch the pharmacies
    let pharmacies = await db
      .collection('pharmacies')
      .find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray()
    // return response
    return res.json({
      message: JSON.parse(JSON.stringify(pharmacies)),
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

async function addPharmacie(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    // add the post
    await db.collection('pharmacies').insertOne(JSON.parse(req.body))
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

async function updatePharmacie(
  req: NextApiRequestWithParams,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()

    // update target doctor
    await db.collection('pharmacies').updateOne(
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

async function deletePharmacie(
  req: NextApiRequestWithParams,
  res: NextApiResponse
): Promise<void> {
  try {
    // Connecting to the database
    let { db } = await connectToDatabase()

    // Deleting the post
    await db.collection('pharmacies').deleteOne({
      _id: new ObjectId(req.params.id),
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
