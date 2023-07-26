const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "explosivos": {
        "ataque": 41,
        "defesa": 10,
        "energia": -21,
        "velocidade": 0
    },

    "municao": {
        "ataque": 23,
        "defesa": 5,
        "energia": -5,
        "velocidade": 0
    },
    "blindagem":{
        "ataque": 0,
        "defesa": 39,
        "energia": 0,
        "velocidade": -27
    },
    "combustivel":{
        "ataque": 0,
        "defesa": 0,
        "energia": +47,
        "velocidade": -10
    },
    "esteira":{
        "ataque": 15,
        "defesa": 15,
        "energia": -19,
        "velocidade": +25
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        if (evento.target.textContent === "+") {
            atualizaEstatisticamais(evento.target.dataset.peca)
        } else{
            atualizaEstatisticamenos(evento.target.dataset.peca)
        }
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticamais(peca) {
    estatistica.forEach( (elemento ) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}

function atualizaEstatisticamenos(peca) {
    estatistica.forEach( (elemento ) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
    })
}