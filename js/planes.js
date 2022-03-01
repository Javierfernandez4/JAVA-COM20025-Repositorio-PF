const planes = [{nombre:"Plan de alimentacion para bajo peso" , imagen:"desnutricion.jpg",},
                 {nombre:"Plan de alimentacion para peso saludable", imagen:"saludable.jpg"},
                 {nombre:"Plan de alimentacion para sobrepeso y obesidad", imagen:"obesidad.jpg"}];

                 class IMC {
                    constructor(planes) {
                        this.nombre= planes.nombre;
                        this.imagen= planes.imagen;
                   }
                   } 
                 
                 function guardarPlanes(planes) {
                    localStorage.setItem("planes", JSON.stringify(planes));
                    console.log("Los planes se guardaron correctamente!");
               }
               
                function cargarPlanes() {
                    console.log("Los planes se cargaron correctamente!");
                    return JSON.parse(localStorage.getItem("planes"));
               }
               
                guardarPlanes(planes);
                let planes_cargados = cargarPlanes()
               
                let contenido = "";
               
                for (let plan_cargado of planes) {
                    let imc = new IMC(plan_cargado);
                    contenido += "<div class='col-md-4 py-3'>";
                    contenido += "<div class='card'>";
                    contenido += "<h5 class=' card-title p-3 text-primary text-uppercase '>" + imc.nombre + "</h5>";
                    contenido += "<img src='media/" + imc.imagen + "' class='card-img-top' alt='" + imc.nombre + "'>";
                    contenido += "<div class='card-body'>";
                    contenido += "<div class='row mb-2'>";
                    contenido += "</div>";
                    contenido += "<div class='d-grid gap-2 mb-2'><a href='https://dietopro.com/blog/2018/02/18/recomendaciones-dieteticas-para-pacientes-con-bajo-peso-o-peso-insuficiente-aumento-de-peso-grasa-y-masa-muscular/' class='btn btn-primary'>Elegir</a></div>";
                    contenido += "</div>";
                    contenido += "</div>";
                   contenido += "</div>";
               }                
               let pagina_planes = document.getElementById("planes");
               pagina_planes.innerHTML = contenido;


         