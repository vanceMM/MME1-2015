$(document).ready(function(){

        $(document).ready(function(){
			var url="events.php";
				$("#event-table").html("");
				$.getJSON(url,function(data){
          console.log(data);
				$.each(data, function(i,eventitem){
					var newRow =
					"<tr>"
					+"<td>"+data.datum+"</td>"
					+"<td>"+data.city+"</td>"
					+"<td>"+data.location+"</td>"
					+"<td>"+data.country+"</td>"
					+"<td>"+data.feat+"</td>"
					+"<td>"+data.artist+"</td>"
					+"</tr>"

					$(newRow).appendTo("#event-table");
				});
			});
		});


});
