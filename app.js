// Vue instance
new Vue({
    // we want to target the div with id of 'events'
    el: '#events',
    
    // here we can register any values or collections that hold data
    // for the application
    data: {
        event: { name: '', description: '', date: ''},
        events: []
    },
    
    // anything within the ready function will run when the app loads
    ready: function() {
        // when the app loads, we want to call the method that initialises
        // some data
        this.fetchEvents();
    },
    
    // methods we want to use in our app are registered here
    methods: {
        // we dedicate a method to retrieving and setting some data
        fetchEvents: function(){
            var events = [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International Film Festival',
                    date: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'The Martian Premiere',
                    description: 'The Martian comes to theatres.',
                    date: '2015-10-02'
                },
                {
                    id: 3,
                    name: 'SXSW',
                    description: 'Music, film and interactive festival in Austin, TX.',
                    date: '2016-03-11'
                }
            ];
            // $set is a convenience method provided by Vue that is similar
            // to pushing data onto an array
            this.$set('events', events);
        },
        
        // adds an event to the existing events array
        addEvent: function(){
            if(this.event.name){
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' };
            }
        },
        
        // deletes event
        deleteEvent: function(index){
            if(confirm("Are you sure you want to delete this event?")){
                // removes one event
                this.events.splice(index, 1);
            }
        }
    }
});