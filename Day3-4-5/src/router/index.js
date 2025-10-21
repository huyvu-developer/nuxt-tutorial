import { createRouter, createWebHistory } from 'vue-router'
import bai1 from '@/page/day3/bai1.vue'
import bai2 from '@/page/day3/bai2.vue'
import bai3 from '@/page/day3/bai3.vue'
import bai4 from '@/page/day3/bai4.vue'
import bai5 from '@/page/day3/bai5.vue'
import day4bai1 from '@/page/day4/day4bai1.vue'
import day4bai2 from '@/page/day4/day4bai2.vue'
import day4bai3 from '@/page/day4/day4bai3.vue'
import day4bai4 from '@/page/day4/day4bai4.vue'
import day4bai5 from '@/page/day4/day4bai5.vue'
import day5bai1 from '@/page/day5/day5bai1.vue'
import day5bai2 from '@/page/day5/day5bai2.vue'
import day5bai3 from '@/page/day5/day5bai3.vue'
import Dashboard from '@/page/day5/Dashboard.vue'
import Profile from '@/page/day5/Profile.vue'
import Settings from '@/page/day5/Settings.vue'
import day5bai4 from '@/page/day5/day5bai4.vue'
import AllTasks from '@/page/day5/AllTasks.vue'
import PendingTasks from '@/page/day5/PendingTasks.vue'
import CompletedTasks from '@/page/day5/CompletedTasks.vue'
const routes = [
  { path: '/' },
  { path: '/day3/bai1', component: bai1 },
  { path: '/day3/bai2', component: bai2 },
  { path: '/day3/bai3', component: bai3 },
  { path: '/day3/bai4', component: bai4 },
  { path: '/day3/bai5', component: bai5 },

  { path: '/day4/bai1', component: day4bai1 },
  { path: '/day4/bai2', component: day4bai2 },
  { path: '/day4/bai3', component: day4bai3 },
  { path: '/day4/bai4', component: day4bai4 },
  { path: '/day4/bai5', component: day4bai5 },

  { path: '/day5/bai1', component: day5bai1 },
  { path: '/day5/bai2', component: day5bai2 },

  { path: '/day5/bai3', component: day5bai3 },
  { path: '/day5/bai3/dashboard', component: Dashboard },
  { path: '/day5/bai3/profile', component: Profile },
  { path: '/day5/bai3/settings', component: Settings },

  { path: '/day5/bai4', component: day5bai4 },
  { path: '/day5/bai4/all-tasks', component: AllTasks },
  { path: '/day5/bai4/pending-tasks', component: PendingTasks },
  { path: '/day5/bai4/completed-tasks', component: CompletedTasks },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
