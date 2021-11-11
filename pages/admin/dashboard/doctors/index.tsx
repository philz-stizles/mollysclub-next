import React, { ReactElement, useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// import NotificationContext from '@/store/context/notification-context'
import DashboardLayout from '@/components/layouts/DashboardLayout/DashboardLayout'
import AppTable from '@/components/ui/tables/AppTable/AppTable'
import CardWrapper from '@/components/ui/cards/CardWrapper/CardWrapper'
// import Loader from '@/components/ui/loaders/Loader'
// import Table from '@/components/ui/Table/Table'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const DoctorsDashboard = () => {
  // const [doctors, setDoctors] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const notificationCtx = useContext(NotificationContext)
  // let doctorsOrLoader = <Loader color />

  // useEffect(() => {
  //   loadCategories()
  // }, [])

  // const loadCategories = async () => {
  //   setIsLoading(true)
  //   fetch('/api/doctors', {
  //     method: 'GET',
  //     // headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setDoctors(data.data)
  //       setIsLoading(false)
  //     })
  //     .catch(error => {
  //       setIsLoading(false)
  //       console.log(error)
  //     })
  // }

  // if (!isLoading) {
  //   doctorsOrLoader = (
  //     <Table
  //       columns={[]}
  //       rows={[
  //         {
  //           name: 'Theophilus',
  //           description: 'Pediatrician',
  //           createdBy: 'Stan',
  //           createdAt: '01-11-22',
  //           status: 'done',
  //         },
  //         {
  //           name: 'Theophilus',
  //           description: 'Pediatrician',
  //           createdBy: 'Stan',
  //           createdAt: '01-11-22',
  //           status: 'done',
  //         },
  //       ]}
  //     />
  //   )
  // }

  return (
    <div className="doctors-dashboard">
      <h4>Doctor</h4>
      <CardWrapper title={'List of Doctors'}>
        <AppTable />
      </CardWrapper>
      <style>{`
        .doctors-dashboard {
           padding: 2rem;
        }
      `}</style>
    </div>
  )
}

DoctorsDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default DoctorsDashboard
