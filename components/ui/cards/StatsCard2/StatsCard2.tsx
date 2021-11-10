import { FC } from 'react'
import styles from './StatsCard2.module.scss'

type Props = {
  title: string
}

export const StatsCard2: FC<Props> = ({ title }) => {
  return (
    <div className={styles['stats-card-2']}>
      <h4 className={styles['title']}>{title}</h4>
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
    </div>
  )
}

export default StatsCard2
