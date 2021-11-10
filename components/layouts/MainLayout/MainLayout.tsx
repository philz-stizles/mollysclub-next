import React, { ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
// Components
import { RoundButton } from '@/components/ui'
import { ContactBanner, Footer, Header } from '..'

type MainLayoutProps = {
  children: ReactElement
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useRouter()

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0)
  }, [pathname])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <ContactBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <RoundButton float icon="las la-arrow-up" onClick={() => scrollToTop()} />
    </>
  )
}

export default MainLayout
