const datos = leerArchivoTxt('../dummyData.txt');

let datosJson = datos.map(d => {
    return {
        id: d[0].trim(),
        nombre: d[1].trim(),
        puntaje: d[2].trim(),
        apartamento: d[3].trim()
    }
})
let idAsc = true;
let nombreAsc = false;
let puntajeAsc = false;
let apartamentoAsc = false


$(document).ready(
    function () {
        mostrarDatos()
    }
)

function mostrarDatos(){
    $("#propietarios-data").empty()
    datosJson.forEach(d => {
        let tr = `<tr>
        <td class="table-item"> ${d.id}</td> 
        <td class="table-item"> ${d.nombre}</td>
        <td class="table-item"> ${d.puntaje}</td>
        <td class="table-item"> ${d.apartamento}</td>
        `
        $("#propietarios-data").append(tr)
    })
}

$("#btn-id").on("click", () => {
    datosJson.sort((a, b) => {
        nombreAsc = false;
        puntajeAsc = false;
        apartamentoAsc = false
        return (idAsc) ? b.id - a.id : a.id - b.id
    })
    idAsc = !idAsc
    mostrarDatos()
})

$("#btn-nombre").on("click", () => {
    datosJson.sort((a, b) => {
        idAsc = false;
        puntajeAsc = false;
        apartamentoAsc = false
        if(nombreAsc){
            if (a.nombre > b.nombre) {
                return 1;
              }
              if (a.nombre < b.nombre) {
                return -1;
              }
              // a must be equal to b
              return 0;
        }else{
            if (a.nombre > b.nombre) {
                return -1;
              }
              if (a.nombre < b.nombre) {
                return 1;
              }
              // a must be equal to b
              return 0;
        }
    })
    nombreAsc = !nombreAsc
    mostrarDatos()
})

$("#btn-puntaje").on("click", () => {
    datosJson.sort((a, b) => {
        idAsc = false;
        nombreAsc = false;
        apartamentoAsc = false
        return (puntajeAsc) ? b.puntaje - a.puntaje : a.puntaje - b.puntaje
    })
    puntajeAsc = !puntajeAsc
    mostrarDatos()
})

$("#btn-apartamento").on("click", () => {
    datosJson.sort((a, b) => {
        nombreAsc = false;
        puntajeAsc = false;
        idAsc = false
        return (apartamentoAsc) ? b.apartamento - a.apartamento : a.apartamento - b.apartamento
    })
    apartamentoAsc = !apartamentoAsc
    mostrarDatos()
})


function leerArchivoTxt(archivo) {

    const fs = new XMLHttpRequest();
    let dataArray = [];
    let newData = []

    fs.open("GET", archivo, false);
    fs.send(null)
    let txt = fs.responseText;

    data = txt.split(/\r\n|\r|\n/, -1)
    console.log(data)
    data.forEach(d => {
        newData.push(d.split("#"))
    });
    console.log(newData)
    return newData
}