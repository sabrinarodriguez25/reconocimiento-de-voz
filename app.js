const boton=document.querySelector('.hablar');
const detenerboton=document.querySelector('.detener');
const contenido=document.querySelector('.contenido');
const cuadroTexto =document.querySelector('.cuadroTexto');

const ReconocerVoz= window.SpeechRecognition || window.webkitSpeechRecognition;

const reconocimiento= new ReconocerVoz();


reconocimiento.onstart = function(){
    console.log('El microfono está activo');
}

reconocimiento.onresult= function(event){
    const current= event.resultIndex;

    const transcribir=event.results[current][0].transcript;

    cuadroTexto.value +=transcribir + '\n';

    
}

reconocimiento.onend = function(){
    console.log('reconocimiento de voz finalizado');
}

reconocimiento.continuous = true;

const detenerReconocimiento = () => {
    reconocimiento.stop();
}

boton.addEventListener('click',()=>{
    
    reconocimiento.start();
});

detenerboton.addEventListener('click', () => {
    detenerReconocimiento();
});
