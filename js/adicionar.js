let form = $("#nao_enviar")
const lista = []
let nome = $("ul li")

for(cadaNome of nome){ //busca todos os nomes já inseridos dentro do ul no index.html e joga na lista
    lista.push(cadaNome.innerText)
}

const adicionarElemento = () => { //adiciona um novo elemento no final de ul
    for (let index = 0; index < lista.length; index++) {
        $("ul").append(`<li>${lista[index]}</li>`)
    }
}

//quando o usuário clicar no botão, será adicionado o nome, digitado pelo usuário na lista
form.on("submit", (e) => { 
    $("ul").empty()
    nome = $("#ad_pessoa").val()
    e.preventDefault()
    alert("Adicionado com sucesso!")
    lista.push(nome)
    adicionarElemento()
    $("#ad_pessoa").val("")
    console.log(lista);
})

