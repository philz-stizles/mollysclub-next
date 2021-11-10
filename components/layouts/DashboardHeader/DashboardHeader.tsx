import Image from 'next/image'
import Hamburger from '@/components/ui/Hamburger/Hamburger'
import React from 'react'
import Link from 'next/link'

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <HeaderLeft />
      <HeaderRight />
      <style jsx>
        {`
          .dashboard-header {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            border-bottom: 1px solid rgba(230, 231, 239, 0.85);
            padding-right: 2.4rem;
            transition: all 0.25s;
            // background: #304ffe;
            color: #ffffff;
          }

          @media (min-width: 1200px) {
            .dashboard-header {
              left: 240px;
            }
          }

          @media (min-width: 992px) {
            .dashboard-header {
              height: 80px;
              left: 231px;
            }
          }

          @media (min-width: 576px) {
            .dashboard-header {
              height: 70px;
            }
          }
        `}
      </style>
    </div>
  )
}

const HeaderLeft = () => {
  return (
    <div className="header-left">
      <Hamburger />
      <style jsx>
        {`
          .header-left {
            display: flex;
            align-items: center;
            padding-left: 5px;
          }

          @media (min-width: 576px) {
            .header-left {
              padding-left: 10px;
            }
          }
        `}
      </style>
    </div>
  )
}

const HeaderRight = () => {
  return (
    <div className="header-right">
      <div>
        <i className="las la-comment-medical"></i>
      </div>
      <div className="header-right__notification">
        <i className="lar la-bell"></i>
      </div>
      <UserProfile />
      <style jsx>
        {`
          .header-right {
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            color: #575d78;
          }

          .header-right__notification {
            cursor: pointer;
            padding-left: 1.3rem;
          }
        `}
      </style>
    </div>
  )
}

const UserProfile = () => {
  return (
    <div className="user-profile">
      <Link href="/">
        <a>
          <Avatar src="/images/user2.jpg" alt="user" />
          <div className="user-profile__info">
            <span className="user-profile__name">Theo Ighalo</span>
            <p className="user-profile__role">Super Admin</p>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .user-profile {
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 1.3rem;
          }

          .user-profile a {
            padding: 0 0 0 0;
            display: flex;
            align-items: center;
            border-radius: 1.25rem 28px 28px 1.25rem;
          }

          .user-profile__info {
            text-align: left;
            padding-left: 15px;
          }

          .user-profile__name {
            font-size: 16px;
            display: block;
            font-weight: 600;
            color: #000;
          }

          .user-profile__role {
            font-size: 12px;
            line-height: 1.3;
            padding-bottom: 0;
          }
        `}
      </style>
    </div>
  )
}

const Avatar = ({
  src,
  alt,
  size,
}: {
  src: string
  alt: string
  size?: string
}) => {
  return (
    <>
      <Image
        className="dashboard-avatar"
        src={src}
        alt={alt}
        width={48}
        height={48}
        objectFit="cover"
      />
      <style>{`
        .dashboard-avatar {
          width: 32px;
          height: 32px;
          border-radius: 60px;
          transition: all 0.2s;
        }
      `}</style>
    </>
  )
}

export default DashboardHeader
