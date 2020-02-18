
// let strings = [
	// "First, type this sentence.", 
	// "Then type this second one...", 
	// "The third will be easy.", 
	// "But fourth is long and difficult, so be careful.", 
	// "Rest a little with this fifth and final sentence."
// ];

function readTextFile(file, callback) {
	
    var rawFile = new XMLHttpRequest();
    
	rawFile.overrideMimeType("text/plain");
    
	rawFile.open("GET", file, true);
    
	rawFile.onreadystatechange = function() {
    
		if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
	
    rawFile.send(null);

}

