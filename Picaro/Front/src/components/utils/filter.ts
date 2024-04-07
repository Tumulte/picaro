const applyFilterMethod = function (method: "eq" | "in" | "fd", item, checkedValue) {
    if (method === "eq") {
        return item === checkedValue.value[0];
    }
    if (method === "in") {
        return item.includes(checkedValue.value);
    }
    if (method === "fd" && typeof item !== 'string') { // field
        return !!item.find(item => item.id === checkedValue.field && item.content.includes(checkedValue.value[0]))
    }

};
const checkFilterCollection = function (item, filter) {
    if (!filter || Object.entries(filter).length === 0) return null;
    for (const filterParameters of Object.values(filter)) {
        let itemToCheck = item.content
        if (filterParameters.field === 'categories') {
            itemToCheck = item.categories
            return applyFilterMethod(
                filterParameters.method,
                itemToCheck,
                {value: filterParameters.id}
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
    }
};

export const applyFilter = function (item, filterCollection, moduleParams) {
    let displayItem = 0;
    let emptyFilter = 0;

    filterCollection.forEach(filter => {
        const filterStatus = checkFilterCollection(item, filter);
        console.log('filterStatus', filterStatus)
        if (filterStatus === true) {
            console.log('filterStatus', filterStatus)
            displayItem += 1;
        } else if (filterStatus === null) {
            emptyFilter += 1;
            displayItem += 1;
        }
    });
    // if all filters are empty use default panel params
    if (emptyFilter === filterCollection.length && item.categories.length > 0 && moduleParams.categories?.length > 0) {
        const categoryIdCollection = moduleParams.categories.map(item => item.id);
        return item.categories.some(item => categoryIdCollection.includes(item));
    }
    // return item if all filter are true
    return displayItem === filterCollection.length;
};
