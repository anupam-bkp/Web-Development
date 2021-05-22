<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Name: {{name}}</p>
        <p>Age: {{age}}</p>

        <button class="btn-warning" 
            v-on:click="changeName">Change Name</button>

        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-bind:username="name"
                    v-bind:resetUsernameFunc="resetName"
                    v-bind:userAge="age"
                    v-on:usernameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit v-bind:userAge="age"
                    v-on:ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {

        data: function(){
            return{
                name: 'Anupam',
                age: 27
            };
        },

        methods: {
            changeName() {
                this.name = 'Pawan';
            },

            resetName(){
                this.name = 'Anupam';
            }
        },

        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style>
    div {
        background-color: lightblue;
    }
</style>
