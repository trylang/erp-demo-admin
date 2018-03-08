import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//主页面
const Home = r => require.ensure([], () => r(require('../pages/Home')), 'main');
const Inner = r => require.ensure([], () => r(require('../pages/Web')), 'main');
// const WebInner = r => require.ensure([], () => r(require('../pages/WebInner')), 'main');
const Blank = r => require.ensure([], () => r(require('../pages/Blank')), 'main');

//登陆页面
const Login = r => require.ensure([], () => r(require('../pages/login/login')), 'main');


//租务管理
const Building = r => require.ensure([], () => r(require('../pages/tenancy/Index')), 'tenancy');
const Intention = r => require.ensure([], () => r(require('../pages/tenancy/contract/Index')), 'tenancy');
//财务管理
const AccountGroup = r => require.ensure([], () => r(require('../pages/finance/account-group/Index')), 'finance');
const Cost = r => require.ensure([], () => r(require('../pages/finance/cost/Index')), 'finance');
const TakeMargin = r => require.ensure([], () => r(require('../pages/finance/takeMargin/Index')), 'finance');
const CollectEarnest = r => require.ensure([], () => r(require('../pages/finance/collectEarnest/Index')), 'finance');
const CollectDeposit = r => require.ensure([], () => r(require('../pages/finance/collectDeposit/Index')), 'finance');
const PayManagement = r => require.ensure([], () => r(require('../pages/finance/payManagement/Index')), 'finance');
const CollectMoney = r => require.ensure([], () => r(require('../pages/finance/collectMoney/Index')), 'finance');
const TaxRate = r => require.ensure([], () => r(require('../pages/finance/taxRate/Index')), 'finance');
const TaxRate2cost = r => require.ensure([], () => r(require('../pages/finance/taxRate2cost/Index')), 'finance');
const CollectionAccount = r => require.ensure([], () => r(require('../pages/finance/collectionAccount/Index')), 'finance');
const AccountAdjust = r => require.ensure([], () => r(require('../pages/finance/accountAdjust/Index')), 'finance');
const AddAdjustment = r => require.ensure([], () => r(require('../pages/finance/addAdjustment/Index')), 'finance');
const CollectionMethods = r => require.ensure([], () => r(require('../pages/finance/collectionMethods/Index')), 'finance');
const ContractMargin = r => require.ensure([], () => r(require('../pages/finance/contractMargin/Index')), 'finance');
const DealMargin = r => require.ensure([], () => r(require('../pages/finance/dealMargin/Index')), 'finance');
const AdvancePayMethods = r => require.ensure([], () => r(require('../pages/finance/advancePayMethods/Index')), 'finance');
const TakeadvancePay = r => require.ensure([], () => r(require('../pages/finance/TakeadvancePay/Index')), 'finance');
const MerchantAdvancePay = r => require.ensure([], () => r(require('../pages/finance/MerchantAdvancePay/Index')), 'finance');
const DealAdvancePay = r => require.ensure([], () => r(require('../pages/finance/dealAdvancePay/Index')), 'finance');
const Entering = r => require.ensure([], () => r(require('../pages/finance/entering/Index')), 'finance');
const IrregularCost = r => require.ensure([], () => r(require('../pages/finance/IrregularCost/Index')), 'finance');
const CostAdjust = r => require.ensure([], () => r(require('../pages/finance/costAdjust/Index')), 'finance');
const AddCostAdjust = r => require.ensure([], () => r(require('../pages/finance/addCostAdjust/Index')), 'finance');
const RentFree = r => require.ensure([], () => r(require('../pages/finance/rentFree/Index')), 'finance');
const AddRentFree = r => require.ensure([], () => r(require('../pages/finance/addRentFree/Index')), 'finance');
const GenerateAccount = r => require.ensure([], () => r(require('../pages/finance/generateAccount/Index')), 'finance');
const AccountManagement = r => require.ensure([], () => r(require('../pages/finance/accountManagement/Index')), 'finance');
const AccountAdjustType = r => require.ensure([], () => r(require('../pages/finance/accountAdjustType/Index')), 'finance');
const PayMethods = r => require.ensure([], () => r(require('../pages/finance/payMethods/Index')), 'finance');
const ImportIrregularCost = r => require.ensure([], () => r(require('../pages/finance/importIrregularCost/Index')), 'finance');

export const constantRouterMap = [
  {
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '',
    component: Home,
    hidden: true
  },
  {
    path: '/inner',
    component: Inner,
    redirect: '/inner/building',
    meta: { title: 'Inner', icon: 'Inner' },
    children: [
      {
        path: 'building',
        component: Building,
        meta: { title: 'Building', icon: 'Building' }
      },
      {
        path: 'intention',
        component: Intention,
        meta: { title: 'Intention', icon: 'Intention' }
      }
    ]
  },
  {
    path: '/finance',
    component: Inner,
    redirect: '/finance/part1/accountGroup',
    meta: { title: 'Finance', icon: 'Finance' },
    children: [{
        path: 'part1',
        component: Blank,
        meta: { title: 'Part1', icon: 'AccountGroup' },
        children: [{
          path: 'accountGroup',
          component: AccountGroup,
          meta: { fullPath: '/finance/part1/accountGroup', title: 'AccountGroup', icon: 'AccountGroup'}
        },
        {
          path: 'cost',
          component: Cost,
          meta: { fullPath: '/finance/part1/cost', title: 'Cost', icon: 'Cost' }
        },
        {
          path: 'takeMargin',
          component: TakeMargin,
          meta: { fullPath: '/finance/part1/takeMargin', title: 'TakeMargin', icon: 'TakeMargin' }
        },
        {
          path: 'takeMargin/collectDeposit',
          component: CollectDeposit,
          hidden: true,
          meta: { fullPath: '/finance/part1/takeMargin/collectDeposit', title: 'CollectDeposit', icon: 'CollectDeposit' }
        },
        {
          path: 'takeMargin/collectEarnest',
          component: CollectEarnest,
          hidden: true,
          meta: { fullPath: '/finance/part1/takeMargin/collectEarnest', title: 'CollectEarnest', icon: 'CollectEarnest' }
        }]
      },{
        path: 'part2',
        component: Blank,
        meta: { title: 'Part2', icon: 'AccountGroup' },
        children:[{
          path: 'payManagement',
          component: PayManagement,
          meta: { fullPath: '/finance/part2/payManagement', title: 'PayManagement', icon: 'PayManagement' }
        },
        {
          path: 'payManagement/collectMoney',
          component: CollectMoney,
          hidden: true,
          meta: { fullPath: '/finance/part2/payManagement/collectMoney', title: 'CollectMoney', icon: 'CollectMoney' }
        },
        {
          path: 'taxRate',
          component: TaxRate,
          meta: { fullPath: '/finance/part2/taxRate', title: 'TaxRate', icon: 'TaxRate' }
        }]
      },
      {
        path: 'part3',
        component: Blank,
        meta: { title: 'Part3', icon: 'AccountGroup' },
        children: [{
          path: 'taxRate2cost',
          component: TaxRate2cost,
          meta: { fullPath: '/finance/part3/taxRate2cost', title: 'TaxRate2cost', icon: 'TaxRate2cost' }
        },
        {
          path: 'collectionAccount',
          component: CollectionAccount,
          meta: { fullPath: '/finance/part3/collectionAccount', title: 'CollectionAccount', icon: 'CollectionAccount' }
        },
        {
          path: 'accountAdjust',
          component: AccountAdjust,
          meta: { fullPath: '/finance/part3/accountAdjust', title: 'AccountAdjust', icon: 'AccountAdjust' }
        },
        {
          path: 'accountAdjust/addAdjustment',
          component: AddAdjustment,
          hidden: true,
          meta: { fullPath: '/finance/part3/accountAdjust/addAdjustment', title: 'AddAdjustment', icon: 'AddAdjustment' }
        },
        {
          path: 'collectionMethods',
          component: CollectionMethods,
          meta: { fullPath: '/finance/part3/collectionMethods', title: 'CollectionMethods', icon: 'CollectionMethods' }
        },
        {
          path: 'contractMargin',
          component: ContractMargin,
          meta: { fullPath: '/finance/part3/contractMargin', title: 'ContractMargin', icon: 'ContractMargin' }
        },
        {
          path: 'dealMargin',
          component: DealMargin,
          meta: { fullPath: '/finance/part3/dealMargin', title: 'DealMargin', icon: 'DealMargin' }
        },
        {
          path: 'advancePayMethods',
          component: AdvancePayMethods,
          meta: { fullPath: '/finance/part3/advancePayMethods', title: 'AdvancePayMethods', icon: 'AdvancePayMethods' }
        },
        {
          path: 'takeadvancePay',
          component: TakeadvancePay,
          meta: { fullPath: '/finance/part3/takeadvancePay', title: 'TakeadvancePay', icon: 'TakeadvancePay' }
        },
        {
          path: 'merchantAdvancePay',
          component: MerchantAdvancePay,
          meta: { fullPath: '/finance/part3/merchantAdvancePay', title: 'MerchantAdvancePay', icon: 'MerchantAdvancePay' }
        },
        {
          path: 'dealAdvancePay',
          component: DealAdvancePay,
          meta: { fullPath: '/finance/part3/dealAdvancePay', title: 'DealAdvancePay', icon: 'DealAdvancePay' }
        },
        {
          path: 'irregularCost',
          component: IrregularCost,
          meta: { fullPath: '/finance/part3/irregularCost', title: 'IrregularCost', icon: 'IrregularCost' }
        },
        {
          path: 'irregularCost/entering',
          component: Entering,
          hidden: true,
          meta: { fullPath: '/finance/part3/irregularCost/entering', title: 'Entering', icon: 'Entering' }
        }] 
      },
      {
        path: 'part4',
        component: Blank,
        meta: { title: 'Part4', icon: 'AccountGroup' },
        children: [{
          path: 'costAdjust',
          component: CostAdjust,
          meta: { fullPath: '/finance/part4/costAdjust', title: 'CostAdjust', icon: 'CostAdjust' }
        }, {
          path: 'costAdjust/addCostAdjust',
          component: AddCostAdjust,
          hidden: true,
          meta: { fullPath: '/finance/part4/costAdjust/addCostAdjust', title: 'AddCostAdjust', icon: 'AddCostAdjust' }
        }, {
          path: 'rentFree',
          component: RentFree,
          meta: { fullPath: '/finance/part4/rentFree', title: 'RentFree', icon: 'RentFree' }
        }, {
          path: 'rentFree/addRentFree',
          component: AddRentFree,
          hidden: true,
          meta: { fullPath: '/finance/part4/AddRentFree', title: 'AddRentFree', icon: 'AddRentFree' }
        }, {
          path: 'generateAccount',
          component: GenerateAccount,
          meta: { fullPath: '/finance/part4/generateAccount', title: 'GenerateAccount', icon: 'GenerateAccount' }
        }, {
          path: 'accountManagement',
          component: AccountManagement,
          meta: { fullPath: '/finance/part4/accountManagement', title: 'AccountManagement', icon: 'AccountManagement' }
        }, {
          path: 'accountAdjustType',
          component: AccountAdjustType,
          meta: { fullPath: '/finance/part4/accountAdjustType', title: 'AccountAdjustType', icon: 'AccountAdjustType' }
        }, {
          path: 'payMethods',
          component: PayMethods,
          meta: { fullPath: '/finance/part4/payMethods', title: 'PayMethods', icon: 'PayMethods' }
        }, {
          path: 'importIrregularCost',
          component: ImportIrregularCost,
          meta: { fullPath: '/finance/part4/importIrregularCost', title: 'Intention', icon: 'Intention' }
        }]
      }
    ]
  }
];

export const asyncRouterMap = [{
  path: '/test1',
  component: Inner,
  // redirect: '/test1/accountGroup',
  meta: { title: 'test1', icon: 'test1' },
  children: [
    {
      path: 'accountGroup',
      component: AccountGroup,
      meta: { title: 'AccountGroup', icon: 'AccountGroup' }
    },
    {
      path: 'test2',
      component: TakeMargin,
      meta: { title: 'TakeMargin', icon: 'TakeMargin' }
    },
    {
      path: 'test2/collectDeposit',
      component: CollectDeposit,
      hidden: true,
      meta: { title: 'CollectDeposit', icon: 'CollectDeposit' }
    },
    {
      path: 'test2/collectEarnest',
      component: CollectEarnest,
      meta: { title: 'CollectEarnest', icon: 'CollectEarnest' }
    },
    {
      path: 'payManagement',
      component: PayManagement,
      meta: { title: 'PayManagement', icon: 'PayManagement' }
    },
    {
      path: 'payManagement/collectMoney',
      component: CollectMoney,
      hidden: true,
      meta: { title: 'CollectMoney', icon: 'CollectMoney' }
    },
    {
      path: 'accountAdjust/addAdjustment',
      component: AddAdjustment,
      hidden: true,
      meta: { title: 'Intention', icon: 'Intention' }
    }, {
      path: 'costAdjust',
      component: CostAdjust,
      meta: { title: 'Intention', icon: 'Intention' }
    }, {
      path: 'costAdjust/addCostAdjust',
      component: AddCostAdjust,
      hidden: true,
      meta: { title: 'Intention', icon: 'Intention' }
    }, {
      path: 'rentFree',
      component: RentFree,
      meta: { title: 'Intention', icon: 'Intention' }
    }, {
      path: 'rentFree/addRentFree',
      component: AddRentFree,
      hidden: true,
      meta: { title: 'Intention', icon: 'Intention' }
    }
  ]
}];

const router = new Router({
  routes: constantRouterMap
});

export default router;
