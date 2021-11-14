import React from 'react'
import { getCookie } from '../utils/auth'
import axios from 'axios'
import { NextPage } from 'next'

const withUser = (Page: NextPage) => {
  const WithAuthUser = (props: any) => <Page {...props} />

  WithAuthUser.getInitialProps = async (context: any) => {
    const token = getCookie('token', context.req)
    let user = null
    let userLinks = null

    if (token) {
      try {
        const response = await axios.get(`${process.env.API}/users/user`, {
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
      context.res.writeHead(302, { Location: '/' })
      context.res.end()
    } else {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
        user,
        userLinks,
        token,
      }
    }
  }

  return WithAuthUser
}

export default withUser
