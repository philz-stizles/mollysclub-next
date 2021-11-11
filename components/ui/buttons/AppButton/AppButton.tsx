import React, { ReactElement } from 'react'
import styles from './AppButton.module.scss'

type AppButtonProps = {
  type?: string
  size?: string
  label: string
  disabled?: boolean
  children?: ReactElement
  className?: string
  outlined?: boolean
  onClick?: () => void
}
const AppButton = ({
  type,
  label,
  children,
  outlined,
  onClick,
  disabled,
  size,
  className,
}: AppButtonProps) => {
  type = type ? type : 'button'
  size = size ? size : 'medium'
  outlined = outlined ? true : false
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={['app-button', className ? className : ''].join(' ')}
      disabled={disabled}
    >
      {label}
      <style jsx>{`
        .app-button {
          font-size: ${size === 'small'
            ? '14px'
            : size === 'medium'
            ? '14px'
            : '16px'};
          line-height: ${size === 'small'
            ? '24px'
            : size === 'medium'
            ? '24px'
            : '26px'};
          padding: ${size === 'small'
            ? '7px 20px'
            : size === 'medium'
            ? '7px 20px'
            : '8px 25px'};
          display: inline-block;
          overflow: hidden;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          border: 1px solid transparent;
          border-color: #304ffe;
          background: ${outlined ? '#fff' : '#304ffe'};
          outline: none;
          font-weight: 500;
          border-radius: 0.2rem;
          color: ${outlined ? '#304ffe' : '#fff'};
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .app-button:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
      `}</style>
    </button>
  )
}

export default AppButton
