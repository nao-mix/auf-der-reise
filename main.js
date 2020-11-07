import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

// axios
import axios from 'axios';
Vue.prototype.$axios = axios;

//Bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

// reCaptcha v3
import { VueReCaptcha } from 'vue-recaptcha-v3';
Vue.use(VueReCaptcha, {
    siteKey: 'MY_SITEKEY',
    loaderOptions: {
        useRecaptchaNet: true,
        autoHideBadge: true
    }
}); 

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
