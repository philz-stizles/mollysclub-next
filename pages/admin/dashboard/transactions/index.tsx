import React, { ReactElement } from 'react'
import DashboardLayout from '../../../../components/layouts/DashboardLayout/DashboardLayout'

const TransactionDashboard = () => {
  return <div>Transactions</div>
}

TransactionDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default TransactionDashboard
