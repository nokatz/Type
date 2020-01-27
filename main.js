

let text, typed; 
let textString, typedString = "", substring;

text = document.getElementById('text');
textString = text.textContent;

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
		}
	}	
	
}
