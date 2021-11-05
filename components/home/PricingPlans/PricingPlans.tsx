import React from 'react'
import { SectionHeader, PricingCard } from '@/components/ui'

import styles from './PricingPlans.module.scss'

const PricingPlans = () => {
  return (
    <section className={styles['pricing-plans']}>
      <div className="wrapper">
        <div className={styles['pricing-plans__header']}>
          <SectionHeader
            title="Pricing plans"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
          />
        </div>

        <div className="row-3 content">
          <PricingCard className="text-center" />
          <PricingCard className="text-center" />
          <PricingCard className="text-center" />
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
