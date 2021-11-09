import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// import NotificationContext from '@/store/context/notification-context'
import DashboardLayout from '@/components/layouts/DashboardLayout/DashboardLayout'
// import Loader from '@/components/ui/loaders/Loader'
// import Table from '@/components/ui/Table/Table'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const Doctors = () => {
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
    <DashboardLayout>
      <div>Doctor</div>
      {/* <div>{doctorsOrLoader}</div> */}
    </DashboardLayout>
  )
}

export default Doctors
