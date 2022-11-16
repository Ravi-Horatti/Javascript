// api url
const api_url =
	"https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=UTC&date=today";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data.results);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>sunrise</th>
		<th> SunSet</th>
		<th>FirstLight</th>
		<th>LastLight</th>
		<th>solar_noon</th>
		<th>goden_huur</th>
		</tr>`;
	
	// Loop to access all rows
	//for (let r of data) {
		tab += `<tr>
	<td> ${ data.sunrise }</td>
	<td> ${ data.sunset }</td>
	<td> ${ data.first_light }</td>
	<td> ${ data.last_light }</td>
	<td> ${ data.solar_noon }</td>
	<td> ${ data.golden_hour }</td>
</tr>`;
	//}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;


}
