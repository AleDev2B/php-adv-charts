<?php

  header('Content-Type: application/json');

  include_once "database.php";

  $abc = ["fatturato" => $graphs[fatturato]];
  $def = $graphs[fatturato_by_agent];
  $ghi = ["team_efficiency" => $graphs[team_efficiency]];

  foreach ($def[data] as $key => $value) {
    $etichette[] = $key;
    $valori[] = $value;
  };

  $def[data] = ["name" => $etichette];
  $def += ["value" => $valori];
  $def = ["fatturato_by_agent" => $def];
  $abc += $def;
  $abc += $ghi;

  $accessLevel = $_GET["level"];
  // echo $accessLevel;
  
  if ($accessLevel == "clevel") {
    echo json_encode($abc);
  } elseif ($accessLevel == "employee") {
    echo json_encode($abc[fatturato] + $abc[fatturato_by_agent]);
  } else {
    echo json_encode($abc[fatturato]);
  }

 ?>
