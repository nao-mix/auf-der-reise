import Vue from 'vue';
import VueRouter from 'vue-router';

//router components
import Home from './components/Home.vue';
import Cafe from './components/Cafe';
import Spiel from './components/Spiel';
import MyApps from './components/MyApps';
import Ueber from './components/Ueber';

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
            path: '/ueber', 
            component: Ueber
      }
    ]
}); 

export default router;