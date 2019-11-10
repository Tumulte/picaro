var render = function(createElement) {
	var stuctureStringInput = createElement('input', {
		domProps: {
			type: 'text',
			value: JSON.stringify(this.navStructure),
		},
	});
	var listContainer = this.createList(createElement, this.navStructure);
	return createElement('div', { key: this.componentKey }, [stuctureStringInput, listContainer]);
};
