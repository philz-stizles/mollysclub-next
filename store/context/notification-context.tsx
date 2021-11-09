/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

type INotification = {
  title: string
  message: string
  status: string
}

type INotificationContext = {
  notification: INotification
  showNotification: (notificationData) => any
  hideNotification: () => any
}

const NotificationContext = createContext<INotificationContext>({
  notification: null, // {title, message, status }
  // eslint-disable-next-line no-unused-vars
  showNotification: (notificationData: any) => {},
  hideNotification: () => {},
})

export const NotificationProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState(null)

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

  const showNotification = notificationData => {
    setActiveNotification(notificationData)
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
