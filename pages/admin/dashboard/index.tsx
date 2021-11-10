import React, { ReactElement } from 'react'
import { DashboardLayout } from '@/components/layouts'
import { StatsCard2 } from '@/components/ui'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Row1 />
      <style jsx>{`
        .admin-dashboard {
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

const Row1 = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-12">
        <StatsCard2 title="Doctors" />
      </div>
      <div className="col-xl-3 col-lg-6 col-12">
        <StatsCard2 title="Patients" />
      </div>
      <div className="col-xl-3 col-lg-6 col-12">
        <StatsCard2 title="Pharmacies" />
      </div>
      <div className="col-xl-3 col-lg-6 col-12">
        <StatsCard2 title="Test Centers" />
      </div>
    </div>
  )
}

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default AdminDashboard
