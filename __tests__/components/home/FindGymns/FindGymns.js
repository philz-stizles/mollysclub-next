import React from 'react'
import Image from 'next/image'
import SimpleArticle from '../../articles/SimpleArticle'
import styles from './FindGymns.module.scss'

const FindGymns = () => {
  return (
    <div className={styles.consultation}>
      <div className={['row'].join(' ')} style={{ flexDirection: 'row-reverse' }}>
        <div className={styles.consultation__article}>
          <SimpleArticle
            title="<h2>Consult a doctor anytime, <br /> anywhere and search</h2>"
            subTitle="find a gymn"
            btnText="Search specialists"
            text="Access to Medical Personnel for remote consultation: Have multiple chats with Medical Personnel over thirty (30) days. Get regular information on your current health status."
            list={[]}
          />
        </div>
        <div className={styles.consultation__image}>
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

  // #00BFA6
}

export default FindGymns
