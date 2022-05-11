import SignIn from './components/SignIn.vue'
import RegisterName from './components/Register.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:"SignIn",
        component:SignIn,
        path:"/signin",
    },
    {
        name:"RegisterName",
        component:RegisterName,
        path:"/register",
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;