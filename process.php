<?php

// establish database connection and create PDO-Object:
include $_SERVER['DOCUMENT_ROOT'] . '/connect_inc.php';



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  /* case to determine which post request is being used */
  switch ($_POST['action']) {
    case 'add':

    $response = null;

    try {
      $sql = 'INSERT INTO Events SET  datum = :datum,
      city = :city,
      location = :location,
      country = :country,
      feat = :feat,
      artist = :artist;';

      $s = $pdo->prepare($sql);

      $s->bindValue(':datum', $_POST['datum']);
      $s->bindValue(':city', $_POST['city']);
      $s->bindValue(':location', $_POST['location']);
      $s->bindValue(':country', $_POST['country']);
      $s->bindValue(':feat', $_POST['feat']);
      $s->bindValue(':artist', $_POST['artist']);
      $s->execute();
      $response = array('message' => 'insert done');
    } catch (PDOException $e){
      $error = 'Error adding event: ' . $e->getMessage();
      $response = array('databaseError' => $error);
      $json = json_encode($response); // return json echo $json;
    }

    $json = json_encode($response); echo $json;
    break;

    case 'update':

    try {
      $sql = 'UPDATE Events SET
      datum = :datum,
      city = :city,
      location = :location,
      country = :country,
      feat = :feat,
      artist = :artist;
      WHERE id = :id';
      $s = $pdo->prepare($sql);
      $s->bindValue(':id', $_POST['id']);
      $s->bindValue(':firstname', $_POST['firstname']);
      $s->bindValue(':secondname', $_POST['secondname']);
      $s->bindValue(':email', $_POST['email']);
      $s->bindValue(':password', $password);
      $s->execute();
    } catch (PDOException $e) {
      $error = 'Error updating user: ' . $e->getMessage();
      $response = array('databaseError' => $error);
      $json = json_encode($response); // return json echo $json;
      exit();
    }
    $response = array('message' => 'update done');
    $json = json_encode($response); // return json echo $json;
    break;

    case 'delete': // DELETE ************************************************************* $response = null;
    try {
      $sql = 'DELETE FROM Events WHERE id = :id';
      $s = $pdo->prepare($sql);
      $s->bindValue(':id', $_POST['id']);
      $s->execute();
      $response = array('message' => 'delete done');
    } catch (PDOException $e) {
      $error = 'Error deleting user: ' . $e->getMessage();
      $response = array('databaseError' => $error);
      $json = json_encode($response); // return json echo $json;
      exit();
    }
    $message = 'record deleted';
    $response = array('message' => $message);
    $json = json_encode($response); // return json echo $json;
    break;
  }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
  switch ($_GET['action']) {
    case 'getall': // GETALL ***************************************************************
    try {
      $result = $pdo->query('SELECT * FROM Events');
    } catch (PDOException $e) {
      $error = 'QUERY ERROR: SELECT * FROM Events: ' . $e->getMessage();
      $response = array('databaseError' => $error);
      $json = json_encode($response);
      echo $json;
      exit();
    }
    if (empty($result)) {
      $error = 'no records found';
      $response = array('databaseError' => $error);
    }
    $events = array();
    foreach ($result as $row) {
      $events[] = array('id' => $row['id'],
      'datum' => $row['datum'],
      'city' => $row['city'],
      'location' => $row['location'],
      'country' => $row['country'],
    'feat' => $row['feat'],
  'artist' => $row['artist']);
    }
    $json = json_encode($events);
    echo $json;
    break;
  }
}
?>
