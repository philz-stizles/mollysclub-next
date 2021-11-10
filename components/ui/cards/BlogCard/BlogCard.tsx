import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const BlogCard = () => {
  return (
    <div className="col-lg-4 col-md-6 px-4 p">
      <div className="blog-card">
        <div className="blog-card__img">
          <Link href="blog-details.html">
            <a>
              <Image
                src="/images/blog/pexels-marta-branco.jpg"
                alt="img"
                width={500}
                height={300}
              />
            </a>
          </Link>
        </div>
        <div className="blog-card__body">
          <span className="blog-card__date">19. august. 2019</span>
          <h3 className="blog-card__title">
            <Link href="blog-details.html">
              <a>Dietary Supplement Report Market Expected</a>
            </Link>
          </h3>
          <p className="blog-card__text">
            Orem Ipsum is simply dummy text the printing and types industry.
            Orem Ipsum is simpl text the printing and types industry.
          </p>
          <Link href="blog-details.html">
            <a className="blog-card__action m-hr">
              <span>Read More</span> <i className="las la-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .blog-card {
          box-shadow: 0px 0px 10px 0px rgb(89 75 128 / 9%);
          margin-bottom: 30px;
        }

        .blog-card__img img {
          transition: all 0.9s ease;
        }

        .blog-card:hover .blog-card__img img {
          transform: scale(1.1) rotate(1deg);
        }

        .blog-card__body {
          padding: 40px 30px 35px;
          border: 1px solid #f3f3f3;
          border-top: none;
          background: #fff;
        }

        .blog-card__date {
          font-size: 12px;
          font-weight: 500;
          display: block;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .blog-card__title {
          font-size: 22px;
          margin-bottom: 15px;
          font-weight: 600;
          line-height: 1.3;
        }

        .blog-card__text {
          margin-bottom: 30px;
        }

        .blog-card__action {
          font-size: 14px;
          font-weight: 500;
          color: #062a4d;
        }

        .blog-card__action i {
          font-size: 24px;
          margin-left: 1rem;
        }
      `}</style>
    </div>
  )
}

export default BlogCard
