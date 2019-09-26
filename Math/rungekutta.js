function F(x, y) {
  return 3 * Math.sin(2 * y) + x;
}

function main() {
  const a = 0;
  const b = 1;
  const h = 0.01;
  const n = (b - a) / h;
  const x = [n];
  const y1 = [n];
  const y2 = [n];
  const y3 = [n];
  const y4 = [n];
  const y = [n];
  x[0] = a;
  y[0] = 2;

  for (let i = 1; i <= n; i++) {
    x[i] = a + i * h;
    y1[i] = h * F(x[i - 1], y[i - 1]);
    y2[i] = h * F(x[i - 1] + h / 2, y[i - 1] + y1[i] / 2);
    y3[i] = h * F(x[i - 1] + h / 2, y[i - 1] + y2[i] / 2);
    y4[i] = h * F(x[i - 1] + h, y[i - 1] + y3[i]);
    y[i] = y[i - 1] + (y1[i] + 2 * y2[i] + 2 * y3[i] + y4[i]) / 6;
  }

  for (let i = 0; i <= n; i++) {
    const div = document.createElement('div');
    div.innerText = 'x[' + i + '] = ' + x[i].toFixed(3);
    document.getElementById('runge-kutta_x').append(div);
  }
  document.body.append(document.createElement('p'));
  for (let i = 0; i <= n; i++) {
    const div = document.createElement('div');
    div.innerText = 'y[' + i + '] = ' + y[i].toFixed(3);
    document.getElementById('runge-kutta_y').append(div);
  }
  const arr = [];
  for (let i = 0; i <= n; i++) {
    const obj = { x: x[i].toFixed(3), value: y[i].toFixed(3) };
    arr.push(obj);
  }
  document.body.append(document.createElement('p'));
  anychart.onDocumentLoad(function () {
    const chart = anychart.line(arr);
    chart.title('Рунге-Кутта');
    chart.container('container3').draw();
  });
}

console.log(main());
