import VueRouter from "vue-router";

export default new VueRouter({
    routes: [{
        name: "filterRoute",
        path: "/filters/:globalFilters/:globalParams/:modelFilters/:modelFilterParams/"
    },
    ]
});