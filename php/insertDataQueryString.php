<?php

function insertDataQueryString($db, $table, $accession, $soykb_accession, $grin_accession, $sra_name, $taxonomy, $state, $country, $maturity_group, $improvement_status, $classification, $source)
{

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
    $query_str = "INSERT INTO " . $db . "." . $table . " (Accession, SoyKB_Accession, GRIN_Accession, SRA_Name, Taxonomy, State, Country, Maturity_Group, Improvement_Status, Classification, Source) ";
    $query_str = $query_str . "VALUES (" . $accession . ", " . $soykb_accession . ", " . $grin_accession . ", " . $sra_name . ", " . $taxonomy . ", " . $state . ", " . $country . ", " . $maturity_group . ", " . $improvement_status . ", " . $classification . ", " . $source . ");";


    return $query_str;
}

?>
