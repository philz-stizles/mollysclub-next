import React from 'react'
import { SectionHeader, PricingCard } from '@/components/ui'

import styles from './PricingPlans.module.scss'

const PricingPlans = () => {
  return (
    <section className={styles['pricing-plans']}>
      <div className="container px-lg-5">
        <SectionHeader
          title="Pricing plans"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
        />

        <div className="row content px-lg-5">
          <PricingCard className="text-center" />
          <PricingCard className="text-center" />
          <PricingCard className="text-center" />
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
