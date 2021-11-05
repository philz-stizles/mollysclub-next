import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__code">404</h1>
        <h2 className="notfound__message">This page could not be found</h2>
      </div>
      <style jsx>{`
        .notfound {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .notfound__content {
          display: flex;
          flex-direction: row;
          align-item: center;
        }

        .notfound__code {
          border-right: 1px solid rgba(0, 0, 0, 0.3);
          margin-right: 20px;
          padding: 10px 23px 10px 0;
          font-size: 3.2rem;
          font-weight: 700;
        }

        .notfound__message {
          align-self: center;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

export default NotFoundPage
