<?php

  header('Content-Type: application/json');

  include_once "database.php";

  $res = [];

  foreach ($graphs[fatturato_by_agent][data] as $key => $value) {
    $res[] = [
      "name" => "$key",
      "value" => "$value"
    ];
  }

  // echo json_encode($graphs[fatturato][data]);
 ?>
