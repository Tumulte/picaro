import _ from "lodash";

export default {
    data: function () {
        return {
            validCounterName: "mainCounter",

        };
    },

    methods: {
        validateCount: _.debounce(function () {
            let filteredValidator = Object.keys(this.$v).filter(item => !item.includes("$") && Object.keys(this.$v[item]).filter(subItem => !subItem.includes("$") && !this.$v[item][subItem]).length !== 0);
            this.$store.dispatch("updateValidCounter", {
                counterName: this.validCounterName,
                counterValue: filteredValidator.length
            });
        }, 100)
    },
    watch: {
        $v: {
            handler() {
                this.validateCount();
            },
            deep: true
        }
    },
    created() {
        let requireCounter = 0;
        for (let item in this.$v) {
            if (item !== "$model" && this.$v[item].hasOwnProperty("required")) {
                requireCounter += 1;
            }
        }
        this.$store.dispatch("updateValidCounter", {
            counterName: this.validCounterName,
            counterValue: requireCounter
        });


    }
};