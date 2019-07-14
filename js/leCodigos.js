var campoCodigoUm = document.querySelector("#codeOne");
var campoCodigoDois = document.querySelector("#codeTwo");
var body = document.querySelector("#corpo");

campoCodigoUm.addEventListener("keyup",function(e){
	body.className = "";
	var key = e.which || e.keyCode;
	if (key == 13){
		codigoUm = this.value;
		campoCodigoDois.focus();
	};
});

campoCodigoDois.addEventListener("keyup",function(e){
	var key = e.which || e.keyCode;
	if (key == 13){
		var codigoDois = this.value;
		campoCodigoUm.focus();
		this.value = "";
		campoCodigoUm.value = "";
		var codigos = new Compara(codigoUm,codigoDois);
		codigos.comparaCodigos();
	};
});

