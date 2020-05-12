<?php

  header('Content-Type: application/json');

  include_once "database.php";

  $res[] = array_keys($graphs[fatturato_by_agent][data]);
  $res[] = array_values($graphs[fatturato_by_agent][data]);

    $res= [
      "name" => $res[0],
      "value"=> $res[1]
    ];

  // print_r($res);
  // print_r($abc);
  echo json_encode($res);
 ?>
