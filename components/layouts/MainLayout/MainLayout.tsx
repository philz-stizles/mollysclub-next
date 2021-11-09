import React, { ReactElement } from 'react'
import { HiArrowNarrowUp } from 'react-icons/hi'
// Components
import { RoundButton } from '@/components/ui'
import { ContactBanner, Footer, Header } from '..'

type MainLayoutProps = {
  children: ReactElement
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <ContactBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <RoundButton float icon="las la-arrow-up" />
    </>
  )
}

export default MainLayout
