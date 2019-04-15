// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "RAF - Respira Aire Frío",
    about: "Diseño de Emergencias, Taller Producto, 2018 ",

}, {
    figure: "media/foto-02.jpg",
    title: "Cruchó",
    about: "Reinventar la gastronomía chilena, Taller Producto, 2018",
}, {
    figure: "media/foto-03.jpg",
    title: "Luminaria",
    about: "Luminaria de Yeso, Estructura & Materiales, 2018 ",
}, {
    figure: "media/foto-04.jpg",
    title: "Maggi - Bases para hamburguesa",
    about: " Propuesta para 'Maggi ', Taller Calidad I, 2018" 
}, {
    figure: "media/foto-05.jpg",
    title: "Maggi - Twizz ",
    about: "Propuesta para 'Maggi ', Taller Calidad I, 2018",
}, {
    figure: "media/foto-06.jpg",
    title: "MAEZ",
    about: "Diseño de logo y etiquetas para emprendimiento, Taller Calidad I, 2018",
}, {
    figure: "media/foto-07.jpg",
    title: "Patiperros",
    about: "Diseño de aplicación para fomentar el turismo en Melipeuco, Taller Calidad I, 2018",

 }, {
    figure: "media/foto-08.jpg",
    title: "Estructura de Madera",
    about: "Intervención de espacios públicos, Lab.Modelos y Prototipos, 2016",
}




]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
