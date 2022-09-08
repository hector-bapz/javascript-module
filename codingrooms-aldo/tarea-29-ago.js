const body = document.querySelector('body');

function generarTarjetaDeCredito(id, numeroTarjeta, titulo) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');
  div.id = id;
  h1.innerText = titulo;
  img.src = 'https://thumbs.dreamstime.com/b/credit-card-chip-isolated-credit-card-chip-isolated-white-background-d-render-110054752.jpg';
  img.alt = 'Chip de tarjeta';
  p.innerText = numeroTarjeta;
  p.className = 'texto-redondo';

  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(p);
  body.appendChild(div);
}

generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
