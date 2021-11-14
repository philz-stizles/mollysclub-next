import { connectToDatabase } from 'lib/db/mongodb'
import { Data } from 'lib/types'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

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
      return getPatients(req, res)
    }

    case 'POST': {
      return addPatient(req, res)
    }

    default: {
      return res.status(500).json({
        message: 'Method is not allowed',
        status: false,
      })
    }
  }
}

async function getPatients(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    // fetch the patients
    let patients = await db
      .collection('patients')
      .find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray()
    // return response
    return res.json({
      message: JSON.parse(JSON.stringify(patients)),
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

async function addPatient(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    // add the post
    await db.collection('patients').insertOne(JSON.parse(req.body))
    // return a message
    return res.status(201).json({
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

async function deletePatient(
  req: NextApiRequestWithParams,
  res: NextApiResponse
): Promise<void> {
  try {
    // Connecting to the database
    let { db } = await connectToDatabase()

    // Deleting the post
    await db.collection('patients').deleteOne({
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
