function loadCharts(drawChart){
	google.load('visualization', '1', {'packages':['corechart','table','geochart'],"callback": drawChart});
	google.setOnLoadCallback(drawChart);
}

function drawLineChart(jsonData,element,title){
	var data = new google.visualization.DataTable(jsonData);
	console.log(data);
	var chart = new google.visualization.LineChart(document.getElementById(element));

	var options = {
		title: title,
		curveType: 'function',
		legend: { position: 'bottom' },
		width: '100%',
		height: 500,
	};
	chart.draw(data, options);
}

function drawTable(jsonData,element){
	var data = new google.visualization.DataTable(jsonData);
	var table = new google.visualization.Table(document.getElementById(element));
	table.draw(data, { width: '100%',height: 500});
}

function drawPieChart(jsonData,element,title){
	var data = new google.visualization.DataTable(jsonData);
	console.log(data);
	var geo = new google.visualization.PieChart(document.getElementById(element));

	var options = {
		title: title,
		legend: { position: 'right' },
		width: '100%',
		height:500,
		pieHole: 0.4,
	};
	geo.draw(data, options);
}

function drawMap(jsonData,element,title){
	var data = new google.visualization.DataTable(jsonData);
	console.log(data);
	var geo = new google.visualization.GeoChart(document.getElementById(element));

	var options = {
		title: title,
		legend: { position: 'bottom' },
		width: '100%',
		region: 'US',
		resolution: 'provinces'
	};
	geo.draw(data, options);
}