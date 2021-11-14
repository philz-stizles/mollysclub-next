import { DashboardLayout } from '@/components/layouts'
import React, { ReactElement } from 'react'

const PatientDashboard = () => {
  return <div>Patient</div>
}

PatientDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default PatientDashboard
