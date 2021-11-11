import React, { FC } from 'react'
import CardWrapper from '../CardWrapper/CardWrapper'
import styles from './StatsCard.module.scss'

type Props = {
  title: string
}

export const StatsCard2: FC<Props> = ({ title }) => {
  return (
    <CardWrapper title={title}>
      {/* /.box-title */}
      {/* <div className={styles['drop-down']}>
        <a
          href="#"
          className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"
        ></a>
        <ul className="sub-menu">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else there</a>
          </li>
          <li className="split"></li>
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
        
      </div> */}
      {/* /.dropdown js__dropdown  */}
      <div className={styles['content']}>
        <div className={styles['percent']}>
          <i className="las la-chart-area"></i>53%
        </div>
        {/* /.percent  */}
        <div className={styles['content__right']}>
          <h2 className={styles['counter']}>837</h2>
          {/* /.counter  */}
          <p className={styles['text']}>Projects</p>
          {/* /.text  */}
        </div>
        {/* /.right-content  */}
        <div className="clear"></div>
        {/* /.clear  */}
        <div className={styles['percent-bar']}>
          <div className={styles['percent-bar__bg']}></div>
          <div
            className={styles['percent-bar__fill']}
            data-width="70%"
            style={{ width: '70%' }}
          ></div>
          {/* /.bar js__width bg-success  */}
        </div>
        {/* /.process-bar  */}
      </div>
      {/* /.content widget-stat  */}
    </CardWrapper>
  )
}

export const StatsCard3 = ({ title }: Props) => {
  return (
    <CardWrapper title={title}>
      {/* <!-- /.box-title --> */}
      {/* <div className="dropdown js__drop_down">
						<a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
						<ul className="sub-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else there</a></li>
							<li className="split"></li>
							<li><a href="#">Separated link</a></li>
						</ul>
						<!-- /.sub-menu -->
					</div> */}
      {/* <!-- /.dropdown js__dropdown --> */}
      <div className={styles['content']}>
        <div className={styles['content__circle']}>
          <span>76%</span>
          <div className={styles['content__circle--slice']}>
            <div
              className={styles.bar}
              style={{ transform: 'rotate(273.6deg)' }}
            ></div>
            <div className={styles.fill}></div>
          </div>
        </div>
        {/* <!-- /.c100 p58 --> */}
        <div className={styles['content__right']}>
          <h2 className={styles['counter']}>804</h2>
          {/* <!-- /.counter --> */}
          <p className={styles['text']}>Disk usage</p>
          {/* <!-- /.text --> */}
        </div>
        {/* <!-- /.right-content --> */}
      </div>
      {/* <!-- /.content --> */}
    </CardWrapper>
  )
}
