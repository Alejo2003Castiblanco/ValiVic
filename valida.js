function validar(){
    var user=document.getElementById("usuario");
    var contra=document.getElementById("clave");
    var conta=0;
    var gena=document.getElementsByName("gena")

    if(user.value == null || user.value==""){
            alert("Es necesario ingresar su usuario");
            return false;
        }
        else{
            if(contra.value== null || contra.value==""){
            alert("Ingrese su documento para continuar con la compra del tiquete");
            return false;
            }
            for(i=0; i<gena.length;i++){
                if(gena.item(i).checked==false){
                    conta=conta+1;
                }
            }
            if(conta==gena.length){
                alert("Por favor seleccione SI o NO para continuar con la compra del tiquete")
                return false;
            }
            else{
                alert("Datos correctos bienvenido");
                return true;
            }
        }
    
}
    

function validacion(){
    var canti =document.getElementById('peso');
    var men = document.getElementById("ciudad");
    var contador=0;
    var ElCorreo = document.getElementById('Correo');
    if(canti.value <=0 || canti.value >50){
        alert("Por favor ingrese un peso valido")
    }

    
    if(men.value == null || men.value == ""){
        alert("Por favor seleccione su destino de viaje");
        document.getElementById("ciudad")
        return false;
    } else{
        document.getElementById("ciudad")
    }

    for(i=0; i<genero.length;i++){
        if(genero.item(i).checked==false){
            contador=contador+1;
        }
    }
    if(contador==genero.length){
        alert("Por favor seleccione su genero")
        return false;
    }
    var ValidaCorreos = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( ValidaCorreos.test(ElCorreo.value) ){
        alert('Correo Electrónico Válido');
        return true;
    }else{
        alert('Por favor ingrese un correo electronico valido');
        return false;
    }
}

function mostar(input){
    var img=document.getElementById("img")
    if(input.value =="Ocultar"){
        img.style.visibility="hidden";
        input.value="Mostrar"
    }else{
        img.style.visibility="Visible"
        input.value="Ocultar"
    }
}