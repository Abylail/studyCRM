import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9482f1e2 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _238807fe = () => interopDefault(import('..\\pages\\timetable\\index.vue' /* webpackChunkName: "pages/timetable/index" */))
const _1ccf673c = () => interopDefault(import('..\\pages\\timetable\\children\\index.vue' /* webpackChunkName: "pages/timetable/children/index" */))
const _3d01b048 = () => interopDefault(import('..\\pages\\timetable\\children\\index\\_id.vue' /* webpackChunkName: "pages/timetable/children/index/_id" */))
const _2f494981 = () => interopDefault(import('..\\pages\\timetable\\classrooms\\index.vue' /* webpackChunkName: "pages/timetable/classrooms/index" */))
const _0765e2ee = () => interopDefault(import('..\\pages\\timetable\\classrooms\\index\\_id.vue' /* webpackChunkName: "pages/timetable/classrooms/index/_id" */))
const _3dc7ffe0 = () => interopDefault(import('..\\pages\\timetable\\desc\\index.vue' /* webpackChunkName: "pages/timetable/desc/index" */))
const _4932d32d = () => interopDefault(import('..\\pages\\timetable\\groups\\index.vue' /* webpackChunkName: "pages/timetable/groups/index" */))
const _cd1a9f46 = () => interopDefault(import('..\\pages\\timetable\\groups\\index\\_id.vue' /* webpackChunkName: "pages/timetable/groups/index/_id" */))
const _04d4ea18 = () => interopDefault(import('..\\pages\\timetable\\lessons\\index.vue' /* webpackChunkName: "pages/timetable/lessons/index" */))
const _0b0d6250 = () => interopDefault(import('..\\pages\\timetable\\teachers\\index.vue' /* webpackChunkName: "pages/timetable/teachers/index" */))
const _30931f1a = () => interopDefault(import('..\\pages\\timetable\\teachers\\index\\_id.vue' /* webpackChunkName: "pages/timetable/teachers/index/_id" */))
const _8d2a56dc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/settings",
    component: _9482f1e2,
    name: "settings"
  }, {
    path: "/timetable",
    component: _238807fe,
    name: "timetable"
  }, {
    path: "/timetable/children",
    component: _1ccf673c,
    name: "timetable-children",
    children: [{
      path: ":id?",
      component: _3d01b048,
      name: "timetable-children-index-id"
    }]
  }, {
    path: "/timetable/classrooms",
    component: _2f494981,
    name: "timetable-classrooms",
    children: [{
      path: ":id?",
      component: _0765e2ee,
      name: "timetable-classrooms-index-id"
    }]
  }, {
    path: "/timetable/desc",
    component: _3dc7ffe0,
    name: "timetable-desc"
  }, {
    path: "/timetable/groups",
    component: _4932d32d,
    name: "timetable-groups",
    children: [{
      path: ":id?",
      component: _cd1a9f46,
      name: "timetable-groups-index-id"
    }]
  }, {
    path: "/timetable/lessons",
    component: _04d4ea18,
    name: "timetable-lessons"
  }, {
    path: "/timetable/teachers",
    component: _0b0d6250,
    name: "timetable-teachers",
    children: [{
      path: ":id?",
      component: _30931f1a,
      name: "timetable-teachers-index-id"
    }]
  }, {
    path: "/",
    component: _8d2a56dc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
