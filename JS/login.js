function go(){

	var spans = document.getElementsByTagName("span");
		while (spans.length>0) {
			spans[0].parentElement.removeChild(spans[0]);
		}
	var email = document.getElementsByName("login")[0].value;
	var password = document.getElementsByName("password")[0].value;
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (email== null || email.length == 0 || /^\s+$/.test(email)) {
		var span = document.createElement("span");
			span.setAttribute("class","removerSpan")
			span.innerHTML = "No has ingresado ningun correo";
		var spanId = document.getElementsByClassName("input")[0];	
		//console.log(spanId);
			spanId.appendChild(span);
	} else if (!re.test(email)) {
		var span2 = document.createElement("span");
		span2.setAttribute("class","removerSpan")
			span2.innerHTML = "El formato del correo electrónico no es válido";
		var span2Id= document.getElementsByClassName("input")[0];	
			span2Id.appendChild(span2);
	} if (password== null || password.length == 0 || /^\s+$/.test(password)) {
		var span3 = document.createElement("span");
		span3.setAttribute("class","removerSpan")
			span3.innerHTML = "No has ingresado ninguna contraseña";
		var span3Id = document.getElementsByClassName("input")[1];	
			span3Id.appendChild(span3);
	}
	if (password=='hola' && email=='florivonne.bg@gmail.com'){ 
        showLoader();
        myFunction();
    }else { 
        var span4 = document.createElement("span");
        span4.setAttribute("class","removerSpan")
			span4.innerHTML = "Porfavor ingrese, nombre de usuario y contraseña correctos";
		var span4Id = document.getElementsByClassName("input")[2];	
		//console.log(span4Id);
			span4Id.appendChild(span4);
    }
}
window.onload = function() {
	document.getElementById("loader").style.display = "none";
	var email = document.getElementsByName("login")[0];
	email.addEventListener("keyup",input);
	var password = document.getElementsByName("password")[0];
	password.addEventListener("keyup",input);
}
function input(ev) {
	//this.parentElement.remove(this.nextSibling);
	console.log(this.nextElementSibling);
	var spans4 = document.getElementById("span4").childNodes;
	console.log(span4.childNodes)
	if (!(this.nextElementSibling== null)) {
		this.nextElementSibling.remove();
	}
	if (spans4.length>0) {
		spans4[0].remove();
	}
	//span4.removeChild();
}
function myFunction() {
    var myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function showLoader() {
  document.getElementById("loader").style.display = "inline";
}