import { DashboardLayout } from '@/components/layouts'
import React, { ReactElement } from 'react'

const NotificationDashboard = () => {
  return <div>Notifications</div>
}

NotificationDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default NotificationDashboard
