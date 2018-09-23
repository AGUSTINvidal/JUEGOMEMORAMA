          
        /*  var imagenes = new Array(6);

 window.onload = cargarImagenes;

    function cargarImagenes() {
          document.getElementById("accion").addEventListener("click", displayDate);
    imagenes[cartas] = new Image();
        imagenes[cartas].src = "images/" + cartas + ".jpg";
        cartas++;
        if (cartas < 6) {
            imagenes[cartas - 1].onload = cargarImagenes;
        } else {
            imagenes[cartas - 1].onload = iniciar;
        }

    }*/
    function changeImage() {
    var image = document.getElementById('myImage');
    if (image.images.match("on")) {
        image.images = "0.jpg";
    } else {
        image.images = "4.jpg";
    }
}

    //document.getElementById("accion").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
    document.getElementById("demo2").innerHTML = Date();
    document.getElementById("demo3").innerHTML = Date();
    document.getElementById("demo4").innerHTML = Date();


}
function cargaContextoCanvas(idCanvas){
   var elemento = document.getElementById(idCanvas);
   if(elemento && elemento.getContext){
      var contexto = elemento.getContext('2d');
      if(contexto){
         return contexto;
      }
   }
   return FALSE;
}


window.onload = function(){
   //Recibimos el elemento canvas
   var ctx = cargaContextoCanvas('micanvas');
   if(ctx){
      //Creo una imagen conun objeto Image de Javascript
      var img = new Image();
      //indico la URL de la imagen
      img.src = "images/"+"2.jpg";
      //defino el evento onload del objeto imagen
      img.onload = function(){
         //incluyo la imagen en el canvas
         ctx.drawImage(img, 10, 10);
      }
   }
}
    