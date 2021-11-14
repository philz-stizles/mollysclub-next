import { AppButton } from '@/components/ui'
import React, { Fragment } from 'react'
import HTMLRenderer from 'react-html-renderer'
import styles from './SimpleArticle.module.scss'

// type SimpleArticleProps = {
//   title: string
//   subTitle: string
//   text: string
//   btnText: string
//   list: object[]
// }

const SimpleArticle = ({ title, subTitle, text, btnText, list }) => {
  return (
    <div className={styles.simpleArticle}>
      <h6 className={styles.simpleArticle__subTitle}>{subTitle}</h6>
      <HTMLRenderer
        html={title}
        components={{
          h2: props => (
            <h2
              className={['u-margin-bxs', styles.simpleArticle__title].join(
                ' '
              )}
            >
              {props.children}
            </h2>
          ),
        }}
      />
      <p className={['u-margin-bs', styles.simpleArticle__text].join(' ')}>
        {text}
      </p>
      {list && (
        <ul>
          {list.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      )}
      <AppButton onClick={() => true}>{btnText} &rarr;</AppButton>
    </div>
  )
}

export default SimpleArticle
