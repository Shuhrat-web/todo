import { createApp } from 'vue'
import './style.css'
import store from "./store";
import App from './App.vue'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

createApp(App).use(Toast).use(store).mount('#app')
