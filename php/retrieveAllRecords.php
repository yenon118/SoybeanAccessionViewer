<?php

include '../../config.php';
include 'pdoResultFilter.php';
include 'getDataQueryString.php';

$db = "soykb";
$table = "aview_Soybean_Accession_Mapping";


$result_arr = array();


// Create a query string
$query_str = getDataQueryString($db, $table, "");

// Query data
$stmt = $PDO->prepare($query_str);
$stmt->execute();
$result = $stmt->fetchAll();

$result_arr = pdoResultFilter($result);


echo json_encode(array("data" => $result_arr), JSON_INVALID_UTF8_IGNORE);

?>
