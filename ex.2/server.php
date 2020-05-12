<?php

  header('Content-Type: application/json');

  include_once "database.php";

  $res[] = array_keys($graphs[fatturato_by_agent][data]);
  $res[] = array_values($graphs[fatturato_by_agent][data]);
  $res[] = array_values($graphs[fatturato][data]);

    $res= [
      "name" => $res[0],
      "value"=> $res[1],
      "monthlySales"=> $res[2]
    ];

  echo json_encode($res);
 ?>
