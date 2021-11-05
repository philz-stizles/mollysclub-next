import { SectionHeader } from '@/components/ui'
import React, { FC } from 'react'
import styles from './Testimonials.module.scss'

interface ITestimonialsProps {
  testimonials: []
}

const Testimonials: FC<ITestimonialsProps> = ({ testimonials }) => {
  return (
    <section className={styles['services']}>
      <div className="wrapper">
        <div className={styles['pricing-plans__header']}>
          <SectionHeader
            title="What they say about us"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
          />
        </div>

        <div className="row-3 content"></div>
      </div>
    </section>
  )
}

export default Testimonials
