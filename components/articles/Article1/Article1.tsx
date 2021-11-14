import React from 'react'
import Link from 'next/link'

const Article1 = ({
  title,
  content,
  linkRef,
  linkName,
}: {
  title: string
  content: string
  linkName: string
  linkRef: string
}) => {
  return (
    <div className="Article1">
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div>
        <Link href={linkRef}>
          <a>{linkName}</a>
        </Link>
      </div>
    </div>
  )
}

export default Article1
