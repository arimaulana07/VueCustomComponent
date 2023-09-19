// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// createApp(App).mount('#app')


import { defineCustomElement } from 'vue';
import HelloWorld from './src/components/HelloWorld';

const HelloWorld = defineCustomElement(HelloWorld);

customElements.define('hello-world', HelloWorld);