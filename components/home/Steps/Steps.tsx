import React from 'react'
// import BorderlessCard from '../../ui/Cards/BorderlessCard/BorderlessCard'
import styles from './Steps.module.scss'

const Steps = () => {
  return (
    <section className={styles.stepsSection}>
      <div className="wrapper">
        <div className={styles.stepsSection__header}>
          <h6>FASTEST SOLUTION</h6>
          <h2>4 easy steps to get your solution</h2>
        </div>
        <div className="row">
          {/* <BorderlessCard
            icon="icon-basic-magnifier"
            title="Search specialist"
            text="Mollis ante, at porttitor nulla finibus acr et leo ac quam lobortis feugiat ac sed . Nunc condimentum justo lectus."
          />
          <BorderlessCard
            icon="icon-basic-magnifier"
            title="Check specialist profile"
            text="Ultricies mollis ante, at nulla finibus acr et leo ac quam lobortis feugiat ac sed . Nunc condimentum justo lectus."
          />
          <BorderlessCard
            icon="icon-basic-magnifier"
            title="Schedule appointment"
            text="Ante porttitor nulla finibus acr et leo ac quam lobortis feugiat ac sed . Nunc condimentum justo lectus."
          />
          <BorderlessCard
            icon="icon-basic-magnifier"
            title="Get perscriptions"
            text="Porttitor nulla finibus acr et leo ac quam lobortis feugiat ac sed . Nunc condimentum justo lectus."
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Steps
