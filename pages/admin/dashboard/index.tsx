import React, { ReactElement } from 'react'
import { DashboardLayout } from '@/components/layouts'

const AdminDashboard = () => {
  return <div></div>
}

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default AdminDashboard
