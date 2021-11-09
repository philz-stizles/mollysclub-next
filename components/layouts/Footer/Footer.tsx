import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFacebook, BsFillCaretRightFill, BsTwitter } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { Logo } from '@/components/ui'

const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterBottom />
      <style jsx>{`
        .footer {
          background: #121214;
          color: #969696;
        }
      `}</style>
    </footer>
  )
}

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 pe-5">
            <Logo className="footer-top_logo" />
            <p className="footer-top_about pe-5">
              Orem Ipsum is simply dumm text the printing and types indstr sum
              has been the industry
            </p>
            <SocialLinks />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4">
                <QuickLinks />
              </div>
              <div className="col-lg-4">
                <Services />
              </div>
              <div className="col-lg-4">
                <Support />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <Contact />
          </div>
        </div>
      </div>
      <style>
        {`
          .footer-top {
            padding: 10rem 0;
          }

          .footer-top_logo {
            margin-bottom: 35px;
          }

          .footer-top_about{
            color: #969696;
            margin-bottom: 25px;
            font-size: 14px;
            font-weight: 400;
          }
        `}
      </style>
    </div>
  )
}

const SocialLinks = () => {
  return (
    <ul className="social-icons m-hr p-0">
      <SocialIcon href="" icon={BsTwitter} />
      <SocialIcon href="" icon={BsFacebook} />
      <SocialIcon href="" icon={BsTwitter} />
      <style jsx>{`
        .social-icons {
          margin: 1rem 0;
        }
      `}</style>
    </ul>
  )
}

const SocialIcon = ({ href, icon }: { href: string; icon: FC }) => {
  const Icon = icon
  return (
    <li className="social-link">
      <Link href={href}>
        <a className="mb-0">
          <Icon />
        </a>
      </Link>
      <style jsx>{`
        .social-link:not(:last-of-type) {
          margin-right: 20px;
        }

        svg {
          color: #8338ec;
          font-size: 17px;
        }
      `}</style>
    </li>
  )
}

const QuickLinks = () => {
  return (
    <div className="footer-nav">
      <FooterTitle title="Quick Links" />
      <div className="footer-nav__content">
        <ul>
          <FooterNavLink label="About Us" />
          <FooterNavLink label="Delivery Information" />
          <FooterNavLink label="Terms & Conditions" />
          <FooterNavLink label="Privacy Policy" />
          <FooterNavLink label="Refund Policy" />
        </ul>
      </div>
      <style jsx>{`
        .footer-nav {
          margin-bottom: 50 px;
        }

        .footer-nav__content ul {
          padding: 0;
        }
      `}</style>
    </div>
  )
}

const Services = () => {
  return (
    <div className="footer-nav">
      <FooterTitle title="Our Services" />
      <div className="footer-nav__content">
        <ul>
          <FooterNavLink label="About Us" />
          <FooterNavLink label="Delivery Information" />
          <FooterNavLink label="Terms & Conditions" />
          <FooterNavLink label="Privacy Policy" />
          <FooterNavLink label="Refund Policy" />
        </ul>
      </div>
      <style jsx>{`
        .footer-nav {
          margin-bottom: 50 px;
        }

        .footer-nav__content ul {
          padding: 0;
        }
      `}</style>
    </div>
  )
}

const Support = () => {
  return (
    <div className="footer-nav">
      <FooterTitle title="Support" />
      <div className="footer-nav__content">
        <ul>
          <FooterNavLink label="About Us" />
          <FooterNavLink label="Delivery Information" />
          <FooterNavLink label="Terms & Conditions" />
          <FooterNavLink label="Privacy Policy" />
          <FooterNavLink label="Refund Policy" />
        </ul>
      </div>
      <style jsx>{`
        .footer-nav {
          margin-bottom: 50 px;
        }

        .footer-nav__content ul {
          padding: 0;
        }
      `}</style>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="footer-contact">
      <FooterTitle title="Get in Touch" />
      <p className="footer-contact__message">
        If you have any questions or need help, feel free to contact with our
        team.
      </p>
      <p>
        <i className="las la-map-marker"></i>MollysClub Ltd, Lagos, Nigeria
      </p>
      <p>
        <i className="las la-phone"></i>(+1) 234 567 8901
      </p>
      <p>
        <i className="las la-envelope-open-text"></i>hello@medical-guide.com
      </p>
      <style jsx>{`
        .footer-contact__message {
          margin-bottom: 20px;
        }

        .footer-contact i {
          margin-right: 1rem;
          color: #fff;
          font-size: 24px;
        }
      `}</style>
    </div>
  )
}

const FooterTitle = ({ title }: { title: string }) => {
  return (
    <div className="footer-title">
      <h5>{title}</h5>
      <style jsx>{`
        .footer-title {
          margin-bottom: 30px;
        }

        .footer-title h5 {
          font-size: 18px;
          color: #ffffff;
          margin-bottom: 0;
          opacity: 0.75;
          text-transform: capitalize;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

const FooterNavLink = ({ label }: { label: string }) => {
  return (
    <IconContext.Provider
      value={{
        size: '.7em',
        style: { display: 'inline-block', marginRight: '5px' },
        className: 'global-class-name',
      }}
    >
      <li className="footer-nav-link">
        <Link href="/">
          <a className="m-hr">
            <BsFillCaretRightFill />
            {label}
          </a>
        </Link>
        <style jsx>{`
          .footer-nav-link {
            margin-bottom: 20px;
            line-height: 1;
          }

          .footer-nav-link a {
            font-size: 14px;
            font-weight: 400;
          }
        `}</style>
      </li>
    </IconContext.Provider>
  )
}

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="copyright">
              © <a href="http://dspyder.com/html/kite/">MollysClub</a> 2021, All
              Rights Reserved. Designed &amp; Developed by{' '}
              <Link href="http://tinyint.io">
                <a className="developer">TinyInt.io</a>
              </Link>
            </p>
          </div>
          <div className="col-lg-6">
            <Policies />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-bottom {
            background: #0c0b0d;
            padding: 35px 0;
          }

          .footer-bottom .developer {
            color: #8338ec;
          }
        `}
      </style>
    </div>
  )
}

const Policies = () => {
  return (
    <ul className="policies">
      <li>
        <Link href="/">
          <a>Terms & Conditions</a>
        </Link>
      </li>
      |
      <li>
        <Link href="/">
          <a>Privacy Policy</a>
        </Link>
      </li>
      |
      <li>
        <Link href="/">
          <a>Cookies</a>
        </Link>
      </li>
      <style jsx>{`
        .policies {
          margin: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .policies li {
          margin: 0 1rem;
        }

        .policies a {
        }
      `}</style>
    </ul>
  )
}

export default Footer
