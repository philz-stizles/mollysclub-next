import React, { ReactElement } from 'react'
import { DashboardLayout } from '@/components/layouts'

const UserDashboard = () => {
  return <div></div>
}

UserDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default UserDashboard
