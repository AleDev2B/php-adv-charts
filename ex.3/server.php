<?php

  header('Content-Type: application/json');

  include_once "database.php";

  $res[] = array_keys($graphs[fatturato_by_agent][data]);
  $res[] = array_values($graphs[fatturato_by_agent][data]);
  $res[] = array_values($graphs[fatturato][data]);
  $res[] = array_values($graphs[team_efficiency][data][Team1]);
  $res[] = array_values($graphs[team_efficiency][data][Team2]);
  $res[] = array_values($graphs[team_efficiency][data][Team3]);
  $res[] = array_keys($graphs[team_efficiency][data]);

  $res= [
    "name" => $res[0],
    "value"=> $res[1],
    "monthlySales"=> $res[2],
    "Team1" => $res[3],
    "Team2" => $res[4],
    "Team3" => $res[5],
    "teamLabels" => $res[6],
  ];

  echo json_encode($res);
 ?>
