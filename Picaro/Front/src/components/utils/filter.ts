import {Filter, FilterCollection, FilterMethod, ModelContent, ModuleParam} from "@types";

const applyFilterMethod = function (method: FilterMethod, item: string[] | ModelContent[], checkedValue) {
    if (method === "eq") {
        return item === checkedValue.value[0];
    }
    if (method === "in") {
        return item.includes(checkedValue.value[0]);
    }
    if (method === "fd" && typeof item !== 'string') { // field
        return !!item.find(item => item.id === checkedValue.field && item.content.includes(checkedValue.value[0]))
    }

};
const checkFilterCollection = function (item: ModelContent, filter: Filter) {
    if (!filter || Object.entries(filter).length === 0) return null;

    const itemToCheck = item.content
    if (filter.field === 'categories') {

        const categoriesToCheck = item.categories
        return applyFilterMethod(
            filter.method,
            categoriesToCheck,
            {value: filter.value}
        );
    } else {
        if (!itemToCheck.find(subItem => subItem.id === filterParameters.field)) {
            return false;
        }
    }
    return applyFilterMethod(
        filterParameters.method,
        itemToCheck.filter(subItem => subItem.id === filterParameters.field),
        filterParameters
    );

};

export const applyFilter = function (item: ModelContent, filterCollection: FilterCollection, moduleParams: ModuleParam) {


    let displayItem = 0;
    let emptyFilter = 0;

    if (Object.keys(filterCollection).length === 0) {
        return true
    }


    filterCollection.all.forEach(filter => {
        const filterStatus = checkFilterCollection(item, filter);
        if (filterStatus === true) {
            displayItem += 1;
        } else if (filterStatus === null) {
            emptyFilter += 1;
            displayItem += 1;
        }
    });
    // if all filters are empty use default panel params
    if (emptyFilter === filterCollection.all.length && item.categories.length > 0 && moduleParams.categories?.length > 0) {
        const categoryIdCollection = moduleParams.categories.map(item => item.id);
        return item.categories.some(item => categoryIdCollection.includes(item));
    }
    // return item if all filter are true
    return displayItem === filterCollection.all.length;
};
