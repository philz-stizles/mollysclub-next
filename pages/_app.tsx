import React, { ReactElement, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
// Providers
import { ModalProvider } from '@/store/context/modal-context'
import { SidebarProvider } from '@/store/context/sidebar-context'
import { NotificationProvider } from '@/store/context/notification-context'
import { AlertProvider } from '@/store/context/alert-context'
// Global styles.
import 'bootstrap/dist/css/bootstrap.css'
import '../public/icons/linea/icon-font.css'
import '../public/icons/line-awesome/1.3.0/css/line-awesome.min.css'
import '../styles/globals.scss'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    // import('bootstrap/dist/js/bootstrap')
  }, [])
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <ModalProvider>
      <AlertProvider>
        <NotificationProvider>
          <SidebarProvider>
            {getLayout(<Component {...pageProps} />)}
          </SidebarProvider>
        </NotificationProvider>
      </AlertProvider>
    </ModalProvider>
  )
}
