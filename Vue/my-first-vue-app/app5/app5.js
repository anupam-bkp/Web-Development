new Vue({
    el: '#app',
    
    data: {
        title: 'Welcome to App-5!',
        attachRed: false,
        color: 'green'
    },

    computed: {
        divClasses: function(){
            return{
                red: this.attachRed,
                blue: !this.attachRed
            };
        }
    },

    methods: {
        
    }

});