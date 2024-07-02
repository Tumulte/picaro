import Layout from "@components/layout/Layout.vue";
import List from "@components/display/DisplayList.vue";
import FilterCategories from "@components/filters/FilterCategories.vue";

export const availableModules = {
    Layout: Layout,
    FilterLayout: "FilterLayout",
    FilterLink: "FilterLink",
    List,
    FilterCategories: FilterCategories,
} as const
