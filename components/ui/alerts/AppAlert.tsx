import React from 'react'

type AppAlertProps = {
  info: string
  bgColor: string
  icon: string
}

const AppAlert = ({ info, icon, bgColor }: AppAlertProps) => {
  return (
    <div className="app-alert">
      <a aria-label="Close" className="app-alert__close" href="#">
        ×
      </a>
      <div className="container app-alert__content">
        <div className="app-alert__icon">
          <i className={icon}></i>
        </div>
        <div className="app-alert__info" role="status" tabIndex={-1}>
          {info}
        </div>
      </div>

      <style jsx>{`
        .app-alert {
          background-color: #323141;
          color: #ffffff;
          border-color: transparent;
          border-style: solid;
          border-width: 0;
          position: relative;
          padding-left: 1.5rem;
          font-weight: 400;
          z-index: 1000;
        }

        .app-alert:after {
          content: '';
          display: table;
          clear: both;
        }

        .app-alert__close {
          position: absolute;
          color: #9d9d9d;
          cursor: pointer;
          font-weight: 300;
          font-size: 3rem;
          line-height: 3.5rem;
          right: 0;
          text-align: center;
          width: 4rem;
          text-decoration: none !important;
        }

        .app-alert__icon i {
          align-self: center;
          margin-right: 1.5rem;
          font-size: 24px;
        }

        .app-alert__info {
        }

        .app-alert > .container,
        .app-alert > .fluid-container {
          padding: 1rem 4rem 1rem 0;
          transition: width 0.4s ease-in-out;
        }

        .app-alert__content {
          display: flex;
        }

        @media (min-width: 768px) {
          .app-alert > .container {
            padding: 1rem 4rem 1rem 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AppAlert
