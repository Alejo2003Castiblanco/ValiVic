function validar(){
    var men = document.getElementById("ciudad");
        if(men.value == null || men.value == ""){
            alert("Por favor seleccione su destino de viaje");
            document.getElementById("ciudad")
            return false;
        } else{
            document.getElementById("ciudad")
        }
     var contador=0;
    var genero=document.getElementsByName("gen")
        for(i=0; i<genero.length;i++){
            if(genero.item(i).checked==false){
                contador=contador+1;
            }
        }
        if(contador==genero.length){
            alert("Por favor seleccione su opinión")
            return false;
        }
    var user=document.getElementById("usuario");
    var contra=document.getElementById("clave");
    if(user.value == null || user.value==""){
            alert("Es necesario ingresar su usuario");
            return false;
        }
        else{
            if(contra.value== null || contra.value==""){
            alert("Ingrese su contraseña para ingresar");
            return false;
            }
            else{
                alert("Datos correctos bienvenido");
                return true;
            }
        }
    }