import React, { FC } from 'react'
import { SidebarLogo, SidebarMenu } from './components'
import styles from './Sidebar.module.scss'

type SidebarProps = {
  blueprint: MenuBlueprint[]
  isOpen?: boolean
}

export type MenuItem = {
  href: string
  label: string
  icon: string
  // icon: FC
}

export type MenuBlueprint = {
  title: string
  menuItems: MenuItem[]
}

const Sidebar = ({ isOpen, blueprint }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <SidebarLogo />
      {blueprint.map((item, id) => (
        <SidebarMenu key={id} {...item} />
      ))}
    </div>
  )
}

export default Sidebar
