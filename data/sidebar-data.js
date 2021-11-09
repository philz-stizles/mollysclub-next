import { BsFillAlarmFill } from 'react-icons/bs'

const sidebar = [
  {
    title: 'Tenants',
    menuItems: [
      {
        href: '/dashboard',
        label: 'Dashboard',
        icon: BsFillAlarmFill,
      },
      {
        href: '/dashboard/doctors',
        label: 'Doctors',
        icon: BsFillAlarmFill,
      },
      {
        href: '/dashboard/patients',
        label: 'Patients',
        icon: BsFillAlarmFill,
      },
      {
        href: '/dashboard/pharmacies',
        label: 'Pharmacies',
        icon: BsFillAlarmFill,
      },
      // {
      //   href: '/dashboard/test-centers',
      //   label: 'Test centers',
      //   icon: BsFillAlarmFill,
      // },
      {
        href: '/dashboard/gymns',
        label: 'Gymns',
        icon: BsFillAlarmFill,
      },
    ],
  },
  {
    title: 'Audit',
    menuItems: [
      {
        href: '/dashboard/transactions',
        label: 'Transactions',
        icon: BsFillAlarmFill,
      },
      {
        href: '/dashboard/notifications',
        label: 'Notifications',
        icon: BsFillAlarmFill,
      },
      {
        href: '/dashboard/tasks',
        label: 'Tasks',
        icon: BsFillAlarmFill,
      },
    ],
  },
  {
    title: 'Settings',
    menuItems: [
      {
        href: '/dashboard/roles',
        label: 'Roles',
        icon: BsFillAlarmFill,
      },
      {
        href: '/dashboard/audit',
        label: 'Audit',
        icon: BsFillAlarmFill,
      },
      {
        href: '/dashboard/profile',
        label: 'Profile',
        icon: BsFillAlarmFill,
      },
    ],
  },
]

export default sidebar
