

let text, typed; 
let textString, typedString = "", substring;
let index = 0;

text = document.getElementById('text');
let strings = [];

readTextFile("/data/strings.txt", function(text){

	strings = text.split(/\r?\n/g);
    console.log(strings);
	refreshText(index);

});


typed = document.getElementById('typed');
typed.contentEditable = 'true';
typed.focus();


typed.addEventListener('keyup', typeKey);

function typeKey(e){
	
	typedString = typed.textContent;
	
	subString = textString.slice(0, typedString.length);

	checkText();
	
}

function checkText(){
	
	if(typedString !== subString){
		
		typed.style.color = "red";
		
	} else {
		
		typed.style.color = "black";
		
		if(typedString.length === textString.length){
			
			alert("Correct!");
			
			typed.textContent = "";
			
			if(index < strings.length - 1){
				index++;
			} else {
				index = 0;
			}
			
			refreshText(index);
		}
	}	
	
}

function refreshText(index){

	text.textContent = strings[index];
	textString = text.textContent;

}








