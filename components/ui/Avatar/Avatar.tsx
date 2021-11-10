import React, { FC } from 'react'
import Image from 'next/image'
import styles from './Avatar.module.scss'

type AvatarProps = {
  size?: string
  src: string
  alt: string
}

const Avatar: FC<AvatarProps> = ({ src, alt, size }) => {
  return (
    <Image
      className={styles.avatar}
      src={src}
      alt={alt}
      width={70}
      height={70}
      objectFit="cover"
    />
  )
}

export default Avatar
