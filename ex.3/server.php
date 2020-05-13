<?php

  header('Content-Type: application/json');

  include_once "database.php";

  $abc = ["fatturato" => $graphs[fatturato]];
  $def = ["type" => $graphs[fatturato_by_agent][type]];
  $def += ["access" => $graphs[fatturato_by_agent][access]];
  $ghi = ["team_efficiency" => $graphs[team_efficiency]];

  foreach ($graphs[fatturato_by_agent][data] as $key => $value) {
    $etichette[] = $key;
    $valori[] = $value;
  };

  $def["name"] = $etichette;
  $def["value"] = $valori;
  $def = ["fatturato_by_agent" => $def];
  $abc += $def;
  $abc += $ghi;

  echo json_encode($abc);
 ?>
