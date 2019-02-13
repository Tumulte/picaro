module.exports = {
    Demo: {
        testData: {
            firstname: {
                type: "text",
                label: {
                    text: "Quel est votre nom ?",
                    attributes: {
                        class: "test-form__species-label"
                    }
                },
                attributes: {
                    maxlenght: 100,
                    class: "input-test"
                }
            },
            species: {
                type: "checkbox",
                label: {
                    text: "Êtes-vous d'accord ?",
                    attributes: {
                        class: "test-form__species-label"
                    }
                },
                options: [{
                    text: "Oui",
                    value: 1
                }, {
                    text: "Non",
                    value: 0
                }],
                attributes: {
                    class: "yobila"
                }
            },
            alive: {
                type: "checkbox-bool",
                label: {
                    text: "Quel est votre nom ?",
                    attributes: {
                        class: "test-form__species-label"
                    }
                },
                attributes: {
                    class: "another-test"
                }
            }
        },
        anotherData: {
            name: {
                type: "text",
                label: {
                    text: "Hello ?",
                    attributes: {
                        class: "test-form__species-label"
                    }
                },
                attributes: {
                    maxlenght: 100,
                    class: "input-test"
                }
            }
        }
    }
}