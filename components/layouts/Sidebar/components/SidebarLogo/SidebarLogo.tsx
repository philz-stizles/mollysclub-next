import React from 'react'
import Link from 'next/link'

const SidebarLogo = () => {
  return (
    <>
      <Link href="#">
        <a className="sidebar-logo">Mollys Club</a>
      </Link>
      <style jsx>{`
        .sidebar-logo {
          // position: absolute;
          display: inline-block;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          line-height: 75px;
          height: 75px;
          white-space: nowrap;
          overflow: hidden;
          color: #ffffff;
          background: #1e3ded;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}

export default SidebarLogo
