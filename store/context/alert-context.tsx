import { createContext, ReactNode, useContext, useState } from 'react'

type AlertContextType = {
  show: boolean
  openAlert: () => void
  closeAlert: () => void
}

// Initialize context with default values.
const AlertContext = createContext<AlertContextType>({
  show: false,
  openAlert: () => {},
  closeAlert: () => {},
})

type Props = {
  children: ReactNode
}

export function AlertProvider({ children }: Props) {
  const [show, setIsOpen] = useState<boolean>(false)

  const openAlert = () => {
    console.log('fire modal context')
    setIsOpen(true)
  }

  const closeAlert = () => {
    console.log('fire modal context')
    setIsOpen(false)
  }

  return (
    <AlertContext.Provider
      value={{
        show,
        openAlert,
        closeAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = () => {
  return useContext(AlertContext)
}
