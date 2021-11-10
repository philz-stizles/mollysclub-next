import React, { FC } from 'react'
import { SidebarMenuItem, SidebarMenuTitle } from '..'
import { MenuBlueprint } from '../../Sidebar'

type SidebarMenuProps = MenuBlueprint

const SidebarMenu = ({ title, menuItems }: SidebarMenuProps) => {
  return (
    <div data-test="sidebar-menu" className="sidebar-menu">
      {title && <SidebarMenuTitle title={title} />}

      <ul data-test="sidebar-menu-ul" className="sidebar-menu__items">
        {menuItems.map(item => (
          <SidebarMenuItem key={item.label} {...item} />
        ))}
      </ul>

      <style jsx>{`
        .sidebar-menu {
          margin: 10px 0 30px 0;
        }

        .sidebar-menu__items {
          padding: 0;
        }
      `}</style>
    </div>
  )
}

export default SidebarMenu
