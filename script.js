document
.getElementById("formulario")
.addEventListener("submit", function(event){

    let nombre =
    document.getElementById("nombre").value.trim();

    let correo =
    document.getElementById("correo").value.trim();

    let mensaje =
    document.getElementById("mensaje").value.trim();

    if(nombre === ""){

        event.preventDefault();

        alert("Debe ingresar su nombre.");

        return;
    }

    if(correo === ""){

        event.preventDefault();

        alert("Debe ingresar su correo.");

        return;
    }

    if(mensaje === ""){

        event.preventDefault();

        alert("Debe ingresar un mensaje.");

        return;
    }

    alert("Formulario validado correctamente. Se enviará los datos de la consulta al correo.");

});