import SignIn from './components/SignIn.vue'
import RegisterName from './components/Register.vue'
import AdminPage from './components/Admin.vue'
import {createRouter,createWebHistory} from 'vue-router'
import store from './store.js'





const routes=[
    {
        path:"/",
        redirect:SignIn
    },
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
    {
        name:"AdminPage",
        component:AdminPage,
        path:"/admin",
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    console.log(store.state.isUserLoggedIn);
    if (to.fullPath === '/admin' && store.state.isUserLoggedIn===false) {  
    next('/signin');
    }

    else if ((to.fullPath === '/register' || to.fullPath === '/signin') && store.state.isUserLoggedIn===true) {
        next('/admin');
    }

    else{
        next();
    }
    

    
    
});
    

export default router;