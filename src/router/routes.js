export default [
  {
    name: "Master",
    path: "/",
    component: import('./../pages/layout/master'),
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: import('./../pages/dashboard'),
      },
      {
        name: 'user',
        path: '/user',
        component: import('./../pages/user'),
      }
    ]
    },

]