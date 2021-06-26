export default function vueTestingHelper(wrapper) {
    this.fetchElement = function (method = "get", [attributeName, extraAttributes = "", newRoot]) {
        if (newRoot) {
            return newRoot[method](`[data-jest='${attributeName}']${extraAttributes}`);
        }
        return wrapper[method](`[data-jest='${attributeName}']${extraAttributes}`);
    };
    this.get = function (attributeName, extraAttributes = "", newRoot) {
        return this.fetchElement("get", arguments);
    };
    this.find = function (attributeName, extraAttributes = "", newRoot) {
        return this.fetchElement("find", arguments);
    };
    this.tick = function () {
        return wrapper.vm.$nextTick();
    };
    this.wait = function (time) {
        return new Promise(r => setTimeout(r, time));
    };
    this.click = function (attributeName, extraAttribute) {
        this.get(attributeName, extraAttribute).trigger("click");
    };
    this.exists = function (attributeName, extraAttribute, newRoot) {
        return this.find(attributeName, extraAttribute, newRoot).exists();
    };
    this.set = function (value, attributeName, extraAttribute, newRoot) {
        this.get(attributeName, extraAttribute, newRoot).setValue(value);
    };
    this.select = function (value, attributeName, extraAttribute, newRoot) {
        const select = this.get(attributeName, extraAttribute, newRoot);
        const options = select.findAll("option");
        options.at(value).setSelected();
    };
}
