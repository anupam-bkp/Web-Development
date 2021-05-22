new Vue({
    el: '#app',
    
    data: {
        title: 'Hello World!',
        link: 'http://www.google.co.in',
        completelink: '<a href="http://www.google.co.in">Goto Google Directly</a>'
    },

    methods: {
        sayHello: function() {
            this.title  = 'Hello Everyone!';
            return this.title;           
        }
    }

});