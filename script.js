var estado ="";
var temperatura= Math.round(Math.random()*(40-15)+parseInt(15));
var humedad=Math.round(Math.random()*(100-10)+parseInt(10));
var ph=Math.round(Math.random()* (14 - 1)+ parseInt(1));
  
if (14<temperatura<=20){
    t="Temperatura Baja";
}
if (20<temperatura<=35)
{
    t="Temperatura Normal";
}
if (temperatura>35)
{
    t="Temperatura Alta";
}

if (10<humedad<=40){
    h="Humedad Baja";
}
if (40<humedad<=80)
{
    h="Humedad Normal";
}
if (humedad>80)
{
    h="Humedad Alta";
}
if(ph<7)
{
    phs="Ph acido ";
}

if(ph==7)
{
    phs="Ph neutro ";
}
if(ph>7)
{
    phs="Ph alcalino ";
}

// Función para generar el reporte de voz
function generarReporteVoz() {
    var reporte = `Estado del invernadero: ${t}, ${h}, ${phs}`;
    var msg = new SpeechSynthesisUtterance(reporte);
    msg.lang = 'pt-BR'; 
    window.speechSynthesis.speak(msg);
}

document.getElementById('hablar').onclick = () => generarReporteVoz('pt-BR');


document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
});

document.getElementById('datos').addEventListener("click",()=>{
    leer_datos(temperatura,humedad,ph);
    
});


function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

function leer_datos(temperatura, humedad){
    document.getElementById('temp').value=temperatura;
    document.getElementById('hume').value=humedad;
    document.getElementById('ph').value= ph;
    document.getElementById('texto').value="El invernadero tiene"+" "+t+" "+"y"+" "+h+ " y " + phs;
}
document.getElementById('datos').addEventListener('click', function() {
    // Recoge los datos del formulario
    var temp = document.getElementById('temp').value;
    var hume = document.getElementById('hume').value;
    var ph = document.getElementById('ph').value;

    // Guarda los datos en LocalStorage
    localStorage.setItem('temp', temp);
    localStorage.setItem('hume', hume);
    localStorage.setItem('ph', ph);

    alert('Datos guardados correctamente');
});