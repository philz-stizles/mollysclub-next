import React, { ReactElement, useState } from 'react'
import { DashboardLayout } from '@/components/layouts'
import ListGroup from './../../../../components/ui/lists/ListGroup'
import {
  AccountSettingsForm,
  NotificationSettingsForm,
  ProfileSettingsForm,
  SecuritySettingsForm,
} from '@/components/profile'
import profileListGroup from 'data/profile-list-group'

const ProfileDashboard = () => {
  const [activeForm, setActiveForm] = useState(1)
  let selectedForm = <ProfileSettingsForm />

  switch (activeForm) {
    case 1:
      selectedForm = <ProfileSettingsForm />
      break
    case 2:
      selectedForm = <AccountSettingsForm />
      break
    case 3:
      selectedForm = <NotificationSettingsForm />
      break
    case 4:
      selectedForm = <SecuritySettingsForm />
      break
    default:
      selectedForm = <ProfileSettingsForm />
      break
  }

  return (
    <div className="profile-dashboard">
      <div className="profile-dashboard__header">
        <h4 className="title">Profile Settings</h4>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ListGroup
            items={profileListGroup}
            activeItem={activeForm}
            onClick={(item: number) => setActiveForm(item)}
          />
        </div>
        <div className="col-md-8">{selectedForm}</div>
      </div>
      <style>{`
        .profile-dashboard {
          padding: 2rem;
        }

        .profile-dashboard__header {
          display: flex;
          align-items: center;
          padding: 0 0 15px 2px;
          position: relative;
        }

        .profile-dashboard__header .title {
          font-size: 24px;
          font-weight: 600;
          color: #06072d;
          margin-bottom: 5px;
          text-indent: -1px;
        }
      `}</style>
    </div>
  )
}

ProfileDashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default ProfileDashboard
