// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// createApp(App).mount('#app')


import { defineCustomElement } from 'vue';
import HelloWorld from './src/components/HelloWorld';

const HelloWorldEl = defineCustomElement(HelloWorld);

customElements.define('hello-world', HelloWorldEl);