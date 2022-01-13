
require("./bootstrap");

import VueRouter from "vue-router";
import Index from "./Index";
import router from "./routes";
import Vue from 'vue/dist/vue'; // for error : TypeError: window.Vue.use is not a function
window.Vue = require("vue");
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index,
    },
});