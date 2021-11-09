/* eslint-disable @next/next/no-img-element */
import React from 'react'

type LogoProps = {
  className?: string
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={['logo', className ? className : ''].join(' ')}>
      <img
        src="https://mollysclubng.com/wp-content/themes/getleads/assets/images/logo/logo-white.png"
        alt="Mollys Club Logo"
      />
      <style>
        {`
          .logo{
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  )
}

export default Logo
