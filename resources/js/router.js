import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./components/HomeComp.vue');
// import Home from '../pages/Home.vue';

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
        },
    ]
});

router.beforeEach((to, from, next) => {
    if(to.path !== '/'){
      next('/')
    }else{
      next()
    }
})

export default router;


 