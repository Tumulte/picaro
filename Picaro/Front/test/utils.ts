import {VueWrapper} from "@vue/test-utils";

export function checkExists(elements: string[], wrapper: VueWrapper<any>): boolean[] {

    return elements.map((item) => {
        let query = ""
        if (item.match(/^[.#]/)) {
            query = item
        } else {
            query = `[data-test="${item}"]`
        }
        const element = wrapper.find(query)
        return element.exists()
    })
}
