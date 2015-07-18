

$(document).ready(function(){

  // $.get( "events.php", function( data ) {
  //   console.log(data);
  //
  //   // var tr;
  //   //     for (var i = 0; i < data.length; i++){
  //   //
  //   //       tr = $('<tr/>');
  //   //       tr.append("<td id='datum'>" + data[i].datum + "</td>");
  //   //       tr.append("<td id='city'>" + data[i].city + "</td>");
  //   //       tr.append("<td id='location'>" + data[i].location + "</td>");
  //   //       tr.append("<td id='country'>" + data[i].country + "</td>");
  //   //       tr.append("<td id='feat'>" + data[i].feat + "</td>");
  //   //       tr.append("<td id='artist'>" + data[i].artist + "</td>");
  //   //       $('#event-table').append(tr);
  //   //     }
  // });


  $.getJSON("events.php",function(data){
    console.log(data);
    var tr;
          for (var i = 1; i < data.length; i++){
            tr = $('<tr/>');
            tr.append("<td id='datum'>" + data[i].datum + "</td>");
            tr.append("<td id='city'>" + data[i].city + "</td>");
            tr.append("<td id='location'>" + data[i].location + "</td>");
            tr.append("<td id='country'>" + data[i].country + "</td>");
            tr.append("<td id='feat'>" + data[i].feat + "</td>");
            tr.append("<td id='artist'>" + data[i].artist + "</td>");
            $('#event-tbl').append(tr);
          }
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  });
});
