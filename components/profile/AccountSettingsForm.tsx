import React from 'react'
import { AppButton, TextInput } from '../ui'
import CardWrapper from '../ui/cards/CardWrapper/CardWrapper'

const AccountSettingsForm = () => {
  return (
    <CardWrapper title="Account Settings">
      <div className="hr-spacer"></div>
      <TextInput
        label={'Username'}
        placeholder={'Enter your username'}
        value={''}
      />
      <TextInput
        label={'Address'}
        placeholder={'Enter your address'}
        value={''}
      />
      <TextInput
        label={'Location'}
        placeholder={'Enter your location'}
        value={''}
      />
      <AppButton label={'Delete Account'} />
    </CardWrapper>
  )
}

export default AccountSettingsForm
