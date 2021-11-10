import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'

const Hamburger = () => {
  return (
    <div className="hamburger">
      <i className="las la-bars"></i>
      <style jsx>{`
        .hamburger {
          color: #373857;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.1s;
          cursor: pointer;
        }

        .hamburger i {
          display: inline-block;
          font-weight: 700;
          font-size: 32px;
        }
      `}</style>
    </div>
  )
}

export default Hamburger
