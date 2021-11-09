import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'

const Hamburger = () => {
  return (
    <div className="hamburger">
      <HiMenuAlt2 />
      <style jsx>{`
        .hamburger {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          height: 75px;
          width: 70px;
          border: none;
          outline: none;
          font-size: 20px;
          line-height: 75px;
          color: #fff;
          background: #306ffe;
        }

        .hamburger svg {
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

export default Hamburger
