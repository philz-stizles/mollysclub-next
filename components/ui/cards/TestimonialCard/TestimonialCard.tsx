import React, { FC } from 'react'
import { Avatar } from '../..'

export type TestimonialCardProps = {
  image: {
    url: string
  }
  name: string
  role?: string
  testimonial?: string
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  image,
  name,
  role,
  testimonial,
}) => {
  return (
    <div className="col-lg-4">
      <article className="testimonial-card">
        <Avatar src={image && image.url ? image.url : ''} alt={name} />
        <h5 className="testimonial-card__name">{name}</h5>
        <p className="testimonial-card__role">{role}</p>
        <i className="la la-quote-left"></i>
        <p className="testimonial-card__text">{testimonial}</p>
        <style jsx>{`
          .testimonial-card {
            transition: all 0.5s;
            border-bottom: 2px solid transparent;
            padding: 30px;
            box-shadow: 0px 0px 10px 0px rgb(89 75 128 / 9%);
            background-color: #fff;
            text-align: center;
            margin: 1rem;
          }

          .testimonial-card__name {
            font-size: 18px;
            color: #343a40;
            margin-top: 1.5rem;
          }

          .testimonial-card__role {
            font-size: 14px;
            color: #949da8;
            line-height: 1.8;
            margin-bottom: 1rem;
          }

          .testimonial-card__text {
            font-size: 15px;
            color: #949da8;
            margin-top: 1rem;
            line-height: 1.8;
          }

          .testimonial-card i {
            color: #b8b3fe;
            font-size: 24px;
          }

          .testimonial-card:hover {
            box-shadow: 0 3px 16px rgb(0 0 0 / 10%);
          }

          .testimonial-card:hover img {
            box-shadow: 0 7px 12px rgb(109 98 253 / 30%);
            transform: translateY(-6 px);
          }
        `}</style>
      </article>
    </div>
  )
}

export default TestimonialCard
