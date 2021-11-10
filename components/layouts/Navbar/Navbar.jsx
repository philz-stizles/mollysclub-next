/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import { useRouter } from 'next/router'
import Button from '../../ui/buttons/AppButton/AppButton'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className={styles.navbar}>
      <div className={['wrapper', styles['navbar__wrapper']].join(' ')}>
        <div className={styles.navbar__logo}>
          <img
            src="https://mollysclubng.com/wp-content/themes/getleads/assets/images/logo/logo-white.png"
            alt="Mollys Club Logo"
          />
        </div>

        <ul className={styles.navbar_nav}>
          <li className={styles.navbar_nav__item}>
            <a className={styles.navbar_nav__link} href="/about">
              About us
            </a>
          </li>
          <li className={styles.navbar_nav__item}>
            <a className={styles.navbar_nav__link} href="/find-a-doctor">
              Find a Doctor
            </a>
          </li>
          <li className={styles.navbar_nav__item}>
            <a className={styles.navbar_nav__link} href="/gymns">
              Gymns
            </a>
          </li>
          <li className={styles.navbar_nav__item}>
            <a className={styles.navbar_nav__link} href="/pharmacies">
              Pharmacies
            </a>
          </li>
          <li className={styles.navbar_nav__item}>
            <a className={styles.navbar_nav__link} href="/services">
              Find a Patient
            </a>
          </li>
          <li className={styles.navbar_nav__item}>
            <a className={styles.navbar_nav__link} href="/pharmacies">
              Spas
            </a>
          </li>
        </ul>
        {/*<ul className={styles.navbar_auth}>
          <Button onClick={() => router.push('/login')}>Join now</Button>
  </ul>*/}
      </div>
    </div>
  )
}

export default Navbar
