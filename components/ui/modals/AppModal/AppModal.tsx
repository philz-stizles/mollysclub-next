import { useModal } from '@/store/context/modal-context'
import React from 'react'
import { AppButton } from '../..'
import styles from './AppModal.module.scss'

type AppModalProps = {
  isOpen: boolean
  title: string
}

const AppModal = ({ isOpen, title }: AppModalProps) => {
  const { closeModal } = useModal()
  return (
    <div
      className={[
        styles['app-modal'],
        isOpen ? styles['app-modal--show'] : '',
      ].join(' ')}
      id="boostrapModal-1"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel"
      style={{ paddingRight: '16px', display: 'block' }}
    >
      <div
        className={[
          styles['app-modal__dialog'],
          isOpen ? styles['app-modal__dialog--show'] : '',
        ].join(' ')}
        role="document"
      >
        <div className={styles['app-modal__content']}>
          <div className={styles['app-modal__header']}>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
              Modal title
            </h4>
          </div>
          <div className={styles['app-modal__body']}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sunt
              tempora, aspernatur reprehenderit expedita maxime assumenda
              molestiae id minus libero soluta? Ex sapiente cum perspiciatis rem
              deserunt molestias perferendis eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate impedit perspiciatis quae et consequuntur fugiat nostrum
              rem officiis omnis quo, assumenda maxime, praesentium quas, dolore
              ipsum. Cum nesciunt, maxime tempora.
            </p>
          </div>
          <div className={styles['app-modal__footer']}>
            <AppButton
              label="Close"
              onClick={() => {
                console.log('App button click')
                closeModal()
              }}
            />

            <AppButton label="Save changes" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppModal
