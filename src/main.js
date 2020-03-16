import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMermaid from "vue-mermaid";

Vue.config.productionTip = false


Vue.use(VueMermaid);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

