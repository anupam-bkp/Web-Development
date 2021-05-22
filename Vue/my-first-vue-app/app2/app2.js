new Vue({
    el: '#app',
    
    data: {
        title: 'Hello World!',
        counter: 0,
        x: 0,
        y: 0,
        newCounter: 0
    },

    methods: {
        
        increase: function(){
            this.counter++;
        },

        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;        
        },

        incrementBy2: function(val, event){
            this.newCounter += 2;
        }
    }

});