// import {  } from 'react-icons/bs'

const sidebar = [
  {
    title: 'Tenants',
    menuItems: [
      {
        href: '/dashboard',
        label: 'Dashboard',
        icon: 'las la-tachometer-alt',
      },
      {
        href: '/dashboard/doctors',
        label: 'Doctors',
        icon: 'las la-tachometer-alt',
      },
      {
        href: '/dashboard/patients',
        label: 'Patients',
        icon: 'las la-tachometer-alt',
      },
      {
        href: '/dashboard/pharmacies',
        label: 'Pharmacies',
        icon: 'las la-tachometer-alt',
      },
      // {
      //   href: '/dashboard/test-centers',
      //   label: 'Test centers',
      //   icon: 'las la-tachometer-alt',
      // },
      {
        href: '/dashboard/gymns',
        label: 'Gymns',
        icon: 'las la-tachometer-alt',
      },
    ],
  },
  {
    title: 'Audit',
    menuItems: [
      {
        href: '/dashboard/transactions',
        label: 'Transactions',
        icon: 'las la-tachometer-alt',
      },
      {
        href: '/dashboard/notifications',
        label: 'Notifications',
        icon: 'las la-tachometer-alt',
      },
      {
        href: '/dashboard/tasks',
        label: 'Meetings',
        icon: 'las la-tachometer-alt',
      },
    ],
  },
  {
    title: 'Settings',
    menuItems: [
      {
        href: '/dashboard/roles',
        label: 'Roles',
        icon: 'las la-tachometer-alt',
      },
      {
        href: '/dashboard/audit',
        label: 'Audit',
        icon: 'las la-tachometer-alt',
      },
      {
        href: '/dashboard/profile',
        label: 'Profile',
        icon: 'las la-tachometer-alt',
      },
    ],
  },
]

export default sidebar
