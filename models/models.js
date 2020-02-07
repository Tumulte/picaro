export default {
    demo: {
        films: {
            title: {
                type: "text",
                label: {
                    text: "Titre",
                    attributes: {
                        class: "test-form__species-label",
                    },
                },
                attributes: {
                    maxlenght: 100,
                    class: "input-test",
                    required: "required",
                },
            },
            director: {
                type: "text",
                label: {
                    text: "Réalisateur",
                    attributes: {
                        class: "test-form__species-label",
                    },
                },
                attributes: {
                    maxlenght: 100,
                    class: "input-test",
                    required: "required",
                },
            },
        },

        testData: {
            firstname: {
                type: "text",
                label: {
                    text: "Quel est votre prénom ?",
                    attributes: {
                        class: "test-form__species-label",
                    },
                },
                attributes: {
                    maxlenght: 100,
                    class: "input-test",
                    required: "required",
                },
            },
            lastname: {
                type: "text",
                label: {
                    text: "Quel est votre nom ?",
                    attributes: {
                        class: "test-form__species-label",
                    },
                },
                attributes: {
                    maxlenght: 100,
                    class: "input-test",
                },
            },
            tags: {
                type: "tags",
                label: {
                    text: "tags",
                    attributes: {
                        class: "test-form__species-label",
                    },
                },
            },
            association: {
                type: "association",
                label: {
                    text: "author",
                    attributes: {
                        class: "test-form__species-label",
                    },
                },
            },
        },
        anotherData: {
            name: {
                type: "text",
                label: {
                    text: "Hello ?",
                    attributes: {
                        class: "test-form__species-label",
                    },
                },
                attributes: {
                    maxlenght: 100,
                    class: "input-test",
                },
            },
            alive: {
                type: "checkbox-bool",
                label: {
                    text: "Quel est votre nom ?",
                    attributes: {
                        class: "test-form__species-label",
                    },
                },
                attributes: {
                    class: "another-test",
                },
            },
        },
    },
};
