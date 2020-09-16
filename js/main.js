var valor;
var resultado;

function botao(num) {
    valor = document.calcular.tela.value += num; 
}

function calcule(){
    resultado = eval(valor);
    document.calcular.tela.value = resultado.toLocaleString('pt-br');
}