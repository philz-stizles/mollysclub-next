import React, { ReactElement } from 'react'
import styles from './AppButton.module.scss'

type AppButtonProps = {
  type?: string
  size?: string
  label: string
  disabled?: boolean
  children?: ReactElement
  onClick?: () => void
}
const AppButton = ({
  type,
  label,
  children,
  onClick,
  disabled,
  size,
}: AppButtonProps) => {
  type = type ? type : 'button'
  size = size ? size : 'medium'
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className="app-button"
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
          background: #304ffe;
          outline: none;
          border: none;
          font-weight: 500;
          border-radius: 0.2rem;
          color: #fff;
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
