
require("./bootstrap");
import moment from "moment";
import VueRouter from "vue-router";
import Index from "./Index";
import router from "./routes";
import StarRating from "./shared/components/StarRating";
import Vue from 'vue/dist/vue'; // for error : TypeError: window.Vue.use is not a function
window.Vue = require("vue");
Vue.use(VueRouter);
Vue.filter("fromNow", value => moment(value).fromNow());
Vue.component("star-rating", StarRating);
const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index,
    },
});