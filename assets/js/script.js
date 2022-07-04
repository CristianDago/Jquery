// JavaScript Documento

precio = document.querySelector ("#precio").innerHTML
resultado = document.querySelector("#resultado")
cantidadTabla = document.querySelector ("#cantidadTabla")
selector = document.querySelector("#selector1")
colorSeleccion = document.querySelector("#colorSeleccion")




function calcular() {

cantidad = document.querySelector ("#cantidad").value
resultado.innerHTML = precio * cantidad
cantidadTabla.innerHTML = cantidad	
colorSeleccion.style.background = selector.value


}










	
