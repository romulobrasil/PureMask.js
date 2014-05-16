var cars = document.querySelector(".data");

var maskForm = cars.dataset.mask;
var tam = maskForm.length;
cars.maxLength = tam;
console.log("maskForm: " + maskForm);

//var cars2 = document.getElementById("cars");
var e = cars.value.length;
console.log("e: " + e);
    
cars.addEventListener('keydown', function (e){
	
	if (e.keyCode === 8 || e.keyCode === 46) {
        console.log("Apertou Backspace ou DEL");
    } else {
        formatar(maskForm);
    }
	
});
 
 function formatar(mask){
    var cars2 = document.querySelector(".data");;

    var i = cars2.value.length;

    var saida = mask.substring(0,1);
    var texto = mask.substring(i)

    console.log("i: " + i);
    console.log("mask: " + mask);
    console.log("saida: " + saida);
    console.log("texto: " + texto);

    if (texto.substring(0,1) != saida) {
        cars2.value += texto.substring(0,1);
    }
}
