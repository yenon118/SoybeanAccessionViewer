<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<?php
$TITLE = "Soybean Accession Viewer";

// include '../header.php';
include '../config.php';
include './php/pdoResultFilter.php';
include './php/getDataQueryString.php';
?>

<link rel="stylesheet" href="css/modal.css" />

<!-- Back button -->
<a href="/"><button> &lt; Back </button></a>

<br />
<br />

<!-- Modal -->
<div id="info-modal" class="info-modal">
	<!-- Modal content -->
	<div class="modal-content">
		<span class="modal-close">&times;</span>
		<div id="modal-content-div" style='width:100%; height:auto; border:3px solid #000; overflow:scroll; max-height:1000px;'></div>
		<div id="modal-content-comment"></div>
	</div>
</div>


<!-- Get and process the variables -->
<?php

$db = "soykb";
$table = "aview_Soybean_Accession_Mapping";

?>


<!-- Query data from database and render data-->
<?php

// Generate query string
$query_str = getDataQueryString(
	$db,
	$table,
	""
);

// Query data
$stmt = $PDO->prepare($query_str);
$stmt->execute();
$result = $stmt->fetchAll();

// Process result array
$result_arr = pdoResultFilter($result);

// Add data button
echo "<div style=\"margin-bottom:10px;\" align=\"center\">";
echo "<button type=\"button\" style=\"background-color: #DDFFDD;\" onclick=\"addARecord()\">Add A Record</button>";
echo "<button type=\"button\" style=\"background-color: #FFFFFF; margin-left: 20px;\" onclick=\"downloadAllRecords()\">Download</button>";
echo "</div>";

// Make table to display data
echo "<div>";

// Table: Table start
echo "<table style='text-align:center;'>";

// Table: Table header
echo "<tr>";
echo "<th></th>";
echo "<th></th>";
echo "<th style=\"border:1px solid black; min-width:50px;\">Index</th>";
foreach ($result_arr[0] as $key => $value) {
	echo "<th style=\"border:1px solid black; min-width:50px;\">" . $key . "</th>";
}
echo "</tr>";

// Table: Table body
for ($i = 0; $i < count($result_arr); $i++) {
	$tr_bgcolor = ($i % 2 ? "#FFFFFF" : "#DDFFDD");
	echo "<tr bgcolor=\"" . $tr_bgcolor . "\">";
	// Delete data button
	echo "<td><button type=\"button\" style=\"background-color: #FF6666;\" value=\"" . $result_arr[$i]["Accession"] . "\" onclick=\"deleteARecord('" . $result_arr[$i]["Accession"] . "')\">Delete</button></td>";
	// Edit data button
	echo "<td><button type=\"button\" style=\"background-color: #99CCFF;\" value=\"" . $result_arr[$i]["Accession"] . "\" onclick=\"updateARecord('" . $result_arr[$i]["Accession"] . "')\">Edit</button></td>";
	// Index, which is the loop counter here
	echo "<td>" . ($i + 1) . "</td>";
	foreach ($result_arr[$i] as $key => $value) {
		echo "<td>" . $value . "</td>";
	}
	echo "</tr>";
}

// Table: Table end
echo "</table>";
echo "</div>";

// Empty lines
echo "<br />";
echo "<br />";

?>


<script type="text/javascript" language="javascript" src="./js/modal.js"></script>
<script type="text/javascript" language="javascript" src="./js/index.js"></script>

<?php include '../footer.php'; ?>
