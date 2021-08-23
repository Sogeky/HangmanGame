"use strict";
let word = prompt("select the word for your guesser");
let sw = document.querySelector(".sw");

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

//Evento de quando clicar no BTN e verifica se a palavra está correta ou não
clickBox.addEventListener("click", function () {
  guess.value;
  console.log(guess.value);
  if (guess.value != word) {
    alert("error");
  } else {
    alert("correct");
  }
});
