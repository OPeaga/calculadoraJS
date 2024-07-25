const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach((charBtn) => {
  charBtn.addEventListener("click", function () {
    const value = charBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  // Se o usuario apertar com a tecla deve ser das teclas presente
  allowedKeys.includes(ev.key) ? (input.value += ev.key) : null;
  // Tecla de backspace remove penultimo elemento
  ev.key == "Backspace" ? (input.value = input.value.slice(0, -1)) : null;
  // Tecla de Enter
  ev.key == "Enter" ? calculaValores() : null;
});

document.getElementById("equal").addEventListener("click", calculaValores);

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme == "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});

document.getElementById('copy').addEventListener('click', (ev) => {
  const btn = ev.currentTarget
  if(btn.innerText == 'Copy'){
    btn.innerText = 'Copied!'
    btn.classList.add('success')

    window.navigator.clipboard.writeText(input.value)
  } else {
    btn.innerText = 'Copy'
  }
})

function calculaValores() {
  resultInput.value = 'ERRO'
  resultInput.classList.add('error')

  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove('error')
}
