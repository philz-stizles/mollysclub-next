import React from 'react'
import { getCookie } from '../utils/auth'
import axios from 'axios'
import { NextPage } from 'next'

const withPublic = (Page: NextPage) => {
  const WithAuthPublic = (props: any | unknown) => <Page {...props} />

  WithAuthPublic.getInitialProps = async (context: any) => {
    // Retrieve token from cookie for either client-side or server-side
    const token = getCookie('token', context.req) // getCookie() will check where the app is
    // running(client or server), and check the cookie
    console.log(token)

    let user = null
    let userLinks = null

    if (token) {
      try {
        const response = await axios.get(`${process.env.API}/users/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        user = response.data.data.user
        userLinks = response.data.data.links
      } catch (error: any | unknown) {
        console.log(error)
        if (error.response.status === 401 || error.response.status === 400) {
          user = null
        }
      }
    }

    if (user === null) {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
        user,
        userLinks,
        token,
      }
    } else {
      context.res.writeHead(302, { Location: '/' })
      context.res.end()
    }
  }

  return WithAuthPublic
}

export default withPublic
