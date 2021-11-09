import React, { FC } from 'react'
import img from '../../../public/images/designs/Hinterrhein.svg'

type ICtaProps = {}

const Cta: FC<ICtaProps> = () => {
  // const img = require('../../../public/images/designs/Hinterrhein.svg')
  return (
    <section className="cta section position-relative">
      <div className="cta__image"></div>
      <div className="container container">
        <div className="justify-content-center row">
          <div className="col-lg-6">
            <div className="text-center">
              <h2 className="text-white mb-3">
                Do You Need Success Product Also ?
              </h2>
              <a className="btn btn-light mt-4" href="/index4">
                Join the Platform
              </a>
              <a className="text-white-50" href="/index4">
                <p className="mb-0 mt-4">Or contact with us</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta {
            background: linear-gradient(
                90deg,
                rgb(109, 98, 253, 0.97),
                rgb(72, 58, 252, 0.97)
              ),
              url('/images/designs/Hinterrhein.svg');
          }

          .cta__image {
          }
        `}
      </style>
    </section>
  )
}

export default Cta
