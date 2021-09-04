"use strict";

const word = prompt("select the word for your guesser");
const sw = document.querySelector(".sw");

//Inicio. Colocar o boneco 'invisível'
const bonecoPartes = document.querySelectorAll(".boneco");
console.log(bonecoPartes);

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

clickBox.addEventListener("click", function () {
  if (guess.value != word) {
    for (let i = 0; i < bonecoPartes.length; i++) {
      bonecoPartes[i];
      console.log(bonecoPartes[i]);
    }
  }
});
//  ^^^^^ ACABAR LOGICA ^^^^^^

//Reset Do Jogo
