function dataViz(incomingData) {
	d3.select("body").selectAll("div.cities")
		.data(incomingData)
		.enter()
		.append("div")
		.attr("class","cities.csv")
		.html(function(d,i) {return d.label;});
}
function select_and_bind () {
	d3.csv("cities.csv", function(error, data) {dataViz(data);});	
}