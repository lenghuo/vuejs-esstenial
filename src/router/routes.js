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
  }
]
