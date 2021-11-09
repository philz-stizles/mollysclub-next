import React, { ReactElement, useState } from 'react'
import { DashboardHeader, Sidebar } from '..'
import SIDEBAR_BLUEPRINT from './../../../data/sidebar-data'

type DashboardLayoutProps = {
  children: ReactElement
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const menuBlueprint = SIDEBAR_BLUEPRINT
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} blueprint={menuBlueprint} />
      <div>
        <DashboardHeader />
        {children}
      </div>
      <style jsx>{``}</style>
    </>
  )
}

export default DashboardLayout
