import Vue from 'vue';
import App from './components/App.vue';

Vue.config.devtools = true;

const vm = new Vue({
    el: '#app',
    render: h => h(App)
});
