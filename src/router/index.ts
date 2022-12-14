import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import NotFound from "@/components/NotFound.vue"
import {createRouter, createWebHistory} from "vue-router"


const routes = [{
    path: "/", component: Home,
}, {
    path: "/about", component: About,
}, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router