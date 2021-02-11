import Vue from 'vue'
import Router from 'vue-router';

 const Board = () =>  import('./views/Board.vue')
 const Task = () =>  import('./views/Task.vue')
 const Home = () =>  import('./views/Home.vue')
 const Posts = () =>  import('./views/Posts.vue')
 const Notes = () =>  import('./views/Notes.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/board',
      name: 'board',
      component: Board,
      children: [
        {
          path: 'task/:id',
          name: 'task',
          component: Task
        }
      ]
    },
    {
      path: '/posts/:id',
      name: 'Posts',
      component: Posts,
      params: true,
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes,
    },
  ]
})
