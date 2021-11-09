import React, { ReactElement } from 'react'
import styles from './AppButton.module.scss'

type ButtonProps = {
  children: ReactElement
  onClick: () => void
}
const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
