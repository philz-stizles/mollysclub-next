import React, { FC } from 'react'
import styles from './PricingCard.module.scss'
import MainButton from './../../buttons/MainButton/MainButton'

interface IPricingCardProps {
  className?: string
}

const PricingCard: FC<IPricingCardProps> = ({ className }) => {
  return (
    <div className="'col-sm-12 col-md-6 col-lg-4 px-lg-4">
      <div className={[styles['pricing-card']].join(' ')}>
        <i></i>
        <h2 className={styles['pricing-card__figure']}>8.20</h2>
        <ul className={styles['pricing-card__list']}>
          <li>24/7 Emergency response cover</li>
          <li>Quarterly health checks</li>
          <li>Spa Discount</li>
          <li>Gymn Discount</li>
          <li>Pharmacy Discount</li>
          <li>Free malaria treatment</li>
        </ul>
        <MainButton label="Choose this plan" className="mt-4" />
      </div>
    </div>
  )
}

export default PricingCard
