import React from 'react'
import styles from './ContactBanner.module.scss'

const ContactBanner = () => {
  return (
    <div className={styles['info-banner']}>
      <div
        className={[
          'wrapper flex-row-center',
          styles['info-banner__wrapper'],
        ].join(' ')}
      >
        <ul
          className={['flex-row-center', styles['info-banner__info']].join(' ')}
        >
          <li>
            <i></i>
            <a href="">Emergency Line: (002) 01061245741</a>
          </li>
          <li></li>
          <li>
            <i className="icon-basic-clock"></i>
            <a href="">Mon - Fri: 8:00 am - 7:00 pm</a>
          </li>
        </ul>
        <ul
          className={['flex-row-center', styles['info-banner__social']].join(
            ' '
          )}
        >
          <li>
            <a href="">
              <i className="lab la-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="lab la-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="lab la-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactBanner
