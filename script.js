const criarCarta = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');

function classesAleatorias() {
  const classes = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright'],
  ];

  const classesSelec = [];

  classes.forEach((classe) => {
    for (let i = 0; i < 1; i += 1) {
      const indice = Math.floor(Math.random() * classe.length);
      classesSelec.push(classe[indice]);
    }
  });

  return classesSelec;
}

function limpaSpan() {
  while (cartaGerada.childNodes.length > 0) {
    cartaGerada.childNodes.forEach((child) => child.remove());
  }
}

function criaCarta() {
  if (!input.value.trim()) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  limpaSpan();
  const inputSplit = input.value.split(' ');
  contador.innerText = inputSplit.length;
  inputSplit.forEach((valor) => {
    const span = document.createElement('span');
    span.innerText = valor;
    classesAleatorias().forEach((classe) => span.classList.add(classe));

    cartaGerada.appendChild(span);
  });
}

criarCarta.addEventListener('click', criaCarta);

document.addEventListener('click', (event) => {
  const ev = event.target;
  if (ev.tagName === 'SPAN') {
    const classes = classesAleatorias();
    ev.className = `${classes[0]} ${classes[1]} ${classes[2]} ${classes[3]}`;
  }
});
