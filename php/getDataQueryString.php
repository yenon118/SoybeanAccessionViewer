<?php

function getDataQueryString($db, $table, $where = "")
{

    // Generate SQL string
    $query_str = "SELECT * FROM " . $db . "." . $table . " ";
    if ($where != "") {
        $query_str = $query_str . $where . " ";
    }
    $query_str = $query_str . ";";

    return $query_str;
}

?>
