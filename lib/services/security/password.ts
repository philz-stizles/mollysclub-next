import { genSalt, hash, compare } from 'bcryptjs'

export const hashPasswordAsync = async (password: string) => {
  const salt = await genSalt(12)
  return await hash(password, salt)
}

export const verifyPasswordAsync = async (
  password: string,
  hashedPassword: string
) => {
  return await compare(password, hashedPassword)
}
