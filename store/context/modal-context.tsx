import { createContext, ReactNode, useContext, useState } from 'react'

type ModalContextType = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

// Initialize context with default values.
const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

type Props = {
  children: ReactNode
}

export function ModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => {
    console.log('fire modal context')
    setIsOpen(true)
  }

  const closeModal = () => {
    console.log('fire modal context')
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
