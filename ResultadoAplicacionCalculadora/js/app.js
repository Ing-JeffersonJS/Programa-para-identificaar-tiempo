console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let operandoC = forma['operandoC'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value) + parseInt(operandoC.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Tiempo en la Policia: ${resultado}`;
    console.log(`Tiempo en la Policia: ${resultado}`);
}