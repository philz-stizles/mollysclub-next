import Hamburger from '@/components/ui/Hamburger/Hamburger'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <Hamburger />
      <style jsx>
        {`
          .dashboard-header {
            height: 75px;
            position: fixed;
            top: 0px;
            left: 260px;
            z-index: 20;
            right: 0px;
            padding: 0px 20px 0px 80px;
            background: #304ffe;
            color: #ffffff;
          }
        `}
      </style>
    </div>
  )
}

export default DashboardHeader
