<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$mysqli = new mysqli("localhost", "root", "", "events");

if ($mysqli->connect_errno) {
 	  http_response_code(400); // Bad Request
    die(
      json_encode(
      	array("error" => "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error)
        )
    );
}

//$result = $mysqli->query("SELECT `datum`, `city`, `location`, `country`, `feat`, `artist` FROM `Events`");
$result = $mysqli->query("SELECT * FROM Events");
if (!$result) {
  http_response_code(400); // Bad Request
    die(
      json_encode(
      	array("error" => "Failed to execute mysql statement: " . $mysqli->error)
        )
    );
}

// $outp = "[";
// while($rs = $result->fetch_assoc()) {
//     if ($outp != "[") {$outp .= ",";}
//     $outp .= '{"datum":"'  . $rs["datum"] . '",';
//     $outp .= '"city":"'   . $rs["city"]        . '",';
//     $outp .= '"location":"'   . $rs["location"]        . '",';
//     $outp .= '"country":"'   . $rs["country"]        . '",';
//     $outp .= '"feat":"'   . $rs["feat"]        . '",';
//     $outp .= '"artist":"'. $rs["artist"]     . '"}';
// }
// $outp .="]";

$emparray[] = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

$mysqli->close();

echo($emparray);

?>
