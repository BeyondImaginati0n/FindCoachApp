import {createRouter,createWebHistory} from 'vue-router';

import AllcoachesPage from './components/pages/AllCoachesPage.vue';
import ContactPage from './components/pages/ContactPage.vue';
import RequestsPage from './components/pages/RequestsPage.vue';
const router=createRouter({
history:createWebHistory(),
routes:[
    {
        path:'/allcoaches',
        component:AllcoachesPage,
        name:'allCoachesRoute'
    },
    {
        path:'/',
        redirect:'/allcoaches'
    },
    {
        path:'/contact/:id',
        component:ContactPage,
        name:'contactRoute'
    },
    {
        path:'/requests',
component:RequestsPage,
name:'requestPage'
    }
]
});

export default router;