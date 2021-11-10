import { createContext, ReactNode, useContext, useState } from 'react'

type SidebarContextType = {
  isOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
}

// Initialize context with default values.
const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  openSidebar: () => {},
  closeSidebar: () => {},
})

type Props = {
  children: ReactNode
}

export function SidebarProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const openSidebar = () => {
    console.log('fire modal context')
    setIsOpen(true)
  }

  const closeSidebar = () => {
    console.log('fire modal context')
    setIsOpen(false)
  }

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  return useContext(SidebarContext)
}
