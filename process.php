<?php

// establish database connection and create PDO-Object:
include $_SERVER['DOCUMENT_ROOT'] . '/connect_inc.php';

header('Content-Type: application/json');
try {
$sql = 'INSERT INTO Events SET  date = :datum,
                              city = :city,
                              location = :location,
                              country = :country,
                              feat = :feat,
                              artist = artist,
                              time = time;';

$s = $pdo->prepare($sql);
$s->bindValue(':datum', $_POST['datum']);
$s->bindValue(':city', $_POST['city']);
$s->bindValue(':location', $_POST['location']);
$s->bindValue(':country', $_POST['country']);
$s->bindValue(':feat', $_POST['feat']);
$s->bindValue(':artist', $_POST['artist']);
$s->bindValue(':time', $_POST['time']);
$s->execute();
$response = array('message' => 'insert done');
} catch (PDOException $e){
  $error = 'Error adding user: ' . $e->getMessage();
  $response = array('databaseError' => $error);
  $json = json_encode($response); // return json echo $json;
}

$json = json_encode($response); echo $json;



?>