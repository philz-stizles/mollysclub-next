import React, { FC } from 'react'
import Image from 'next/image'
import styles from './Avatar.module.scss'

interface IAvatarProps {
  src: string
  alt: string
}

const Avatar: FC<IAvatarProps> = ({ src, alt }) => {
  return <Image className={styles.avatar} src={src} alt={alt} />
}

export default Avatar
