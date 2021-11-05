import { SectionHeader, ServiceCard } from '@/components/ui'
import React from 'react'
import styles from './Services.module.scss'

const Services = () => {
  return (
    <section className={styles['services']}>
      <div className="wrapper">
        <div className={styles['pricing-plans__header']}>
          <SectionHeader
            title="Health Services"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
          />
        </div>

        <div className="row-3 content">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  )
}

export default Services
