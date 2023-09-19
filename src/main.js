// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// createApp(App).mount('#app')

import './index.css'
import { defineCustomElement } from 'vue';
import HelloWorld from './components/HelloWorld.ce.vue';

const HelloWorldEl = defineCustomElement({
  template: HelloWorld,
});

customElements.define('hello-world', HelloWorldEl);