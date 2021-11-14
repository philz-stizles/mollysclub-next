import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type SidebarMenuItemProps = {
  label: string
  icon: string
  // icon: FC
  href: string
  isActive?: boolean
}

const SidebarMenuItem = ({ label, icon, href }: SidebarMenuItemProps) => {
  const router = useRouter()
  const isActive =
    router.asPath.substring(router.asPath.lastIndexOf('/')) ===
    href.substring(href.lastIndexOf('/'))
  // const Icon = icon

  return (
    <li data-test="list-item" className="sidebar-menu-item" aria-hidden="true">
      <Link href={`/admin${href}`}>
        <a>
          {/* <Icon /> */}
          <i className={`icon ${icon}`}></i>
          <span className="text" data-test="list-item-text">
            {' '}
            {label}
          </span>

          <i className="caret las la-angle-down"></i>
        </a>
      </Link>
      <style jsx>{`
        .sidebar-menu-item {
          transition: all 0.4s ease;
        }

        .sidebar-menu-item a {
          position: relative;
          display: block;
          cursor: pointer;
          // padding: 14px 30px 14px 53px;
          padding: 7px 30px 7px 53px;
          background: ${isActive ? '#304ffe' : '#fff'};
          color: ${isActive ? '#fff' : '#434a54'};
        }

        .sidebar-menu-item .icon {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          margin-left: 0;
          width: 50px;
          top: 50%;
          transform: translateY(-50%);
          line-height: 49px;
          text-align: center;
          vertical-align: middle;
          transition: all 0.4s ease;
          color: ${isActive ? '#fff' : 'inherit'};
        }

        .sidebar-menu-item .text {
          vertical-align: middle;
          font-size: 14px;
        }

        .sidebar-menu-item .caret {
          position: absolute;
          top: 12px;
          right: 20px;
          font-size: 14px;
          line-height: 14px;
          transition: all 0.4s ease;
        }
      `}</style>
    </li>
  )
}

export default SidebarMenuItem
