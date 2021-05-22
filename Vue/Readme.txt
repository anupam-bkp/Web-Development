first-vue-app
    => Dummy
--------------------------------------
second-vue-app
    => Components Basics
--------------------------------------
third-vue-app
    => Components Advanced
-------------------------------------
fourth-vue-app
    => 
-------------------------------------
fifth-vue-app
    => 
------------------------------------



Known options for Vue instance:

new Vue({
    el: {},         ==> Connect to DOM
    data: {},       ==> Store data to be used
    methods: {},    ==> Functions of this Vue instance
    computed:{},    ==> Dependent Properties
    watch: {}       ==> Execute code upon data changes
});

Some Vue directives:

v-on 
v-bind
v-model
v-if
v-else
v-show


CLI Process Commands
====================

1. npm install -g @vue/cli

2. vue create my-project
    vue ui

3. cd my-project
   npm run serve