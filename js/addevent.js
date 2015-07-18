// magic.js
$(document).ready(function() {

    // process the form
    $("#event-form").submit(function(event) {
        event.preventDefault();
        
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        
     

        
        // process the form
        $.ajax({
            
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            
            url         : 'process.php', // the url where we want to POST

            data        : {'datum'             : $('input[name=datum]').val(),
            'city'      : $('input[name=city]').val(),
            'location'  : $('input[name=location]').val(),
            'country'   : $('input[name=country]').val(),
            'feat'      : $('input[name=feat]').val(),
            'artist'    : $('input[name=artist]').val()},
            //'time'      : $('input[time=time-name]').val()},
            success: function(data) {
                        $("#modal-form").modal("hide");
            console.log(data);            
    }
            
        })
         
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });


        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();

   
    });
    console.log("hide");
    $('#event-form').modal('hide');
});