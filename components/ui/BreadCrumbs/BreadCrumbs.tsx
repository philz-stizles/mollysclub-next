import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const BreadCrumbs = () => {
  const router = useRouter()
  return (
    <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
      <li className="px-2">
        <Link
          href={{
            pathname: '/',
          }}
        >
          <a className="text-gray-600 no-underline text-indigo">Home</a>
        </Link>
      </li>
      {router.query.fromSearch && (
        <>
          <li>/</li>
          <li className="px-2">
            <Link
              href={{
                pathname: '/jobsearch',
              }}
            >
              <a className="text-gray-600 no-underline text-indigo">
                Search Page
              </a>
            </Link>
          </li>
        </>
      )}
      <li>/</li>
      <li className="px-2"> Job - {router.query.jobId} </li>
    </ol>
  )
}

export default BreadCrumbs
