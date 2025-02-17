<?php

include '../../config.php';
include 'pdoResultFilter.php';
include 'getDataQueryString.php';
include 'deleteDataQueryString.php';


$accession = $_GET['Accession'];

$accession = clean_malicious_input($accession);

$db = "soykb";
$table = "aview_Soybean_Accession_Mapping";


$result_arr = array();

if (!empty($accession)) {

	// Create a where clause because we need to check is accession exists
	$where = "WHERE Accession = '" . $accession . "'";

	// Create a query string
	$query_str = getDataQueryString($db, $table, $where);

	// Query data
	$stmt = $PDO->prepare($query_str);
	$stmt->execute();
	$result = $stmt->fetchAll();

	$result_arr = pdoResultFilter($result);

	// Check if the result is empty (also means no duplicate accession)
	if (!empty($result_arr)) {

		// Create a query string
		$query_str = deleteDataQueryString(
			$db,
			$table,
			$accession
		);

		// Insert data if the query string is not empty
		if (!empty($query_str)) {
			// Query data
			$stmt = $PDO->prepare($query_str);
			$stmt->execute();
			$result = $stmt->fetchAll();
		}
	}
}

echo json_encode(array("data" => $result_arr), JSON_INVALID_UTF8_IGNORE);

?>
