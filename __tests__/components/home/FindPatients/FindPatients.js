import React from 'react'
import Image from 'next/image'
import SimpleArticle from '../../articles/SimpleArticle'
import styles from './FindPatients.module.scss'

const FindPatients = () => {
  return (
    <div className={styles.find_patients}>
      <div className={['row'].join(' ')} style={{ flexDirection: 'row-reverse' }}>
        <div className={styles.find_patients__article}>
          <SimpleArticle
            title="<h2>Consult a doctor anytime, <br /> anywhere and search</h2>"
            subTitle="find patients"
            btnText="Search specialists"
            text="Access to Medical Personnel for remote find_patients: Have multiple chats with Medical Personnel over thirty (30) days. Get regular information on your current health status."
            list={[]}
          />
        </div>
        <div className={styles.find_patients__image}>
          <Image
            src="/images/personal_trainer_3.svg"
            alt="Gymns"
            width={400}
            height={400}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export default FindPatients
