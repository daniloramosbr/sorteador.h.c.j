const buttonOneTxt = document.querySelector(".txt1");
const buttonTwoTxt = document.querySelector(".txt2");
const buttonTreeTxt = document.querySelector(".txt3");
const buttonCrescTxt = document.querySelector(".txt4");
const buttonRegresTxt = document.querySelector(".txt5");
const resulTxt = document.getElementById("txt6");
const buttonSortTxt = document.querySelector(".txt7");
const txtChange = document.querySelector(".txtchange");
const input = document.querySelector(".txtinput");
const textnum = document.querySelector(".textNum");
const textinput = document.querySelector(".textInput");
const NumSort = document.querySelector(".numsort");
const regress = document.querySelector(".regress");
const resnumber = document.querySelector(".resnumber");

class Sorteador {
  constructor(resulTxt, buttonOneTxt) {
    this.resulTxt = resulTxt;
    this.buttonOneTxt = buttonOneTxt;
    this.allclear();
  }
  Back() {
    textnum.hidden = false;
    NumSort.hidden = true;
    buttonSortTxt.value = "SORTEAR!";
    this.resul = "";
    resnumber.innerText = "";
  }
  Action(min, max) {
    if (
      buttonOneTxt.value < 1 ||
      buttonTwoTxt.value < 1 ||
      buttonTreeTxt.value < 1
    ) {
      alert("por favor, adicione valores!");
      return;
    }
    if (this.resul != "") {
      this.Back();
      return;
    }
    if (buttonOneTxt.value == 1) {
      NumSort.innerText = "NÚMERO SORTEADO:";
    }

    if (buttonOneTxt.value > 1) {
      NumSort.innerText = "NÚMEROS SORTEADOS:";
    }
    resnumber.innerText = `NÚMEROS ADICIONADOS: ${buttonOneTxt.value}`;
    NumSort.hidden = false;
    textinput.hidden = true;
    textnum.hidden = true;
    buttonSortTxt.value = "VOLTAR";

    for (let c = 1; c <= buttonOneTxt.value; c++) {
      let minFloat = Number(min);
      let maxFloat = Number(max);

      if (this.resul == "") {
        this.resul = `${this.resul} ${
          Math.floor(Math.random() * (maxFloat - minFloat + 1)) + minFloat
        }`;
      } else {
        this.resul = `${this.resul}, ${
          Math.floor(Math.random() * (maxFloat - minFloat + 1)) + minFloat
        }`;
      }
    }
  }
  allclear() {
    this.resul = "";
  }
  UpdateDisplay() {
    this.resulTxt.innerText = this.resul;
  }
}
const ActivateSort = new Sorteador(resulTxt, buttonOneTxt);

order = () => {};

buttonSortTxt.addEventListener("click", () => {
  ActivateSort.Action(buttonTwoTxt.value, buttonTreeTxt.value);

  ActivateSort.UpdateDisplay();
});
buttonOneTxt.addEventListener("change", () => {
  if (buttonOneTxt.value > 1) {
    txtChange.innerText = "Números entre";
  }
  if (buttonOneTxt.value == 1) {
    txtChange.innerText = "Número entre";
  }
});
