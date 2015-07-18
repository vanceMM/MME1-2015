<?php
// //PDO is a extension which  defines a lightweight, consistent interface for accessing databases in PHP.
// $db=new PDO('mysql:dbname=events;host=localhost;','root','root');
// //here prepare the query for analyzing, prepared statements use less resources and thus run faster
// $row=$db->prepare('select * from Events');
//
// $row->execute();//execute the query
// $json_data=array();//create the array
// foreach($row as $rec)//foreach loop
// {
//
//     $json_array['datum']=$rec['datum'];
//     $json_array['city']=$rec['city'];
//     $json_array['location']=$rec['location'];
//     $json_array['country']=$rec['country'];
//     $json_array['feat']=$rec['feat'];
//     $json_array['artist']=$rec['artist'];
//
// //here pushing the values in to an array
//     array_push($json_data,$json_array);
//
// }
// echo ($json_array);
// //built in PHP function to encode the data in to JSON format
// echo json_encode($json_data);

//open connection to mysql db
   $connection = mysqli_connect("localhost","root","root","events") or die("Error " . mysqli_error($connection));

   //fetch table rows from mysql db
   $sql = "select * from Events";
   $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

   //create an array
   $emparray[] = array();
   while($row =mysqli_fetch_assoc($result))
   {
       $emparray[] = $row;
   }
   echo json_encode($emparray);

   //close the db connection
   mysqli_close($connection);

?>
