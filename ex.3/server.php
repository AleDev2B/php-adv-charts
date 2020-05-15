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

  $def += ["name" => $etichette];
  $def += ["value" => $valori];
  $def = ["fatturato_by_agent" => $def];

  $def += $abc; // <-- list with fatturato + fatturato_by_agent
  $ghi += $def; // <-- $ghi lista completa
  $accessLevel = $_GET["level"];

  if ($accessLevel == "clevel") {
    echo json_encode($ghi);
  } elseif ($accessLevel == "employee") {
    echo json_encode($def);
  }  else {
    echo json_encode($abc);
  }

 ?>
