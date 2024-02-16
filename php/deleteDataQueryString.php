<?php

function deleteDataQueryString($db, $table, $accession) {

    if (empty($accession)) {
        return "";
    } else {
        $accession = "'" . $accession . "'";
    }

    // Generate SQL string
    $query_str = "DELETE FROM " . $db . "." . $table . " WHERE Accession = " . $accession . ";";

    return $query_str;
}

?>
