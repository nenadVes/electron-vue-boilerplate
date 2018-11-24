import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Flint',
    hidden: true,
    children: [{
      path: 'index',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/workorders',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Work Orders',
        component: () => import('@/views/workorders/index'),
        meta: { title: 'Work Orders', icon: 'form' }
      }
    ]
  },
  {
    path: '/calendars',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Calendars',
        component: () => import('@/views/calendars/index'),
        meta: { title: 'Calendars', icon: 'icons8-calendar' }
      }
    ]
  },
  {
    path: '/employees',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Employees',
        component: () => import('@/views/employees/index'),
        meta: { title: 'Employees', icon: 'user' }
      },
      {
        path: 'add',
        hidden: true,
        name: 'AddEmployees',
        component: () => import('@/views/employees/add'),
        meta: { title: 'Add Employee' }
      },
      {
        path: 'edit',
        hidden: true,
        name: 'EditEmployee',
        component: () => import('@/views/employees/edit'),
        meta: { title: 'Edit Employee' }
      }
    ]
  },
  {
    path: '/equipment',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Equipment',
        component: () => import('@/views/equipment/index'),
        meta: { title: 'Equipment', icon: 'equipment' }
      },
      {
        path: 'add',
        hidden: true,
        name: 'AddEquipment',
        component: () => import('@/views/equipment/add'),
        meta: { title: 'Add Equipment' }
      },
      {
        path: 'edit',
        hidden: true,
        name: 'EditEquipment',
        component: () => import('@/views/equipment/edit'),
        meta: { title: 'Edit Equipment' }
      },
      {
        path: 'addTask',
        hidden: true,
        name: 'AddTask',
        component: () => import('@/views/task/add'),
        meta: { title: 'Add Task' }
      },
      {
        path: 'editTask',
        hidden: true,
        name: 'EditTask',
        component: () => import('@/views/task/edit'),
        meta: { title: 'Edit Task' }
      }
    ]
  },
  {
    path: '/reports',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Reports',
        component: () => import('@/views/reports/index'),
        meta: { title: 'Reports', icon: 'example' }
      }
    ]
  },
  {
    path: '/control-panel',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'ControlPanel',
        component: () => import('@/views/control-panel/index'),
        meta: { title: 'Control Panel', icon: 'example' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

