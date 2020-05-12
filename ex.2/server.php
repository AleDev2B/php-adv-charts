<?php

  header('Content-Type: application/json');

  include_once "database.php";


  // $newArr = [];
  //
  // foreach ($graphs[fatturato][data] as $value) {
  //   $newArr[] = $value;
  // };

  // print_r($graphs[fatturato_by_agent][data]);
  // foreach ($graphs[fatturato_by_agent][data] as $valor) {
  //   $newArrPieData[] = $valor;
  // };

  echo json_encode($graphs[fatturato][data]);
 ?>
