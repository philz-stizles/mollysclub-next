import React, { ReactElement } from 'react'
import { DashboardLayout } from '@/components/layouts'
import { StatsCard2, StatsCard3, UserCard } from '@/components/ui'
import BarChart from './../../../components/ui/charts/BarChart/BarChart'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Row1 />
      {/* <Row2 /> */}
      <Row3 />
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
        <StatsCard3 title="Patients" />
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

const Row2 = () => {
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-12">
        <BarChart title="Patients" />
      </div>
      <div className="col-xl-4 col-lg-6 col-12">
        <BarChart title="Patients" />
      </div>
      <div className="col-xl-4 col-lg-6 col-12">
        <BarChart title="Patients" />
      </div>
    </div>
  )
}

const Row3 = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-12">
        <UserCard
          name="Betty Simmons"
          imgSrc="/images/user.jpg"
          role="Manager"
          email="hello@ninjateam.org"
        />
      </div>
      <div className="col-xl-3 col-lg-6 col-12">
        <UserCard
          name="Betty Simmons"
          imgSrc="/images/user.jpg"
          role="Manager"
          email="hello@ninjateam.org"
        />
      </div>
      <div className="col-xl-3 col-lg-6 col-12">
        <UserCard
          name="Betty Simmons"
          imgSrc="/images/user.jpg"
          role="Manager"
          email="hello@ninjateam.org"
        />
      </div>
      <div className="col-xl-3 col-lg-6 col-12">
        <UserCard
          name="Betty Simmons"
          imgSrc="/images/user.jpg"
          role="Manager"
          email="hello@ninjateam.org"
        />
      </div>
    </div>
  )
}

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default AdminDashboard
