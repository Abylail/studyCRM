import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16c59b2d = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _b9c47da6 = () => interopDefault(import('../pages/timetable/index.vue' /* webpackChunkName: "pages/timetable/index" */))
const _ba394212 = () => interopDefault(import('../pages/timetable/children/index.vue' /* webpackChunkName: "pages/timetable/children/index" */))
const _0efcfcf8 = () => interopDefault(import('../pages/timetable/classrooms/index.vue' /* webpackChunkName: "pages/timetable/classrooms/index" */))
const _a00270ee = () => interopDefault(import('../pages/timetable/desc/index.vue' /* webpackChunkName: "pages/timetable/desc/index" */))
const _e5d35068 = () => interopDefault(import('../pages/timetable/groups/index.vue' /* webpackChunkName: "pages/timetable/groups/index" */))
const _60f4814e = () => interopDefault(import('../pages/timetable/lessons/index.vue' /* webpackChunkName: "pages/timetable/lessons/index" */))
const _409cd349 = () => interopDefault(import('../pages/timetable/teachers/index.vue' /* webpackChunkName: "pages/timetable/teachers/index" */))
const _727f5718 = () => interopDefault(import('../pages/timetable/teachers/index/_id.vue' /* webpackChunkName: "pages/timetable/teachers/index/_id" */))
const _88312c4a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _16c59b2d,
    name: "settings"
  }, {
    path: "/timetable",
    component: _b9c47da6,
    name: "timetable"
  }, {
    path: "/timetable/children",
    component: _ba394212,
    name: "timetable-children"
  }, {
    path: "/timetable/classrooms",
    component: _0efcfcf8,
    name: "timetable-classrooms"
  }, {
    path: "/timetable/desc",
    component: _a00270ee,
    name: "timetable-desc"
  }, {
    path: "/timetable/groups",
    component: _e5d35068,
    name: "timetable-groups"
  }, {
    path: "/timetable/lessons",
    component: _60f4814e,
    name: "timetable-lessons"
  }, {
    path: "/timetable/teachers",
    component: _409cd349,
    name: "timetable-teachers",
    children: [{
      path: ":id?",
      component: _727f5718,
      name: "timetable-teachers-index-id"
    }]
  }, {
    path: "/",
    component: _88312c4a,
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
