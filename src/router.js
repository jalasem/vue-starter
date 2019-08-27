import Vue from 'vue'
import Router from 'vue-router'
import Routes from './pages/pagesRoutes'

// import store to implement auth in the router.beforeEach hook
// import $store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Routes
})

/**
 * Check for auth and authType when required in route meta objects
 *
 * meta keys may include:
 *
 * requiresAuth: The route requires user to be authenticated
 * adminAuth: The route is only meant for Platform Admins
 * requiredAuth: Specify required access level for a page to be viewed
 * noAuth: ensure an authenticated user never access that route
 * you can add more rules as required
 */

router.beforeEach((to, from, next) => {
  // MOdify page title to the route name
  window.document.title = to.name

  // implement middleware logic here

  console.log({ from, to })
  next()
})

export default router
