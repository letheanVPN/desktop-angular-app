import { NbMenuItem } from '@nebular/theme';

export const APP_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/',
    home: true,
  },
  {
    title: 'Apps',
    icon: 'edit-2-outline',
    link: '/apps',
  },
  {
    title: 'Settings',
    icon: 'edit-2-outline',
    link: '/settings',
  },
  {
    title: 'APPS',
    group: true,
  },
  {
    title: 'Blockchain',
    icon: 'layout-outline',
    children: [
      {
        title: 'Explorer',
        link: '/chain',
      },
      {
        title: 'Chain Nodes',
        link: '/chain/nodes',
      },
      {
        title: 'Wallet List',
        link: '/wallet',
      }
    ],
  },
];
