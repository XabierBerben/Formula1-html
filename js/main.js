//codigo, nombre, apellidos, dni, email, telefono
var pilotos = [
    {"codigo":1,"nombre":"sergio","apellidos":"aparicio vegas","nacionalidad":"44974398z","email":"xxxxx@xxx.xx","telefono":"+3494"},
    {"codigo":2,"nombre":"maite","apellidos":"monasterio herrero","nacionalidad":"16071559x","email":"xxxxx@xxx.xx","telefono":"+3494"},
    {"codigo":3,"nombre":"jorge","apellidos":"manso rodriguez","nacionalidad":"16412750e","email":"xxxxx@xxx.xx","telefono":"+3494"}
    ];
$.noConflict();
jQuery(document).ready(function($) {
    // Code that uses jQuery's $ can follow here.
    
    $("#listadoPilotos div a:last-child").click(borrarVarios);

    $("#tablaPilotos tbody").on("click","td:last-child button:last-child",function(){
        //alert("has pulsado el boton de borrado");
        var codigo = $(this).parents("tr").find("input[type=checkbox]").val();
        //Llamar al REST para Borrar
        //
        // alert(codigo);
        //borra la tupla del boton que se ha seleccionado
        $(this).parents("tr").remove();
    });


    $("#tablaPilotos tbody").on("click","td:last-child button:first-child",function(){
        //alert("has pulsado el boton de actualizar");
        var codigo = $(this).parents("tr").find("input[type=checkbox]").val();
        //Llamar al REST para el GetById
        var nombre = $(this).parents("tr").find("td:nth-child(2)").text();
    });

    $("#borrartodos").click(function (event) {
        //attr ---> cambios de atributos
        // prop --> propiedades
        // is ----> validacion booleana
        if($(this).is(":checked")){
            $("tbody input[type=checkbox]").prop("checked",true);
            //
            //checked = checked
            //selected= selected
            //
        }else{
            $("tbody input[type=checkbox]").prop("checked",false);
        }


    });


    function borrarVarios() {
        //recoger los checksboxes marcados
        $("#tablaPilotos tbody input:checked").each(function () {
            var codigo = $(this).val();
            //Llamar al REST
            $(this).parents("tr").remove();
            //actualizar el nº de alumnos

        });

    }
    cargarArrayPilotos();
    function cargarArrayPilotos() {
        //recorrer el array
        if (pilotos.length > 0) {
            for(var i = 0; i < pilotos.length; i++) {
                console.log(pilotos[i]);
                var codigo = pilotos[i].codigo;
                var nombre = pilotos[i].nombre;
                var apellidos = pilotos[i].apellidos;
                var nacionalidad = pilotos[i].nacionalidad;
                var dni = pilotos[i].dni;
                var htmlEdit ="<button>Editar</button>";
                var htmlDelete ="<button>Borrar</button>";

                var texto = "<tr><td><input type='checkbox' value='" + codigo + "'></td><td>"+nombre+"</td><td>"+apellidos+"</td><td>"+dni+"</td><td>"+email+"</td><td>"+htmlEdit+htmlDelete+"</td></tr>";
                //añadir el html correspondiente a la página
                $("#tablaPilotos tbody").append(texto);
                //-->
            }
            $("#tablaPilotos tfoot td").html("<span class='text-error'>Total pilotos:"+pilotos.length,10+"</span>");
        }else{
            $("#tablaPilotos").remove();
            $("#listadoPilotos").text("No se han encontrado alumnos")
        }
    }
});

