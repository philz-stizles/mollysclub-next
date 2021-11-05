import React, { FC } from 'react'
import { Avatar } from '../..'
import styles from './TestimonialCard.module.scss'

interface ITestimonialCardProps {
  image: {
    url: string
  }
  fullname: string
  role: string
  testimonial: string
}

const TestimonialCard: FC<ITestimonialCardProps> = ({
  image,
  fullname,
  role,
  testimonial,
}) => {
  return (
    <article className={styles['testimonial-card']}>
      {/* <Avatar src={image && image.url ? image.url : ''} alt={fullname} /> */}
      <h5 className="full-name">{fullname}</h5>
      <p className="role">{role}</p>
      <span className="double-quotes"></span>
      <p className="testimonial">{testimonial}</p>
    </article>
  )
}

export default TestimonialCard
