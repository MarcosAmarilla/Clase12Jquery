let doc = 0;
let nom = "";
let ape = "";
let mon = 0;
let tas = 0;
let pla = 0;
let tot = 0;
let cuo = 0;

$(document).ready( () => {

    function calcularTotal(monto,tasa,plazo) {
        let total = (monto + ((monto*tasa*plazo)/100));
        return total;
    }

    function calcularCuota (tot,pla) {
        let cuota = tot / pla;
        return cuota;
    }

    function mostrarInfo () {
        $('#mostrar').append(`<H2>El prestamo a nombre de ${nom} ${ape} </H2>
        <h3>Es por un monto de ${mon}, a devolver en un plazo de ${pla}</h3>
        <h3>El monto total es: ${tot.toFixed(2)} el valor de cada cuota es: ${cuo.toFixed(2)}</h3>`);
    }    


    function cargarDatos () {
        doc = $('#documento').val();
        nom = $('#nombre').val();
        ape = $('#apellido').val();
        mon = parseInt($('#monto').val());
        tas = parseFloat($('#tasa').val());
        pla = parseInt($('#plazo').val());
        tot = parseFloat(calcularTotal(mon,tas,pla));
        cuo = parseFloat(calcularCuota(tot,pla));
    }

    $('#cargarPrestamo').on('click',()=>{
        cargarDatos();
        mostrarInfo();
    })    

})
