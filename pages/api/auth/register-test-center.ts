// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { hashPasswordAsync } from 'lib/services/security/password'
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/lib/db/mongodb'
const { ObjectId } = require('mongodb')

type Data = {
  message: string
  data?: object
  status: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST': {
      return register(req, res)
    }
  }
}

async function register(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { firstname, lastname, email, password } = req.body

    if (
      !firstname ||
      !lastname ||
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 7
    ) {
      return res
        .status(422)
        .json({ status: false, message: 'Invalid credentials' })
    }

    // connect to the database
    let { db } = await connectToDatabase()

    // Check user
    const existingUser = await db.collection('users').find({ email })
    if (existingUser) {
      return res
        .status(422)
        .json({ status: false, message: 'User already exists' })
    }

    // Hash password
    const hashedPassword = await hashPasswordAsync(password)

    // Create new user.
    const insertedId = await db.collection('users').insertOne({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role: 'test-center:admin',
    })

    // Create new user.
    await db.collection('test-centers').insertOne({
      user: insertedId,
    })

    return res
      .status(201)
      .json({ status: true, message: 'Created successfully' })
  } catch (error: any | unknown) {
    // return the error
    return res.json({
      message: new Error(error).message,
      status: false,
    })
  }
}
