function enviarContacto(){
    const nombre = document.querySelector("#nombre")
    const apellido = document.querySelector("#apellido")
    const email = document.querySelector("#email")
    const mensaje = document.querySelector("#mensaje")
    const alerta = document.querySelector("#alerta-contacto")

    if(nombre.value == "" || nombre.value == undefined){
        alerta.innerHTML = `<div class="alert alert-danger" role="alert">
        ¡Inserte un nombre válido!
      </div>
        `
    }
    else if(apellido.value == "" || apellido.value == undefined){
        alerta.innerHTML = `<div class="alert alert-danger" role="alert">
        ¡Inserte un apellido válido!
      </div>
        `
    }
    else if(email.value == "" || email.value == undefined){
        alerta.innerHTML = `<div class="alert alert-danger" role="alert">
        ¡Inserte un email válido!
      </div>
        `
    }else{
        nombre.value = ""
        apellido.value = ""
        email.value = ""
        mensaje.value = ""
        alerta.innerHTML = `<div class="alert alert-success" role="alert">
        El mensaje fue enviado con éxito.
      </div>
      `
    }
}