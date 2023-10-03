const form = document.getElementById('valores');

function validarFormulario(valorA, valorB){
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let valores
    e.preventDefault();

    const valorA = document.getElementById('valorA').value;
    const valorB = document.getElementById('valorB').value;
    const mensagemSucesso = `É valido, o valor B ${valorB} é mior que o valor A: ${valorA}`;

    formEValido = validarFormulario(valorA, valorB)
    if (formEValido) {
        alert(menssagemSucesso);

        valorA.value = '';
        valorB.value = '';

    }else if  (valorB == valorA) {
        alert("não é valido pois B é igual a A");
    }else {
        alert("Não é valido pois A é maior que B");
    }
})

console.log(form);