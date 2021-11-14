import { DashboardLayout } from '@/components/layouts'
import React, { ReactElement } from 'react'

const MeetingsDashboard = () => {
  return <div>Meetings</div>
}

MeetingsDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default MeetingsDashboard
