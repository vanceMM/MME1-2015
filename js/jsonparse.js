var xmlhttp = new XMLHttpRequest();
var url = "/events.php";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "";

    for(i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
        arr[i].datum +
        "</td><td>" +
        arr[i].city +
        "</td><td>" +
        arr[i].location +
         "</td><td>" +
        arr[i].country +
         "</td><td>" +
        arr[i].feat +
        "</td><td>" +
        arr[i].artist +
        "</td></tr>";
        
    }
    
    console.log(out);

    document.getElementById("event-tbl").innerHTML = out;
}