export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/view/auth/Register')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/Home')
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/view/auth/Login')
  },
  {
    path: '/users/1/edit',
    component: () => import('@/view/users/Edit.vue'),
    children: [
      {
        path: '',
        name: 'EditProfile',
        component: () => import('@/view/users/Profile.vue'),
        meta: { auth: true }
      }
    ]
  }
]
