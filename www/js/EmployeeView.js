var EmployeeView = function(employee) {
    
    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.add-location-btn', this.addLocation);
    };

    this.render = function() {
        this.$el.html(this.template(employee));
        return this;
    };
    

    
    this.addLocation = function(event) {
        event.preventDefault();

        navigator.geolocation.getCurrentPosition(
            function(position) {
                alert(position.coords.latitude + ',' + position.coords.longitude);
            },
            function() {
                alert('Error getting location');
            }, 
            {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true}
        );
        return false;
    };

    this.initialize();

}
