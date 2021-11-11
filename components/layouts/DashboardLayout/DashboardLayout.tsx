import { AppModal, Backdrop } from '@/components/ui'
import Script from 'next/script'
import React, { ReactElement, useState } from 'react'
import { DashboardHeader, Sidebar } from '..'
import { useModal } from '@/store/context/modal-context'
import SIDEBAR_BLUEPRINT from './../../../data/sidebar-data'
// Providers

type DashboardLayoutProps = {
  children: ReactElement
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { isOpen } = useModal()
  console.log('DashboardLayout', isOpen)
  const menuBlueprint = SIDEBAR_BLUEPRINT
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} blueprint={menuBlueprint} />
      <div className="dashboard__content">
        <DashboardHeader />
        {children}
        {/* <AppModal isOpen={isOpen} title="Modal" />
        <Backdrop isShowing={isOpen} /> */}
      </div>
      <Script
        src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"
        strategy="beforeInteractive"
      />
      <style jsx>{`
        .dashboard__content {
          background: #f5f7fa;
          position: relative;
          min-height: 100vh;
        }

        @media (min-width: 992px) {
          .dashboard__content {
            margin-left: 230px;
          }
        }

        @media (min-width: 1200px) {
          .dashboard__content {
            margin-left: 240px;
          }
        }
      `}</style>
    </>
  )
}

export default DashboardLayout
