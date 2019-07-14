class Compara {
	constructor(codigoUm,codigoDois){
		this.codigoUm = codigoUm;
		this.codigoDois = codigoDois;
	}

	getCodigoUm(){
		return this.codigoUm;
	}

	getCodigoDois(){
		return this.codigoDois;
	}

	comparaCodigos(){
		var body = document.querySelector("#corpo");
		if (this.codigoUm == this.codigoDois){
			console.log("vaiio");
			body.classList.remove(".naoComparou");
			body.classList.add("iguais");
		} else {
			body.classList.add("diferentes");
		}
	}
}