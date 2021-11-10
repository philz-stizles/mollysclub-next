import React from 'react'

type BackdropProps = {
  isShowing: boolean
}

const Backdrop = ({ isShowing }: BackdropProps) => {
  return (
    <div className="backdrop">
      <style jsx>{`
        .backdrop {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1040;
          background-color: #000;
          opacity: ${isShowing ? 0.5 : 0};
          display: ${isShowing ? 'block' : 'none'};
          transition: opacity 0.15s linear;
        }
      `}</style>
    </div>
  )
}

export default Backdrop
