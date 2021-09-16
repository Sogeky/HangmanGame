"use strict";

const word = prompt("SELECT A WORD FOR YOUR FRIEND GUESS! :D");
const sw = document.querySelector(".sw");

//Inicio. Colocar o boneco 'invisível'
let bonecoPartes = document.querySelectorAll(".boneco");

//Coloca a Palavra em asteriscos
//Nota: Meter em array a word, pois deve ser melhor para localizar as letras
const secretWord = function () {
  let asteriscWord = word.replace(/./g, "*"); //Criar variavel que guarde a palavra com asteristicos
  sw.innerHTML = asteriscWord; //Display da variavel acima

  console.log(asteriscWord);
};
secretWord();

//Seletores da box e click btn
let guess = document.querySelector(".box");
let clickBox = document.querySelector(".click");

//Lógica do jogo,Evento de quando clicar no BTN e verifica se a palavra está correta ou não
let nextImg = [...bonecoPartes]; //Transformar em array e dar distruct nas imgs

let imageUp = 0; // mecanismo para fazer as imagens subirem de 0 a 6 -> vemos isto acontecendo na function

const imgNext = function () {
  if (imageUp < bonecoPartes.length) {
    // se 0 (imageUp) for menor que 6 (bonecoPartes.lenght)
    imageUp++; // imageUp vai somar 1 cada vez que apertar no btn
    nextImg.slice(0, imageUp); // Slice() vai fazer a img começar em 0 e imageUp vai dar increase e sempre que apretar o btn, ou seja, cada imagem vai aparecendo 1 a 1
    console.log(nextImg.slice(0, imageUp)); // sera que funciona? SIMMMMM !!!!!!!
  }
};

//Não estava a conseguir colocar o conteudo da function a cima dentro do evento, então tive que criar uma função.
clickBox.addEventListener("click", function () {
  if (guess.value != word) {
    imgNext();
  } else {
    sw.innerHTML = word; // Muda os asteriscos da pagina para a palavra correta
    console.log("correto");
  }
});

//  ^^^^^ ACABAR LOGICA ^^^^^^

//Reset Do Jogo
