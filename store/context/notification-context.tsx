/* eslint-disable react/prop-types */
import { createContext, ReactNode, useEffect, useState } from 'react'

type Notification = {
  title: string
  message: string
  status: string
}

type NotificationContextType = {
  notification: null | Notification
  showNotification: (notification: Notification) => any
  hideNotification: () => any
}

const NotificationContext = createContext<NotificationContextType>({
  notification: null, // {title, message, status }
  // eslint-disable-next-line no-unused-vars
  showNotification: () => {},
  hideNotification: () => {},
})

type Props = {
  children: ReactNode
}

export const NotificationProvider = ({ children }: Props) => {
  const [activeNotification, setActiveNotification] =
    useState<null | Notification>(null)

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const notificationTimer = setTimeout(() => {
        setActiveNotification(null)
      }, 3000)

      return () => {
        if (notificationTimer) {
          clearTimeout(notificationTimer)
        }
      }
    }
  }, [activeNotification])

  const showNotification = (notification: Notification) => {
    setActiveNotification(notification)
  }

  const hideNotification = () => {
    setActiveNotification(null)
  }

  return (
    <NotificationContext.Provider
      value={{
        notification: activeNotification,
        showNotification,
        hideNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
