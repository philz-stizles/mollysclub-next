import React, { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
  className?: string
}

const CardWrapper = ({ title, children, className }: Props) => {
  return (
    <div className={['card-wrapper', className ? className : ''].join(' ')}>
      <h4 className="card-wrapper__title">{title}</h4>
      {children}
      {/* padding: 35px 40px; */}
      <style jsx>{`
        .card-wrapper {
          position: relative;
          padding: 20px;
          margin: 0px 0px 20px 0px;
          background: #ffffff;
          border-radius: 3px;
          box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 1px 1px rgb(0 0 0 / 5%);
        }

        .card-wrapper__title {
          // margin: 0px 0px 30px 0px;
          margin: 0px 0px 15px 0px;
          font-size: 16px;
          line-height: 16px;
          font-weight: 600;
          transition: all 0.4s ease;
        }
      `}</style>
    </div>
  )
}

export default CardWrapper
