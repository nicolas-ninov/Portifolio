/*
    Objetivo - Quando clicar na aba, deve-se mostar o conteúdo da aba que foi clicada e esconder o conteúdo da aba anterior para o usuário. 

    Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
    
    Passo 2 - dar um jeito de identificar o clique no elemento da aba
    
    Passo 3 - quando o susuários clicar, desmarcar a aba selecionada

    Passo 4 - marcar a aba clicada como selecionada

    Passo 5 - esconder o conteúdo anterior 

    Passo 6 - mostrar o conteúdo da aba selecionada
*/

// Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

// Criação de uma variável com as abas criadas no CSS
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // Passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionada")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });  
});

function selecionarAba(aba) {
    // Passo 3 - quando o susuários clicar, desmarcar a aba selecionada
    const abaSelcionada = document.querySelector(".aba.selecionada");
    abaSelcionada.classList.remove("selecionada")

    // Passo 4 - marcar a aba clicada como selecionada
    aba.classList.add("selecionada")
}

function mostrarInformacoesDaAba(aba){
    //Passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    
    // Passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
            
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}