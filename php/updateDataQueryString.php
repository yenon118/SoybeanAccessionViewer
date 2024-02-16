<?php

function updateDataQueryString($db, $table, $accession, $soykb_accession, $grin_accession, $sra_name, $taxonomy, $state, $country, $maturity_group, $improvement_status, $classification, $source) {

    if (empty($accession)) {
        return "";
    } else {
        $accession = "'" . $accession . "'";
    }

    if (empty($soykb_accession)) {
        $soykb_accession = "NULL";
    } else {
        $soykb_accession = "'" . $soykb_accession . "'";
    }

    if (empty($grin_accession)) {
        $grin_accession = "NULL";
    } else {
        $grin_accession = "'" . $grin_accession . "'";
    }

    if (empty($sra_name)) {
        $sra_name = "NULL";
    } else {
        $sra_name = "'" . $sra_name . "'";
    }

    if (empty($taxonomy)) {
        $taxonomy = "NULL";
    } else {
        $taxonomy = "'" . $taxonomy . "'";
    }

    if (empty($state)) {
        $state = "NULL";
    } else {
        $state = "'" . $state . "'";
    }

    if (empty($country)) {
        $country = "NULL";
    } else {
        $country = "'" . $country . "'";
    }

    if (empty($maturity_group)) {
        $maturity_group = "NULL";
    }

    if (empty($improvement_status)) {
        $improvement_status = "NULL";
    } else {
        $improvement_status = "'" . $improvement_status . "'";
    }

    if (empty($classification)) {
        $classification = "NULL";
    } else {
        $classification = "'" . $classification . "'";
    }

    if (empty($source)) {
        $source = "NULL";
    } else {
        $source = "'" . $source . "'";
    }


    // Generate SQL string
    $query_str = "UPDATE " . $db . "." . $table . " SET ";
    
    $query_str = $query_str . "SoyKB_Accession = " . $soykb_accession . ", ";
    $query_str = $query_str . "GRIN_Accession = " . $grin_accession . ", ";
    $query_str = $query_str . "SRA_Name = " . $sra_name . ", ";
    $query_str = $query_str . "Taxonomy = " . $taxonomy . ", ";
    $query_str = $query_str . "State = " . $state . ", ";
    $query_str = $query_str . "Country = " . $country . ", ";
    $query_str = $query_str . "Maturity_Group = " . $maturity_group . ", ";
    $query_str = $query_str . "Improvement_Status = " . $improvement_status . ", ";
    $query_str = $query_str . "Classification = " . $classification . ", ";
    $query_str = $query_str . "Source = " . $source . " ";

    $query_str = $query_str . "WHERE Accession = " . $accession . ";";

    return $query_str;
}

?>
