// magic.js
$(window).bind("load", function() {

  $.ajaxSetup({
    error: function (jqXHR, exception) {
      if (jqXHR.status === 0) {
        alert('Not connected.\n Verify Network.');
      } else if (jqXHR.status == 404) {
        alert('Requested page not found. [404]');
      } else if (jqXHR.status == 500) {
        alert('Internal Server Error [500].');
      } else if (exception === 'parsererror') {
        alert('Requested JSON parse failed.');
      } else if (exception === 'timeout') {
        alert('Time out error.');
      } else if (exception === 'abort') {
        alert('Ajax request aborted.');
      } else {
        alert('Uncaught Error.\n' + jqXHR.responseText);
      }
    }
  });
  // $("button.crud").click(function(event) {
  //   alert(event.target.id);
  // });

  // process the form
  $("#event-form").submit(function(event) {
    event.preventDefault();

    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)




    // process the form
    $.ajax({

      type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)

      url         : 'process.php', // the url where we want to POST

      data        : {
        action: "add",
        'datum'     : $('input[name=datum]').val(),
        'city'      : $('input[name=city]').val(),
        'location'  : $('input[name=location]').val(),
        'country'   : $('input[name=country]').val(),
        'feat'      : $('input[name=feat]').val(),
        'artist'    : $('input[name=artist]').val()},
        success: function(data) {
          $("#modal-form").modal("hide");
          console.log(data);
        }

      })

    });
    console.log("hide");

    $('#event-form').modal('hide');


    $("button.crud").click(function (event) {

      $.ajax({
        type: "POST",
        url: "process.php",
        data: { action: "delete",
                id:     event.target.id
              },
      // success: function (msg) {
      //   var obj = $.parseJSON(msg);
      //   if(obj.message){
      //     $("#footerfeedback").text(obj.message);
      //   } else {
      //     $("#footerfeedback").text(obj.databaseError);
      //   }
      // }
    });
  });
  $("button#btn-events").click(function() {
    $.getJSON("process.php", { action: "getall" },function(data){
      console.log(data);
      var tr;
            for (var i = 0; i < data.length; i++){
              tr = $('<tr/>');
            //  tr = $('<tr id="' + data[i].id +'" class="table-element"/>');
              tr.append("<td id='datum'>" + data[i].datum + "</td>");
              tr.append("<td id='city'>" + data[i].city + "</td>");
              tr.append("<td id='location'>" + data[i].location + "</td>");
              tr.append("<td id='country'>" + data[i].country + "</td>");
              tr.append("<td id='feat'>" + data[i].feat + "</td>");
              tr.append("<td id='artist'>" + data[i].artist + "</td>");
              tr.append('<td ><button type="button" class="btn btn-info btn-md crud" id="' + data[i].id +'">Delete</button>');
              $('#event-tbl').append(tr);
            }
            $(toggleTable).click(function(){
            	$("table").toggle('slow', 'jswing');
            });
    });
  });

});
