import { defineCustomElement } from 'vue'
import HelloWorld from './components/HelloWorld.ce.vue';

const HelloWorldEl = defineCustomElement(HelloWorld);
customElements.define('hello-world', HelloWorldEl);