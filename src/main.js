import { createApp, defineCustomElement } from 'vue'
// import App from './App.vue'
import HelloWorld from './components/HelloWorld.ce.vue';
import './index.css'
const HelloWorldEl = defineCustomElement(HelloWorld);
customElements.define('hello-world', HelloWorldEl);

// createApp(App).mount('#app');