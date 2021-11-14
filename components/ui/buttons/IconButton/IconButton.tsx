import React from 'react'

const IconButton = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <button className="IconButton">
      <i className={[icon].join('')} />
      {label}
      <style jsx>{`
        .IconButton {
          display: flex;
          align-items: center;
          border: none;
          border-radius: 10px;
          padding: 7px 10px;
          background-color: #eeeef7;
          color: #555;
          cursor: pointer;
        }

        .IconButton i {
          font-size: 16px !important;
          margin-right: 5px;
        }
      `}</style>
    </button>
  )
}

export default IconButton
