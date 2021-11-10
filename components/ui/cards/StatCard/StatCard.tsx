import React, { FC } from 'react'

interface IStatCard {
  figure: string
  title: string
  icon: string
}

export const StatCard1: FC<IStatCard> = ({ figure, title, icon }) => {
  return (
    <div className="stat-card-1">
      <div>
        <i className={icon}></i>
      </div>
      <div>
        <h2 className="mb-2 figure">{figure}</h2>
        <h6>{title}</h6>
      </div>
      <style jsx>{`
        .stat-card-1 {
          padding: 1.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem
          display: flex;
          align-items: center;
        }

        .stat-card-1__figure {
          font-size: 2rem;
        }
      `}</style>
    </div>
  )
}

export const StatsCard3: FC<IStatCard> = () => {
  return <div></div>
}

export const StatsCard4: FC<IStatCard> = () => {
  return <div></div>
}

export const StatsCard5: FC<IStatCard> = () => {
  return <div></div>
}
