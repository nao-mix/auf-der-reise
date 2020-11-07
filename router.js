import Vue from 'vue';
import VueRouter from 'vue-router';

//router components
import Home from './components/Home.vue';
import Cafe from './components/Cafe';
import Spiel from './components/Spiel';
import MyApps from './components/MyApps';
import Organist from './components/Organist';
import Ueber from './components/Ueber';
import Contact from './components/Contact';

// Vue Router
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: Home
        },
        {
            path: '/cafe', 
            component: Cafe
        },
        { 
            path: '/spiel', 
            component: Spiel
        },
        {
            path: '/myapps', 
            component: MyApps
        },
        {
            path: '/organist', 
            component: Organist
        },
        {
            path: '/ueber', 
            component: Ueber
        },
        {
            path: '/kontakt', 
            component: Contact
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
           return savedPosition
        } else {
           return { x: 0, y: 0 }
        }
    }
}); 

export default router;
