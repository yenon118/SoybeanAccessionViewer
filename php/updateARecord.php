<?php

include '../../config.php';
include 'pdoResultFilter.php';
include 'updateDataQueryString.php';
include 'getDataQueryString.php';


$accession = $_POST['Accession'];
$soykb_accession = $_POST['SoyKB_Accession'];
$grin_accession = $_POST['GRIN_Accession'];
$sra_name = $_POST['SRA_Name'];
$taxonomy = $_POST['Taxonomy'];
$state = $_POST['State'];
$country = $_POST['Country'];
$maturity_group = $_POST['Maturity_Group'];
$improvement_status = $_POST['Improvement_Status'];
$classification = $_POST['Classification'];
$source = $_POST['Source'];

$db = "soykb";
$table = "aview_Soybean_Accession_Mapping";


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

        if (count($result_arr) == 1) {
            // Create a query string
            $query_str = updateDataQueryString(
                $db, 
                $table, 
                $accession, 
                $soykb_accession, 
                $grin_accession, 
                $sra_name, 
                $taxonomy, 
                $state, 
                $country, 
                $maturity_group, 
                $improvement_status, 
                $classification, 
                $source
            );

            // Update data if the query string is not empty
            if (!empty($query_str)) {
                // Query data
                $stmt = $PDO->prepare($query_str);
                $stmt->execute();
                $result = $stmt->fetchAll();
            }
        }
    }
}

header("Location: /SoybeanAccessionViewer/");

?>
