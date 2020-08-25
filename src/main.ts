import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Hello.vue'
import Doc from './components/Hello2.vue'
import { createRouter, createWebHashHistory} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc },
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
