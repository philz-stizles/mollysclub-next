import React from 'react'
import Image from 'next/image'

type Props = {
  imgSrc: string
  name: string
  email: string
  role: string
}

const UserCard = ({ imgSrc, name, email, role }: Props) => {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <Image
          src={imgSrc}
          className="image"
          alt={name}
          width={78}
          height={78}
          objectFit="cover"
        />
      </div>
      {/* <!-- /.avatar --> */}
      <div className="user-card__content">
        <h4 className="name">{name}</h4>
        {/* <!-- /.name --> */}
        <p>
          <a href="mailto:hello@ninjateam.org">{email}</a>
        </p>
        <div className="text-warning small">{role}</div>
        {/* <!-- /.text-warning --> */}
      </div>
      {/* <!-- /.right-content --> */}
      <style jsx global>{`
        .user-card {
          position: relative;
          padding: 20px;
          margin: 0px 0px 20px 0px;
          background: #ffffff;
          border-radius: 3px;
          box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 1px 1px rgb(0 0 0 / 5%);
        }

        .user-card__avatar {
          float: left;
          width: 78px;
        }

        .user-card__avatar .image {
          border: 3px solid #fff !important;
          border-radius: 100%;
          box-shadow: 0 0 3px 0 rgb(0 0 0 / 25%);
          max-width: 100%;
          height: auto;
          -webkit-backface-visibility: hidden;
        }

        .user-card__content {
          margin-left: 90px;
        }
      `}</style>
    </div>
  )
}

export default UserCard
