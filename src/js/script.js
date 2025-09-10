// Array de objetos com as imagens e infos do banner

const bannerItens = [
    {
        image: "../assets/game1",
        titulo: "Titulo do filme 1",
        descricao: "Filme 1",

    },
    {
        image: "../assets/game2",
        titulo: "Titulo do filme 2",
        descricao: "Filme 2",

    },
    {
        image: "../assets/game3",
        titulo: "Titulo do filme 3",
        descricao: "Filme 3",

    }
]

// Declarando as variaveis e elementos com DOMException(Document Object Moder)
const tempo = 5000; //tempo em ms
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0;//inicio da contagem das imagens

//Função para o slideshow

function slideshow() {
    //Altera a imagem de fundo do banner

    //`` = template strings ou strings literais
    elementoBanner.style.backgroundImage = `url(${bannerItens[i].image}/)`
    //Altera o título do banner
    elementoTitulo.textContent = bannerItens[i].titulo;
    //Altera a descrição do banner
    elementoTitulo.textContent = bannerItens[i].descricao;

    //Incrementa o índice (i - que ta em zero né) e reinicia quando chegar no final do array - lê o zero e quando passar ele passa para o 1 e assim consequentemente.

    i++; //é como se ele tivesse adicionando duas vezes --> i= 0 -> i = 1 + -> i = 2 +;
    // Se o i for maior que a quantidade de imagens volta para o início
    if (i > bannerItens.length) {
        i = 0;
    }
    //chama a função novamente após o tempo definido
    setTimeout(slideshow,tempo);

}
//inicia o slidesho/ início da função
slideshow()

