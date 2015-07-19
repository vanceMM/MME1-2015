

$(document).ready(function(){
  $.getJSON("events.php",function(data){
    console.log(data);
    var tr;
          for (var i = 1; i < data.length; i++){
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
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  });

});
