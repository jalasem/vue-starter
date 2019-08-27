import Home from './Home.vue'
// import NotFound from '@/views/404.vue'

import activeModules from './activeModules'

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './About.vue')
  }
  // {
  //   path: '*',
  //   name: 'Ancient Site',
  //   component: NotFound
  // }
]

activeModules.forEach(modul => {
  try {
    // get module routes
    let moduleRoutes = require('./' + modul + '/moduleRoutes').default
    // add to routes array
    routes = routes.concat(moduleRoutes)
    console.log(require('./' + modul + '/moduleRoutes').default)
  } catch (e) {
    console.error(e)
  }
})

export default routes
