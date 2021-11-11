import React from 'react'
import { AppButton, TextInput } from '../ui'
import CardWrapper from '../ui/cards/CardWrapper/CardWrapper'

const SecuritySettingsForm = () => {
  return (
    <CardWrapper title="Security Settings">
      <div className="hr-spacer"></div>
      <TextInput
        label={'Full name'}
        placeholder={'Enter your full name'}
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
      <TextInput
        label={'Phone'}
        placeholder={'Enter your phone number'}
        value={''}
      />
      <AppButton label={'Update Profile'} />
      <AppButton className="ms-2" label={'Reset Changes'} outlined />
    </CardWrapper>
  )
}

export default SecuritySettingsForm
