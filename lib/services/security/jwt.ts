// import { promisify } from 'util';
import jwt, { JwtPayload } from 'jsonwebtoken'

export interface IJWTokenPayload extends JwtPayload {
  id: string
  userId: string
  email: string
  iat: number
  exp: number
}

export interface IJWTVerify {
  valid: boolean
  expired: boolean
  decoded: string | IJWTokenPayload | null
}

export const generateToken = (payload: string | any | Buffer): string =>
  jwt.sign(payload, process.env.JWT_AUTH_SECRET as string, {
    expiresIn: process.env.JWT_AUTH_EXPIRES_IN,
  })

export const verifyToken = (
  token: string
): Promise<IJWTokenPayload | undefined> => {
  // eslint-disable-next-line no-return-await
  // await promisify(jwt.verify)(token, process.env.JWT_AUTH_SECRET);
  return new Promise<any>((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT_AUTH_SECRET}`, (err, decoded) => {
      if (err) {
        reject(err)
      } else {
        resolve(decoded)
      }
    })
  })
}
