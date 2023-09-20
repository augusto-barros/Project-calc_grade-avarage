const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado"> Aprovado </span>';
const spanReprovado = '<span class="resultado reprovado"> Reprovado </span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "))

let linhas = ' ';

form.addEventListener
('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
   
    atualizaTabela();

    atualizaMediaFinal(); 

})

function adicionaLinha() {

    const inputNomeDaAtividade = document.getElementById('nome-atividade');
    const inputNotaDaAtividade = document.getElementById('nota-atividade');
    
    if (atividades.includes(inputNomeDaAtividade.value)){
        alert(`A atividade ${inputNomeDaAtividade.value} já foi inserida!`)
    } 
    else {
        atividades.push(inputNomeDaAtividade.value);
        notas.push(parseFloat(inputNotaDaAtividade.value));


        let linha = '<tr>';
            linha += `<td>${inputNomeDaAtividade.value}</td>`
            linha += `<td> ${inputNotaDaAtividade.value}</td>`
            linha += `<td> ${inputNotaDaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`
            linha += '</tr>';

            linhas += linha;

        
        inputNomeDaAtividade.value = ' '
        inputNotaDaAtividade.value = ' '
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('mediaFinal').innerHTML = mediaFinal;

    const resultadoElement = document.getElementById('mediaFinalResultado');

    resultadoElement.innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

        return somaDasNotas / notas.length;
} 
