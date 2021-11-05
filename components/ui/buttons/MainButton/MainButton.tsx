import React, { FC } from 'react'
import styles from './MainButton.module.scss'

interface IMainButton {
  label: string
  icon?: string
  color?: string
  className?: string
  outlined?: boolean
}

const MainButton: FC<IMainButton> = ({
  label,
  icon,
  className,
  outlined,
  color,
}) => {
  const outlinedStyles = ''

  if (outlined) {
  }

  return (
    <button
      className={[styles['main-button'], className ? className : ''].join(' ')}
    >
      {label}
      {icon && <i className={icon}></i>}
    </button>
  )
}

export default MainButton
