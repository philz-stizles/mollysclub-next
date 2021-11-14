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
        icon: 'las la-stethoscope',
      },
      {
        href: '/dashboard/patients',
        label: 'Patients',
        icon: 'las la-user-injured',
      },
      {
        href: '/dashboard/pharmacies',
        label: 'Pharmacies',
        icon: 'las la-prescription-bottle-alt',
      },
      // {
      //   href: '/dashboard/test-centers',
      //   label: 'Test centers',
      //   icon: 'las la-tachometer-alt',
      // },
      {
        href: '/dashboard/gymns',
        label: 'Gymns',
        icon: 'las la-dumbbell',
      },
    ],
  },
  {
    title: 'Audit',
    menuItems: [
      {
        href: '/dashboard/transactions',
        label: 'Transactions',
        icon: 'las la-credit-card',
      },
      {
        href: '/dashboard/notifications',
        label: 'Notifications',
        icon: 'las la-comment',
      },
      {
        href: '/dashboard/meetings',
        label: 'Meetings',
        icon: 'las la-calendar-plus',
      },
    ],
  },
  {
    title: 'Settings',
    menuItems: [
      {
        href: '/dashboard/roles',
        label: 'Roles',
        icon: 'las la-user-tag',
      },
      {
        href: '/dashboard/audit',
        label: 'Audit',
        icon: 'las la-shield-alt',
      },
      {
        href: '/dashboard/profile',
        label: 'Profile',
        icon: 'las la-user-circle',
      },
    ],
  },
]

export default sidebar
