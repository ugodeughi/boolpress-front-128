import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Blog from '../pages/Blog.vue'
import Contacts from '../pages/Contacts.vue'
import PostDetail from '../pages/PostDetail.vue'
import Error404 from '../pages/Error404.vue'
import PostsCategory from '../pages/PostsCategory.vue'
import PostsTag from '../pages/PostsTag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/i-miei-post',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/dettaglio-post/:slug',
      name: 'postDetail',
      component: PostDetail
    },
    {
      path: '/post-per-categoria/:slug',
      name: 'postsCategory',
      component: PostsCategory
    },
    {
      path: '/post-per-tag/:slug',
      name: 'PostsTag',
      component: PostsTag
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '404'
    },

  ]
})

export default router
