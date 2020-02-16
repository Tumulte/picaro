<template>
    <div>{{ message }}</div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class modelPanel extends Vue {
        // Declared as component data
        message = "Hello World!";
    }
</script>
