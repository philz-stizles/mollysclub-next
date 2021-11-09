import React, { FC } from 'react'
import styles from './SectionHeader.module.scss'

interface ISectionHeaderProps {
  title: string
  description: string
}

const SectionHeader: FC<ISectionHeaderProps> = ({ title, description }) => {
  return (
    <article className="section-header text-center mb-4">
      <div className="section-header-content">
        <h1 className="section-header__title">{title}</h1>
        <p className="section-header__desc">{description}</p>
      </div>
      <style jsx>{`
        .section-header {
          display: flex;
          justify-content: center;
        }

        .section-header-content {
          max-width: 50%;
        }

        .section-header__title {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-header__desc {
          color: #949da8;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
      `}</style>
    </article>
  )
}

export default SectionHeader
