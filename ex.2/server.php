<?php

  header('Content-Type: application/json');

  include_once "database.php";

  // print_r($graphs);
  $newArr = [];

  foreach ($graphs[fatturato][data] as $value) {
    $newArr[] = $value;
  }

  echo json_encode($newArr);
 ?>
