<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{username}}</p>
        <p>Age: {{userAge}}</p>
        <button v-on:click="resetName">Reset Name</button>
        <button v-on:click="resetUsernameFunc()">Reset Username</button>
    </div>
</template>

<script>

    import { eventBus } from "../main";

    export default {
        props: ['username', 'resetUsernameFunc', 'userAge'],

        methods: {

            resetName(){
                this.username = 'Anupam';
                this.$emit('usernameWasReset', this.username);
            }

        },

        created(){
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
               });
        }

    };
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
