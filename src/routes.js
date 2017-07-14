import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Dashboard from './views/dashboard/Dashboard.vue'
import Categories from './views/catalog/Categories.vue'
import Options from './views/catalog/Options.vue'
import Events from './views/catalog/Events.vue'
import EventForm from './views/catalog/EventForm.vue'
import Attributes from './views/catalog/Attributes.vue'
import AttributeGroups from './views/catalog/Attributes.vue'
import Manufacturers from './views/catalog/Manufacturers.vue'
import Bookings from './views/sales/Bookings.vue'
import BookingForm from './views/sales/BookingForm.vue'
import Customers from './views/customers/Customers.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: 'Home',
        leaf: true,
        iconCls: 'fa fa-dashboard',
        children: [{
            path: '/',
            component: Dashboard,
            name: 'Home'
        }, ]
    },
    {
        path: '/',
        component: Home,
        name: 'Events',
        leaf: true,
        iconCls: 'fa fa-tag',
        children: [{
            path: '/events',
            component: Events,
            name: 'Events'
        },{
            //     path: '/categories',
            //     component: Categories,
            //     name: 'Categories'
            // },
            // {
            //     path: '/Add an event',
            //     component: Products,
            //     name: 'Products'
            // },
    //         {
    //             path: '/attributes',
    //             component: Attributes,
    //             name: 'Attributes'
    //         },
    // { path: '/attributes/groups', component: AttributeGroups, name: 'Attribute Groups' },
    // {
    //             path: '/options',
    //             component: Options,
    //             name: 'Options'
    //         },
    //         {
    //             path: '/manufacturers',
    //             component: Manufacturers,
    //             name: 'Manufacturers'
    //         },
    //         {
    //             path: '/reviews',
    //             component: Page5,
    //             name: 'Reviews'
    //         },
        
                path: '/events/add',
                component: EventForm,
                name: 'Add Event'
            },
            {
                path: '/events/edit/:id',
                component: EventForm,
                name: 'Edit Event'
            }
        ]
    },
    {
        path: '/sales',
        component: Home,
        name: 'Sales',
        iconCls: 'fa fa-shopping-cart',
         children: [{
                 path: '/bookings',
                component: Bookings,
                name: 'booking'
             },
             {
                path: '/bookings/form',
                component: BookingForm,
                 hidden: true,
                 name: 'Booking'
             },
             {
                 path: '/returns',
                 component: Page6,
                 name: 'Returns'
             },

             // {
             //     path: '/coupons',
             //     component: Page6,
             //     name: 'Coupons'
             // }
         ]
     },
    // {
    //     path: '/customers',
    //     component: Home,
    //     name: 'Add event',
    //     iconCls: 'fa fa-users',
    //     children: [{
    //         path: '/customers',
    //         component: Page6,
    //         name: ''
    //     }, ]
    // },
    // {
    //     path: '/reports',
    //     component: Home,
    //     name: 'Reports',
    //     leaf: true,
    //     iconCls: 'fa fa-bar-chart',
    //     children: [{
    //         path: '/reports',
    //         component: echarts,
    //         name: 'Reports'
    //     }]
    // },
    // {
    //     path: '/settings',
    //     component: Home,
    //     name: 'Settings',
    //     iconCls: 'fa fa-cog',
    //     children: [{
    //             path: '/configurations',
    //             component: echarts,
    //             name: 'Configurations'
    //         },
    //         {
    //             path: '/users',
    //             component: echarts,
    //             name: 'Users'
    //         }
    //     ]
    // },
    // {
    //     path: '/charts',
    //     component: Home,
    //     name: 'Charts',
    //     hidden: true,
    //     iconCls: 'fa fa-bar-chart',
    //     children: [{
    //         path: '/echarts',
    //         component: echarts,
    //         name: 'echarts'
    //     }]
    // },
    {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

export default routes;
