import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//主页面
const Home = r => require.ensure([], () => r(require('../pages/Home')), 'main');
const Inner = r => require.ensure([], () => r(require('../pages/Web')), 'main');
const WebInner = r => require.ensure([], () => r(require('../pages/WebInner')), 'main');

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

const Salmanage = r => require.ensure([], () => r(require('../pages/sales/Index')), 'sales');
const Terminal = r => require.ensure([], () => r(require('../pages/rebates/Index')), 'rebates');
const Visualization = r => require.ensure([], () => r(require('../pages/visual/Index')), 'visual');
const Merchant = r => require.ensure([], () => r(require('../pages/merchant/Index')), 'merchant');
const Dataview = r => require.ensure([], () => r(require('../pages/database/Index')), 'database');

//系统管理
const Area = r => require.ensure([], () => r(require('../pages/system/Index')), 'system');
const Shopping = r => require.ensure([], () => r(require('../pages/system/Shopping')), 'system');
const Dept = r => require.ensure([], () => r(require('../pages/system/Dept')), 'system');
const Job = r => require.ensure([], () => r(require('../pages/system/Job')), 'system');
const User = r => require.ensure([], () => r(require('../pages/system/User')), 'system');
const AddUser = r => require.ensure([], () => r(require('../pages/system/AddUser')), 'system');
const Role = r => require.ensure([], () => r(require('../pages/system/Role')), 'system');
const Log = r => require.ensure([], () => r(require('../pages/system/Log')), 'system');
const AddRole = r => require.ensure([], () => r(require('../pages/system/AddRole')), 'system');

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/inner',
            component: Inner,
            redirect: '/inner/building',
            children: [
                {
                    path: 'building',
                    component: Building
                },
                {
                    path: 'intention',
                    component: Intention
                }
            ]
        },
        {
            path: '/finance',
            component: Inner,
            redirect: '/finance/accountGroup',
            children: [
                {
                    path: 'accountGroup',
                    component: AccountGroup
                },
                {
                    path: 'cost',
                    component: Cost
                },
                {
                    path: 'takeMargin',
                    component: TakeMargin
                },
                {
                    path: 'takeMargin/collectDeposit',
                    component: CollectDeposit
                },
                {
                    path: 'takeMargin/collectEarnest',
                    component: CollectEarnest
                },
                {
                    path: 'payManagement',
                    component: PayManagement
                },
                {
                    path: 'payManagement/collectMoney',
                    component: CollectMoney
                },
                {
                    path: 'taxRate',
                    component: TaxRate
                },
                {
                    path: 'taxRate2cost',
                    component: TaxRate2cost
                },
                {
                    path: 'collectionAccount',
                    component: CollectionAccount
                },
                {
                    path: 'accountAdjust',
                    component: AccountAdjust
                },
                {
                    path: 'accountAdjust/addAdjustment',
                    component: AddAdjustment
                },
                {
                    path: 'collectionMethods',
                    component: CollectionMethods
                },
                {
                    path: 'contractMargin',
                    component: ContractMargin
                },
                {
                    path: 'dealMargin',
                    component: DealMargin
                },
                {
                    path: 'advancePayMethods',
                    component: AdvancePayMethods
                },
                {
                    path: 'takeadvancePay',
                    component: TakeadvancePay
                },
                {
                    path: 'merchantAdvancePay',
                    component: MerchantAdvancePay
                },
                {
                    path: 'dealAdvancePay',
                    component: DealAdvancePay
                },
                {
                    path: 'irregularCost',
                    component: IrregularCost
                },
                {
                    path: 'irregularCost/entering',
                    component: Entering
                },{
                    path: 'costAdjust',
                    component: CostAdjust
                },{
                    path: 'costAdjust/addCostAdjust',
                    component: AddCostAdjust
                },{
                    path: 'rentFree',
                    component: RentFree
                },{
                    path: 'rentFree/addRentFree',
                    component: AddRentFree
                },{
                    path: 'generateAccount',
                    component: GenerateAccount
                },{
                    path: 'accountManagement',
                    component: AccountManagement
                },{
                    path: 'accountAdjustType',
                    component: AccountAdjustType
                },{
                    path: 'payMethods',
                    component: PayMethods
                },{
                    path: 'importIrregularCost',
                    component: ImportIrregularCost
                }
            ]
        },
        {
            path: '/sales',
            component: Inner,
            children: [
                {
                    path: 'salmanage',
                    component: Salmanage
                }
            ]
        },
        {
            path: '/rebates',
            component: Inner,
            children: [
                {
                    path: 'terminal',
                    component: Terminal
                }
            ]
        },
        {
            path: '/visual',
            component: Inner,
            children: [
                {
                    path: 'visualization',
                    component: Visualization
                }
            ]
        },
        {
            path: '/webinner',
            component: WebInner,
            redirect: '/webinner/merchant',
            children: [
                {
                    path: 'merchant',
                    component: Merchant
                }
            ]
        },
        {
            path: '/database',
            component: Inner,
            children: [
                {
                    path: 'dataview',
                    component: Dataview
                }
            ]
        },
        {
            path: '/system',
            component: Inner,
            redirect: '/system/area',
            children: [
                {
                    path: 'area',
                    component: Area
                },
                {
                    path: 'shopping',
                    component: Shopping
                },
                {
                    path: 'dept',
                    component: Dept
                },
                {
                    path: 'job',
                    component: Job
                },
                {
                    path: 'user',
                    component: User
                },
                {
                    path: 'adduser',
                    component: AddUser
                },
                {
                    path: 'role',
                    component: Role
                },
                {
                    path: 'addrole',
                    component: AddRole
                },
                {
                    path: 'log',
                    component: Log
                }
            ]
        }
    ]
});
router.beforeEach((toroute, fromroute, next) => {
    let store = router.app.$options.store,
        _path = toroute.path.match(/\/?[^\/]+/g);
    _path = _path || ['/'];
    let enterHandler = () => {
        store.commit('MENU_ACTIVE', _path[0])
    };
    enterHandler();
    next();
});
export default router;
