import React from 'react'
// import FlipCard from '../../cards/FlipCard/FlipCard'

const Membership = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        {/* <FlipCard /> */}

        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--2"></div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--2">
                The Forest Hiker
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>7 day tours</li>
                <li>Up to 40 people</li>
                <li>6 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty: medium</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-2">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$497</p>
              </div>
              <a href="#popup" className="btn btn--white">
                Book now!
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--3"></div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--3">
                The Snow Adventurer
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>5 day tours</li>
                <li>Up to 15 people</li>
                <li>3 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty: hard</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-3">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$897</p>
              </div>
              <a href="#popup" className="btn btn--white">
                Book now!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  )
}

export default Membership
