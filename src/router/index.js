/**
 * Created by yqr on 2018/3/26.
 */
import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/nav/topNav.vue'
import LeftNav from '@/components/nav/leftNav.vue'
import Home from '@/views/home.vue'
import Dashboard from '@/views/workbench/dashboard.vue'
import MySettings from '@/views/workbench/mySettings.vue'
import Mission from '@/views/workbench/mission/mission.vue'
import Plan from '@/views/workbench/plan/plan.vue'
import Maillist from '@/views/workbench/maillist.vue'
import EnterpriseList from '@/views/enterprise/index.vue'
import EnterpriseAdd from '@/views/enterprise/add.vue'
import EnterpriseDetail from '@/views/enterprise/detail.vue'
import EnterpriseValidate from '@/views/enterprise/validate.vue'
import VehicleManage from '@/views/vehicle/index.vue'
import DeptManager from '@/views/dept/index.vue'
import NotFound from '@/components/404.vue'

//粮库模块
import TemperatureControl from '@/views/temperatureControl/index.vue'
import Cockpit from "@/pages/home.vue"

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/views/login'], resolve)

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      type: 'login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/openNewWindow',
      component: Cockpit
    },
    {
      path: '/',
      type: 'home',
      name: 'home',
      redirect: '/temperaturecontrol',
      component: Home,
      children: [
        {
          path: '/cockpit',
          name: '粮情驾驶仓',
          components: {
            default: NotFound,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-menu', // 图标样式class
          menuShow: true
        },
        {
          path: '/temperaturecontrol',
          name: '智能温控',
          components: {
            default: TemperatureControl,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-menu', // 图标样式class
          menuShow: true
        },
        {
          path: '/dashboa',
          name: '保管员工作台',
          components: {
            default: Dashboard,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-menu', // 图标样式class
          menuShow: true
        },
        {
          path: '/dasdasddsad',
          components: {
            default: MySettings,
            top: TopNav,
            aside: LeftNav
          },
          name: '仓储基本信息',
          iconCls: 'el-icon-menu',
          menuShow: true,
          children: [
            {path: '/mySet/plan', component: Plan, name: '仓房货位', menuShow: true},
            {path: '/mySet/mission', component: Mission, name: '预警策略', menuShow: true},
            {path: '/mySet/maillist', component: Maillist, name: '定时检测设置', menuShow: true},
            {path: '*', component: NotFound, name: '粮情数据同步配置', menuShow: true},
            {path: '*', component: NotFound, name: '设备配置', menuShow: true},
            {path: '*', component: NotFound, name: '气象站配置', menuShow: true},
          ]
        },
        {
          path: '/dashb',
          name: '仓储作业',
          components: {
            default: Dashboard,
            top: TopNav,
            aside: LeftNav
          },
          iconCls: 'el-icon-menu', // 图标样式class
          menuShow: true,
          children: [
            {path: '*', component: NotFound, name: '粮情检测薄', menuShow: true},
            {path: '*', component: NotFound, name: '通风控制', menuShow: true},
          ]
        },
        {
          path: '/das',
          name: '库内气象站',
          components: {
            default: Dashboard,
            top: TopNav,
            aside: LeftNav
          },
          iconCls: 'el-icon-menu', // 图标样式class
          menuShow: true,
          children: [
            {path: '*', component: NotFound, name: '实时气象', menuShow: true},
            {path: '*', component: NotFound, name: '历史气象', menuShow: true},
          ]
        },
        {
          path: '/dashafasdfaoa',
          name: '智能粮情',
          components: {
            default: Dashboard,
            top: TopNav,
            aside: LeftNav
          },
          iconCls: 'el-icon-menu', // 图标样式class
          menuShow: true,
          children: [
            {path: '*', component: NotFound, name: '粮情测控', menuShow: true},
            {path: '*', component: NotFound, name: '气体浓度检测', menuShow: true},
            {path: '*', component: NotFound, name: '虫情检测', menuShow: true},
            {path: '*', component: NotFound, name: '气体浓度检测信息查询', menuShow: true},
            {path: '*', component: NotFound, name: '虫情检测信息查询', menuShow: true},
            {path: '*', component: NotFound, name: '粮情数据查询', menuShow: true},
          ]
        },
        {
          path: '/dasdsadhboa',
          name: '智能通风',
          components: {
            default: Dashboard,
            top: TopNav,
            aside: LeftNav
          },
          iconCls: 'el-icon-menu', // 图标样式class
          menuShow: true,
          children: [
            {path: '*', component: NotFound, name: '通风方案设置', menuShow: true},
            {path: '*', component: NotFound, name: '通风控制', menuShow: true},
          ]
        },
      ]
    },
    {
      path: '/enterpriseManager',
      type: 'enterprise',
      name: 'enterprise',
      component: Home,
      redirect: '/enterprise/list',
      menuShow: true,
      children: [
        {
          path: '/enterprise/list',
          name: '企业信息',
          components: {
            default: EnterpriseList,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-setting',
          menuShow: true
        },
        {
          path: '/enterprise/detail',
          name: '企业详情',
          components: {
            default: EnterpriseDetail,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-setting',
          menuShow: false
        },
        {
          path: '/enterprise/add',
          name: '添加企业',
          components: {
            default: EnterpriseAdd,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        },
        {
          path: '/enterprise/validate',
          name: '企业认证',
          components: {
            default: EnterpriseValidate,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        }
      ]
    },
    {
      path: '/vehicleManager',
      type: 'enterprise',
      name: 'vehicle',
      component: Home,
      redirect: '/vehicle/list',
      menuShow: true,
      children: [
        {
          path: '/vehicle/list',
          name: '车辆信息',
          components: {
            default: VehicleManage,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        }
      ]
    },
    {
      path: '/deptManager',
      type: 'enterprise',
      name: 'dept',
      component: Home,
      redirect: '/dept/list',
      menuShow: true,
      children: [
        {
          path: '/dept/list',
          name: '部门信息',
          components: {
            default: DeptManager,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
});

export default router
