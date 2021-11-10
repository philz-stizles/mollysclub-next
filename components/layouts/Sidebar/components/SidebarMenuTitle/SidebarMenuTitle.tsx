import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  title: string
}
const SidebarMenuTitle = ({ title }: Props) => {
  return (
    <div data-test="sidebar-menu-title" className="SidebarMenuTitle">
      <span data-test="menu-title">{title}</span>
      <style jsx>{`
        .SidebarMenuTitle {
          padding-left: 14px;
          margin-bottom: 8px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: rgba(55, 56, 87, 0.6);
          display: block;
        }
      `}</style>
    </div>
  )
}

SidebarMenuTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SidebarMenuTitle
