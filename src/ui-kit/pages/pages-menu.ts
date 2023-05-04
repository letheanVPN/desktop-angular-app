import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/ui-kit/layout/stepper',
        home: true
      },
      {
        title: 'List',
        link: '/ui-kit/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/ui-kit/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/ui-kit/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/ui-kit/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/ui-kit/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/ui-kit/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/ui-kit/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/ui-kit/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/ui-kit/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/ui-kit/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/ui-kit/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/ui-kit/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/ui-kit/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/ui-kit/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/ui-kit/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/ui-kit/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/ui-kit/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/ui-kit/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/ui-kit/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/ui-kit/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/ui-kit/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/ui-kit/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/ui-kit/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/ui-kit/extra-components/chat',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/ui-kit/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/ui-kit/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/ui-kit/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/ui-kit/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/ui-kit/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/ui-kit/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/ui-kit/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/ui-kit/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/ui-kit/auth/login',
      },
      {
        title: 'Register',
        link: '/ui-kit/auth/register',
      },
      {
        title: 'Request Password',
        link: '/ui-kit/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/ui-kit/auth/reset-password',
      },
    ],
  },
];
