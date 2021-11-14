// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateToken } from 'lib/services/security/jwt'
import { verifyPasswordAsync } from 'lib/services/security/password'
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/lib/db/mongodb'
import { Data } from '@/lib/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST': {
      return login(req, res)
    }
  }
}

async function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { email, password } = req.body

    if (
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
    const existingUser = await db.collection('users').findOne({ email })
    if (!existingUser) {
      return res
        .status(422)
        .json({ status: false, message: 'Invalid credentials' })
    }

    // Hash password
    const isValid = await verifyPasswordAsync(password, existingUser.password)
    if (!isValid) {
      return res
        .status(422)
        .json({ status: false, message: 'Invalid credentials' })
    }

    // Generate token.
    const token = generateToken({
      id: existingUser.id,
      email: existingUser.email,
    })

    return res.status(200).json({
      status: true,
      data: {
        email: existingUser.email,
        name: existingUser.fullname,
        role: existingUser.role,
        token,
      },
      message: 'You are now logged in',
    })
  } catch (error: any | unknown) {
    // return the error
    return res.json({
      message: new Error(error).message,
      status: false,
    })
  }
}
