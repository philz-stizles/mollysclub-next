import React, { FC } from 'react'

type ButtonProps = {
  float?: boolean
  icon: string
  color?: string
  disabled?: boolean
  onClick?: () => void
}

const RoundButton: FC<ButtonProps> = ({ float, icon, disabled, onClick }) => {
  // const Icon = icon
  return (
    <button disabled={disabled} className="round-button" onClick={onClick}>
      <i className={icon}></i>
      <style jsx>{`
        .round-button {
          position: fixed;
          right: ${float ? '30px' : '10px'};
          bottom: 30px;
          width: 45px;
          height: 45px;
          opacity: ${float ? 1 : 0};
          z-index: 1000;
          font-size: 18px;
          border-radius: 50%;
          color: #fff;
          background-color: #4949fd;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .round-button:hover {
          background-color: #222;
        }
      `}</style>
    </button>
  )
}

export default RoundButton
