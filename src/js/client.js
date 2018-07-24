const states = {
  cant: 0,
  nums: [],
  fecha: [],
}

const render = (fiboState) => {

  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }
  // Div para el input y el boton generar
  const inicio = document.createElement('div');
  inicio.className = 'inicio';
  root.appendChild(inicio);

  // Input para ingresar el numero
  const numero = document.createElement('input');
  numero.className = 'num';
  inicio.appendChild(numero);

  // Boton para setear el la cantidad de digitos de fibonacci
  const generar = document.createElement('button');
  generar.innerHTML = 'GENERAR';
  generar.className = 'btn1';
  generar.onclick = () => {
    fiboState.nums[fiboState.cant] = numero.value;
    fiboState.fecha[fiboState.cant] = new Date();
    fiboState.cant = fiboState.cant + 1;
    render(fiboState);
  };
  inicio.appendChild(generar);

  // Div para almacenar la grafica de 
  for (let y = 0; y < fiboState.cant; y += 1) {
    const fech = document.createElement('h3');
    fech.innerHTML = fiboState.fecha[y];
    root.appendChild(fech);

    const fiboDiv = document.createElement('div');
    fiboDiv.className = 'fibodiv';
    root.appendChild(fiboDiv);
    // Divs que funcionan como barras de fibonacci
    let fib = 0;
    let fiba= 1;
    for (let x = 0; x < fiboState.nums[y]; x += 1) {
      const fibo = document.createElement('div');
      fibo.className = 'barra';
      fibo.style.height = (3 * (fiba + fib)) + "px";
      const temp = fiba + fib;
      fib = fiba;
      fiba = temp;
      console.log(fib + fiba);
      fiboDiv.appendChild(fibo);
    }
  }
};


render(states);
