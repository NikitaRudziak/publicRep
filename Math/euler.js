function F(x, y) {
  // return Math.exp(x ** 2);
  return 3 * (x ** 2) - 2 * (x ** 4) + 2 * x * y;
  // return 3 * Math.sin(2 * y) + x;
}

function main() {
  const a = 0;
  const b = 1;
  const h = 0.01;
  const n = (b - a) / h;
  const x = [n];
  const y = [n];
  x[0] = a;
  y[0] = 2;

  for (let i = 1; i <= n; i++) {
    x[i] = a + i * h;
    y[i] = y[i - 1] + h * F(x[i - 1], y[i - 1]);
  }

  for (let i = 0; i <= n; i++) {
    const div = document.createElement('div');
    div.innerText = 'x[' + i + '] = ' + x[i].toFixed(3);
    document.getElementById('euler_x').append(div);
  }
  document.body.append(document.createElement('p'));
  for (let i = 0; i <= n; i++) {
    const div = document.createElement('div');
    div.innerText = 'y[' + i + '] = ' + y[i].toFixed(3);
    document.getElementById('euler_y').append(div);
  }
  const arr = [];
  for (let i = 0; i <= n; i++) {
    const obj = { x: x[i].toFixed(3), value: y[i].toFixed(3) };
    arr.push(obj);
  }
  document.body.append(document.createElement('p'));
  anychart.onDocumentLoad(function () {
    const chart = anychart.line(arr);
    chart.title('Эйлер');
    chart.container('container').draw();
  });
}

console.log(main());
