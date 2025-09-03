// DECLARANDO AS VARIÁVEIS COM DOM (DOCUMENT MODEL OBJECT)
// Pega somente o primeiro que ele encontrar
const carrosselLista = document.querySelector(".carrossel-lista")
// const carrosselLista = document.getElementsByClassName("carrossel-lista") <- mesma coisa que a linha de cima
// pega todos com o mesmo nome
const carrosselItem = document.querySelectorAll(".carrossel-item")
const botaoAnterior = document.getElementsByClassName(".btn-anterior")
const botaoProximo = document.getElementsByClassName(".btn-proximo")

let contador = 0 
const larguraItem=carrosselItem[0].offsetWitdh + 10; //Largura do item

botaoProximo.addEventListener("click", ()=> {
    if (contador < carrosselItem.length -1){
        contador++;
        carrosselLista.style.transform =`translateX(-${contador * larguraItem}px)`;
    }
})

botaoAnterior.addEventListener("click", ()=> {
    if (contador > 0){
        contador--;
        carrosselLista.style.transform =`translateX(-${contador * larguraItem}px)`;
    }
})