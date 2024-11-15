import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'; // Import Material Icons
import router from './router'; // Import the router

Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi', // Set default icon font to Material Design Icons
  },
});

new Vue({
  vuetify,
  router, // Add the router here
  render: (h) => h(App),
}).$mount('#app');
