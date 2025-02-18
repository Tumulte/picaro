import {VueWrapper} from "@vue/test-utils";

export function checkVisible(elements: string[], wrapper: VueWrapper<any>): boolean[] {

    return elements.map((item) => {
        let query = ""
        if (item.match(/^[.#]/)) {
            query = item
        } else {
            query = `[data-testid="${item}"]`
        }
        const element = wrapper.find(query)
        return element.exists() && element.isVisible()
    })
}
