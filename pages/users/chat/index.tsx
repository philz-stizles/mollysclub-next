import React, { useState } from 'react'
// import { StreamChat } from 'stream-chat'
// import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import ChannelListContainer from '@/components/chat/ChannelListContainer/ChannelListContainer'
import ChannelContainer from '@/components/chat/ChannelContainer/ChannelContainer'

const cookies = new Cookies()
// const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY)

const ChatPage = () => {
  const [createType, setCreateType] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {/* <Chat client={client} theme="team light"> */}
      <ChannelListContainer />
      <ChannelContainer />
      {/* </Chat> */}
    </div>
  )
}

export default ChatPage
