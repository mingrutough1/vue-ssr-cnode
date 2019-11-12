import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20b08d1b = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _52dbcde5 = () => interopDefault(import('../pages/favorites/index.vue' /* webpackChunkName: "pages/favorites/index" */))
const _279935f7 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _18b7b855 = () => interopDefault(import('../pages/message/index.vue' /* webpackChunkName: "pages/message/index" */))
const _5da89818 = () => interopDefault(import('../pages/my/index.vue' /* webpackChunkName: "pages/my/index" */))
const _80807854 = () => interopDefault(import('../pages/topicDetail/_id.vue' /* webpackChunkName: "pages/topicDetail/_id" */))
const _e12a9946 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _20b08d1b,
    name: "about"
  }, {
    path: "/favorites",
    component: _52dbcde5,
    name: "favorites"
  }, {
    path: "/login",
    component: _279935f7,
    name: "login"
  }, {
    path: "/message",
    component: _18b7b855,
    name: "message"
  }, {
    path: "/my",
    component: _5da89818,
    name: "my"
  }, {
    path: "/topicDetail/:id?",
    component: _80807854,
    name: "topicDetail-id"
  }, {
    path: "/",
    component: _e12a9946,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
