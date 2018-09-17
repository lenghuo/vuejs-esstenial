import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
	{
		path: '/auth/register',
		name: 'Register',
		component: () => import('@/view/auth/Register')
  },
  // 首页路由配置
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/Home')
  },
  // 其他未配置的路由则跳转到首页
  {
    path: '*',
    redirect: '/'
  }
]

const router = new Router({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
  const auth = router.app.$options.store.state.auth

  if (auth && to.path.indexOf('/auth/') !== -1) {
    next('/')
  } else {
    next()
  }
})

export default router
