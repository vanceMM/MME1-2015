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

$result = $mysqli->query("SELECT `date`, `city`, `location`, `country`, `feat` FROM `Events`");

if (!$result) {
  http_response_code(400); // Bad Request
    die(
      json_encode(
      	array("error" => "Failed to execute mysql statement: " . $mysqli->error)
        )
    );
}

$outp = "[";
while($rs = $result->fetch_assoc()) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"date":"'  . $rs["date"] . '",';
    $outp .= '"city":"'   . $rs["city"]        . '",';
    $outp .= '"location":"'   . $rs["location"]        . '",';
    $outp .= '"country":"'   . $rs["country"]        . '",';
    $outp .= '"feat":"'. $rs["feat"]     . '"}'; 
}
$outp .="]";

$mysqli->close();

echo($outp);

?>