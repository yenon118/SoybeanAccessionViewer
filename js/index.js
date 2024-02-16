
// Convert a json object to a csv string
function convertJsonToCsv(jsonObject) {
	let csvString = '';
	let th_keys = Object.keys(jsonObject[0]);
	for (let i = 0; i < th_keys.length; i++) {
		th_keys[i] = "\"" + th_keys[i] + "\"";
	}
	csvString += th_keys.join(',') + '\n';
	for (let i = 0; i < jsonObject.length; i++) {
		let tr_keys = Object.keys(jsonObject[i]);
		for (let j = 0; j < tr_keys.length; j++) {
			csvString += ((jsonObject[i][tr_keys[j]] === null) || (jsonObject[i][tr_keys[j]] === undefined)) ? '\"\"' : "\"" + jsonObject[i][tr_keys[j]] + "\"";
			if (j < (tr_keys.length - 1)) {
				csvString += ',';
			}
		}
		csvString += '\n';
	}
	return csvString;
}


// Create and download a csv file
function createAndDownloadCsvFile(csvString, filename) {
	let dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvString);
	let downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href", dataStr);
	downloadAnchorNode.setAttribute("download", filename + ".csv");
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}


function createForm(formMethod, formAction) {
	// Create a form
	let new_form = document.createElement("form");
	new_form.setAttribute("method", formMethod);
	new_form.setAttribute("action", formAction);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for Accession
	var label_Accession = document.createElement("label");
	label_Accession.innerHTML = "Accession: ";
	label_Accession.style.marginLeft = "20px";
	var input_Accession = document.createElement("input");
	input_Accession.id = "Accession";
	input_Accession.name = "Accession";
	input_Accession.type = "text";
	input_Accession.size = 50;
	new_form.append(label_Accession);
	new_form.append(input_Accession);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for SoyKB_Accession
	var label_SoyKB_Accession = document.createElement("label");
	label_SoyKB_Accession.innerHTML = "SoyKB_Accession: ";
	label_SoyKB_Accession.style.marginLeft = "20px";
	var input_SoyKB_Accession = document.createElement("input");
	input_SoyKB_Accession.id = "SoyKB_Accession";
	input_SoyKB_Accession.name = "SoyKB_Accession";
	input_SoyKB_Accession.type = "text";
	input_SoyKB_Accession.size = 50;
	new_form.append(label_SoyKB_Accession);
	new_form.append(input_SoyKB_Accession);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for GRIN_Accession
	var label_GRIN_Accession = document.createElement("label");
	label_GRIN_Accession.innerHTML = "GRIN_Accession: ";
	label_GRIN_Accession.style.marginLeft = "20px";
	var input_GRIN_Accession = document.createElement("input");
	input_GRIN_Accession.id = "GRIN_Accession";
	input_GRIN_Accession.name = "GRIN_Accession";
	input_GRIN_Accession.type = "text";
	input_GRIN_Accession.size = 50;
	new_form.append(label_GRIN_Accession);
	new_form.append(input_GRIN_Accession);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for SRA_Name
	var label_SRA_Name = document.createElement("label");
	label_SRA_Name.innerHTML = "SRA_Name: ";
	label_SRA_Name.style.marginLeft = "20px";
	var input_SRA_Name = document.createElement("input");
	input_SRA_Name.id = "SRA_Name";
	input_SRA_Name.name = "SRA_Name";
	input_SRA_Name.type = "text";
	input_SRA_Name.size = 50;
	new_form.append(label_SRA_Name);
	new_form.append(input_SRA_Name);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for Taxonomy
	var label_Taxonomy = document.createElement("label");
	label_Taxonomy.innerHTML = "Taxonomy: ";
	label_Taxonomy.style.marginLeft = "20px";
	var select_Taxonomy = document.createElement("select");
	select_Taxonomy.id = "Taxonomy";
	select_Taxonomy.name = "Taxonomy";
	var option_Taxonomy = document.createElement("option");
	option_Taxonomy.value = "Glycine max";
	option_Taxonomy.innerHTML = "Glycine max";
	select_Taxonomy.append(option_Taxonomy);
	var option_Taxonomy = document.createElement("option");
	option_Taxonomy.value = "Glycine soja";
	option_Taxonomy.innerHTML = "Glycine soja";
	select_Taxonomy.append(option_Taxonomy);
	new_form.append(label_Taxonomy);
	new_form.append(select_Taxonomy);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for State
	var label_State = document.createElement("label");
	label_State.innerHTML = "State: ";
	label_State.style.marginLeft = "20px";
	var input_State = document.createElement("input");
	input_State.id = "State";
	input_State.name = "State";
	input_State.type = "text";
	input_State.size = 50;
	new_form.append(label_State);
	new_form.append(input_State);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for Country
	var label_Country = document.createElement("label");
	label_Country.innerHTML = "Country: ";
	label_Country.style.marginLeft = "20px";
	var input_Country = document.createElement("input");
	input_Country.id = "Country";
	input_Country.name = "Country";
	input_Country.type = "text";
	input_Country.size = 50;
	new_form.append(label_Country);
	new_form.append(input_Country);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for Maturity_Group
	var label_Maturity_Group = document.createElement("label");
	label_Maturity_Group.innerHTML = "Maturity_Group: ";
	label_Maturity_Group.style.marginLeft = "20px";
	var input_Maturity_Group = document.createElement("input");
	input_Maturity_Group.id = "Maturity_Group";
	input_Maturity_Group.name = "Maturity_Group";
	input_Maturity_Group.type = "number";
	input_Maturity_Group.size = 50;
	new_form.append(label_Maturity_Group);
	new_form.append(input_Maturity_Group);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for Improvement_Status
	var label_Improvement_Status = document.createElement("label");
	label_Improvement_Status.innerHTML = "Improvement_Status: ";
	label_Improvement_Status.style.marginLeft = "20px";
	var select_Improvement_Status = document.createElement("select");
	select_Improvement_Status.id = "Improvement_Status";
	select_Improvement_Status.name = "Improvement_Status";
	var option_Improvement_Status = document.createElement("option");
	option_Improvement_Status.value = "Genetic";
	option_Improvement_Status.innerHTML = "Genetic";
	select_Improvement_Status.append(option_Improvement_Status);
	var option_Improvement_Status = document.createElement("option");
	option_Improvement_Status.value = "Landrace";
	option_Improvement_Status.innerHTML = "Landrace";
	select_Improvement_Status.append(option_Improvement_Status);
	var option_Improvement_Status = document.createElement("option");
	option_Improvement_Status.value = "Elite";
	option_Improvement_Status.innerHTML = "Elite";
	select_Improvement_Status.append(option_Improvement_Status);
	var option_Improvement_Status = document.createElement("option");
	option_Improvement_Status.value = "G. soja";
	option_Improvement_Status.innerHTML = "G. soja";
	select_Improvement_Status.append(option_Improvement_Status);
	new_form.append(label_Improvement_Status);
	new_form.append(select_Improvement_Status);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for Classification
	var label_Classification = document.createElement("label");
	label_Classification.innerHTML = "Classification: ";
	label_Classification.style.marginLeft = "20px";
	var select_Classification = document.createElement("select");
	select_Classification.id = "Classification";
	select_Classification.name = "Classification";
	var option_Classification = document.createElement("option");
	option_Classification.value = "Other";
	option_Classification.innerHTML = "Other";
	select_Classification.append(option_Classification);
	var option_Classification = document.createElement("option");
	option_Classification.value = "NA Cultivar";
	option_Classification.innerHTML = "NA Cultivar";
	select_Classification.append(option_Classification);
	var option_Classification = document.createElement("option");
	option_Classification.value = "NA Ancestor";
	option_Classification.innerHTML = "NA Ancestor";
	select_Classification.append(option_Classification);
	new_form.append(label_Classification);
	new_form.append(select_Classification);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create an input element for Source
	var label_Source = document.createElement("label");
	label_Source.innerHTML = "Source: ";
	label_Source.style.marginLeft = "20px";
	var input_Source = document.createElement("input");
	input_Source.id = "Source";
	input_Source.name = "Source";
	input_Source.type = "text";
	input_Source.size = 50;
	new_form.append(label_Source);
	new_form.append(input_Source);

	var br = document.createElement("br");
	new_form.append(br);
	var br = document.createElement("br");
	new_form.append(br);

	// Create a submit button
	var submit_button = document.createElement("input");
	submit_button.type = "submit";
	submit_button.value = "Submit";
	submit_button.style.marginLeft = "20px";
	submit_button.style.marginRight = "20px";
	submit_button.style.marginTop = "20px";
	submit_button.style.marginBottom = "20px";
	submit_button.style.float = "right";
	submit_button.style.clear = "both";
	new_form.append(submit_button);

	// Return the new form
	return new_form;
}


function addARecord() {
	// Open modal
	document.getElementById("info-modal").style.display = "block";

	var new_form = createForm("post", "./php/createARecord.php");

	document.getElementById('modal-content-div').appendChild(new_form);

	var paragraph = document.createElement("p");
	paragraph.innerHTML = "* Accession cannot be empty in order to add/update a record.";
	paragraph.style.color = "red";

	document.getElementById("modal-content-comment").appendChild(paragraph);
}


function downloadAllRecords() {
	$.ajax({
		url: './php/retrieveAllRecords.php',
		type: 'GET',
		contentType: 'application/json',
		success: function (response) {
			var res = JSON.parse(response);
			var res = res.data;

			// Download results
			if (res.length > 0) {
				let csvString = convertJsonToCsv(res);
				createAndDownloadCsvFile(csvString, "Soybean_accession_data");
			} else {
				alert("Data is not downloadable!!!");
			}
		},
		error: function (xhr, status, error) {
			console.log('Error with code ' + xhr.status + ': ' + xhr.statusText);
		}
	});
}


function deleteARecord(accession) {
	let text = "Are you sure you want to delete this record?";
	if (confirm(text) == true) {
		$.ajax({
			url: './php/deleteARecord.php',
			type: 'GET',
			contentType: 'application/json',
			data: {
				Accession: accession
			},
			success: function (response) {
				window.open("/SoybeanAccessionViewer/", "_self");
			},
			error: function (xhr, status, error) {
				console.log('Error with code ' + xhr.status + ': ' + xhr.statusText);
			}
		});
	}
}


async function retrieveARecord(accession) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: './php/retrieveARecord.php',
			type: 'GET',
			contentType: 'application/json',
			data: {
				Accession: accession
			},
			success: function (response) {
				var res = JSON.parse(response);
				res = res.data;

				resolve(res);
			}, error: function (xhr, status, error) {
				console.log('Error with code ' + xhr.status + ': ' + xhr.statusText);
				reject([]);
			}
		});
	});
}


async function updateARecord(accession) {
	// Open modal
	document.getElementById("info-modal").style.display = "block";

	var new_form = createForm("post", "./php/updateARecord.php");

	document.getElementById('modal-content-div').appendChild(new_form);

	var paragraph = document.createElement("p");
	paragraph.innerHTML = "* Accession cannot be empty in order to add/update a record.";
	paragraph.style.color = "red";

	document.getElementById("modal-content-comment").appendChild(paragraph);

	// Retrieve the record
	var result = await retrieveARecord(accession);
	result = result[0];

	// Get all the input elements
	let input_Accession = document.getElementById("Accession");
	let input_SoyKB_Accession = document.getElementById("SoyKB_Accession");
	let input_GRIN_Accession = document.getElementById("GRIN_Accession");
	let input_SRA_Name = document.getElementById("SRA_Name");
	let select_Taxonomy = document.getElementById("Taxonomy");
	let input_State = document.getElementById("State");
	let input_Country = document.getElementById("Country");
	let input_Maturity_Group = document.getElementById("Maturity_Group");
	let select_Improvement_Status = document.getElementById("Improvement_Status");
	let select_Classification = document.getElementById("Classification");
	let input_Source = document.getElementById("Source");

	// Set the values onto the input elements
	input_Accession.value = result.Accession;
	input_SoyKB_Accession.value = result.SoyKB_Accession;
	input_GRIN_Accession.value = result.GRIN_Accession;
	input_SRA_Name.value = result.SRA_Name;
	select_Taxonomy.value = result.Taxonomy;
	input_State.value = result.State;
	input_Country.value = result.Country;
	input_Maturity_Group.value = result.Maturity_Group;
	select_Improvement_Status.value = result.Improvement_Status;
	select_Classification.value = result.Classification;
	input_Source.value = result.Source;
}
