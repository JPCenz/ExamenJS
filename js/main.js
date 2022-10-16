
var formularioExamen = document.formularioExamen;
var datos = document.getElementById("Datos");

datos.innerHTML = `
<p></p>
<h2>Resultados</h2>

`;

document.addEventListener("submit",function(event){
    let nombre = formularioExamen.nombre.value;
    let apellido = formularioExamen.apellido.value;
    let lugar = formularioExamen.lugar.value;
    let sexo = formularioExamen.sexo.value;
    let altura = formularioExamen.altura.value;

    datos.innerHTML = `
    <h2>Nombre: ${nombre}</h2>
    <h2>Apellido: ${apellido} </h2>
    <h2>Lugar de Nacimiento: ${lugar} </h2>
    <h2>Sexo: ${sexo} </h2>
    <h2>Altura: ${altura} </h2>
    `;
    if (lugar.toLowerCase() == 'lima') {
        datos.innerHTML +=`
        <h3>Usted vive en la capital </h3>
        `;
    } else {
        datos.innerHTML +=`
        <h3>Usted vive en provincia </h>
        ` ;      
    };
    if (sexo == 'Masculino') {
        if (altura < 170) {
            datos.innerHTML +=`
            <h3>Es una persona baja </h3>
            `;
        } else {
            datos.innerHTML +=`
            <h3>Es una persona alta </h3>
            `;         
        };
    } else {
        if (altura < 165) {
            datos.innerHTML +=`
            <h3>Es una persona baja </h3>
            `;
        } else {
            datos.innerHTML +=`
            <h3>Es una persona alta </h3>
            `;         
        };        
    };
});



// Realizar una página WEB en la cual se tenga la información básica del estudiante (nombre, apellido, sexo, lugar de nacimiento),
// valide si el lugar de nacimiento es capital o provincia,
// valide si es alt@ o baj@ (mujer = 165, hombre = 170).
