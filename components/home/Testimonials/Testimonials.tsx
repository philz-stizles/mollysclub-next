import { SectionHeader, TestimonialCard } from '@/components/ui'
import { TestimonialCardProps } from '@/components/ui/cards/TestimonialCard/TestimonialCard'
import React, { FC } from 'react'

type TestimonialsProps = {
  testimonials: TestimonialCardProps[]
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <SectionHeader
          title="What they say about us"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
        />

        <div className="row">
          {testimonials.map((testimonial, i) => {
            return <TestimonialCard key={i} {...testimonial} />
          })}
        </div>
      </div>
      <style>{`
        .testimonials {
          
        }`}</style>
    </section>
  )
}

export default Testimonials
