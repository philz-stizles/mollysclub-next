import React, { ReactElement } from 'react'
import DashboardLayout from '../../../../components/layouts/DashboardLayout/DashboardLayout'

const PatientDashboard = () => {
  return <div>Patient</div>
}

PatientDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default PatientDashboard
