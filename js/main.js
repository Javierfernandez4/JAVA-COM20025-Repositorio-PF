

/*calculo IMC*/
class Paciente{
    constructor(id, nombre, apellido, peso, talla) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;    
        this.peso = peso;
        this.talla = talla;
     }
    calculoIMC() {
        let imcCalculado = this.peso/(this.talla*2);
        let imc = imcCalculado.toFixed(2);
        console.log ("Su IMC es  " + imc);
        return imc;    
        }



    valorarpeso(imc){
        let estado = "";
        
        if (imc < 18.5) {
        estado ="bajo peso";
        }
        else if (imc >=18.5 & imc <= 24.9){
            estado ="peso saludable"; 
        }
        
        else if(imc > 24.9){
            estado ="peso aumentado";
        
        }
     return estado;
    } 
}



let nombre = ""
let apellido = ""
let peso = ""
let talla = ""

/* let miFormulario = document.getElementById ("formulario");

miFormulario.addEventListener ("submit", calcularImc);
console.log(miFormulario);
function calcularImc (e){
    e.preventDefault();
    let datos = e.target
    console.log(datos)
    nombre = datos.children[1].value;
    console.log(nombre)
    apellido = datos.children[3].value;
    console.log(apellido)
    peso = datos.children[5].value;
    console.log(peso)
    talla= parseFloat (datos.children[7].value);
    console.log(talla)
    enfermedadpreexistente= datos.children[9].value;
    // Crear OBJETO paciente 
    let paciente = new Paciente (1, nombre, apellido, peso, talla);

    // Calcular IMC 
    let imc = paciente.calculoIMC();
    paciente.valorarpeso(imc)
    let estado = paciente.valorarpeso(imc);


    // Muestro el IMC en pantalla, para eso agregue un id en tu html "lista"
    const elemento = document.getElementById("lista");
    elemento.innerHTML=`
    <h2><span>Paciente</span></h2>
   <h3><p>Nombre ${nombre} <br> Apellido ${apellido} <br> Su IMC es ${imc} <br> Plan sugerido: ${estado}<br>Enfermedad preexistente: ${enfermedadpreexistente} <br></h3>
   `    
} */
/*Animacion simulador*/
$("body").prepend('<p id="p1">Simulador Nutricional</p>');
$("#p1").css("color", "white")
        .slideUp("slow")
        .slideDown("slow");




/*Validacion Formulario*/            
function Enviarformulario(){
    var nombre= document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var peso= document.getElementById('peso').value;
    var talla= document.getElementById('talla').value;
    var enfermedadpreexistente= document.getElementById('enfermedadpreexistente').value;
    var error= document.getElementById('error');

    if (nombre === null || nombre === ''){
        error.innerHTML = "Ingresa tu Nombre";
        return false;
    }
    if (apellido === null || apellido === ''){
        error.innerHTML = "Ingresa tu Apellido";
        return false;
    }
    if (peso === null || peso === ''){
        error.innerHTML = "Ingresa tu Peso";
        return false;
    }
    if (talla === null || talla === ''){
        error.innerHTML = "Ingresa tu Talla";
        return false;
    }
    error.innerHTML = "";
    // Crear OBJETO paciente 
    let paciente = new Paciente (1, nombre, apellido, peso, talla);

    // Calcular IMC 
    let imc = paciente.calculoIMC();
    paciente.valorarpeso(imc)
    let estado = paciente.valorarpeso(imc);


    // Muestro el IMC en pantalla, para eso agregue un id en tu html "lista"
    const elemento = document.getElementById("lista");
    elemento.innerHTML=`<h2><span>Paciente</span></h2>
    <h3><p>Nombre ${nombre} <br> Apellido ${apellido} <br> Su IMC es ${imc} <br> Plan sugerido: ${estado}<br>Enfermedad preexistente: ${enfermedadpreexistente} <br></h3>`;
    //document.getElementById("formulario").submit(); //Envío el Formulario
}

