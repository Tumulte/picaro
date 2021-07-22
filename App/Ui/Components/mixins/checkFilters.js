export default {
    methods: {
        checkFilters(item) {
            const isLinked = !(this.listFilters && this.listFilters.link) || this.listFilters.link[0] === item.id;
            let hasCategory = true;
            if ((!this.selectedCategories || this.selectedCategories.length === 0) && this.panelParams.categories.length === 0 && !item.categories) {
                hasCategory = true;
            } else if (this.selectedCategories && this.selectedCategories.length > 0) {
                hasCategory = false;
                hasCategory = item.categories.forEach(item => {
                    if (this.selectedCategories.find(subItem => item === subItem)) {
                        hasCategory = true;
                    }
                });
            } else {
                hasCategory = false;
                item.categories.forEach(item => {
                    if (this.panelParams.categories.find(subItem => item === subItem.id)) {
                        hasCategory = true;
                    }
                    ;
                });
            }

            return isLinked && hasCategory;
        },
    }
};
