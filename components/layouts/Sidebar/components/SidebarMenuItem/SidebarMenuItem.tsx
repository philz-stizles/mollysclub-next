import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type SidebarMenuItemProps = {
  label: string
  icon: FC
  href: string
  isActive?: boolean
}

const SidebarMenuItem = ({ label, icon, href }: SidebarMenuItemProps) => {
  const router = useRouter()
  const isActive = router.asPath === href
  const Icon = icon

  return (
    <li data-test="list-item" className="sidebar-menu-item" aria-hidden="true">
      <Link href={href}>
        <a>
          <Icon />
          <span data-test="list-item-text"> {label}</span>
        </a>
      </Link>
      <style jsx>{`
        .sidebar-menu-item {
          transition: all 0.4s ease;
        }

        .sidebar-menu-item a {
          position: relative;
          display: block;
          padding: 14px 30px 14px 53px;
          background: ${isActive ? '#304ffe' : '#fff'};
          color: ${isActive ? '#fff' : '#434a54'};
        }

        .sidebar-menu-item svg {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          margin-left: 0;
          width: 50px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          line-height: 49px;
          text-align: center;
          vertical-align: middle;
          transition: all 0.4s ease;
          color: ${isActive ? '#fff' : 'inherit'};
        }

        .sidebar-menu-item span {
          vertical-align: middle;
          font-size: 14px;
        }
      `}</style>
    </li>
  )
}

export default SidebarMenuItem
