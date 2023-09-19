// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// createApp(App).mount('#app')


import { defineCustomElement } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const HelloWorldEl = defineCustomElement(HelloWorld);

customElements.define('hello-world', HelloWorldEl);