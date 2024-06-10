const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (h < 10) {
        h = '0' + h;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (s < 10) {
        s = '0' + s;
    }

    horas.textContent = h;
    minutos.textContent = min;
    segundos.textContent = s;
})

const botaoMudarCor = document.getElementById('mudar-tema-btn');

const cores = [
    'linear-gradient(120deg, #fafa6e, #63c887)',
    'linear-gradient(120deg, #ff9a9e, #fad0c4)',
    'linear-gradient(120deg, #a18cd1, #fbc2eb)',
    'linear-gradient(120deg, #ffecd2, #fcb69f)',
    'linear-gradient(120deg, #ff9a9e, #fecfef)',
    'linear-gradient(120deg, #ff9a9e, #fad0c4)',
    'linear-gradient(120deg, #a18cd1, #fbc2eb)',
    'linear-gradient(120deg, #ffecd2, #fcb69f)',
    'linear-gradient(120deg, #fdfbfb, #ebedee)',
    'linear-gradient(120deg, #cfd9df, #e2ebf0)',
    'linear-gradient(120deg, #ff9a9e, #fecfef)',
    'linear-gradient(120deg, #f6d365, #fda085)',
    'linear-gradient(120deg, #fbc2eb, #a6c1ee)',
    'linear-gradient(120deg, #fdcbf1, #e6dee9)',
    'linear-gradient(120deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(120deg, #232526, #414345)',
    'linear-gradient(120deg, #0f2027, #203a43, #2c5364)',
    'linear-gradient(120deg, #2b5876, #4e4376)',
    'linear-gradient(120deg, #141e30, #243b55)',
    'linear-gradient(120deg, #000000, #434343)',
    'linear-gradient(120deg, #ff6e7f, #bfe9ff)',
    'linear-gradient(120deg, #56ab2f, #a8e063)',
    'linear-gradient(120deg, #ff758c, #ff7eb3)',
    'linear-gradient(120deg, #cc2b5e, #753a88)',
    'linear-gradient(120deg, #fc466b, #3f5efb)',
];

let corAtual = 0;

botaoMudarCor.addEventListener('click', function() {
    corAtual = (corAtual + 1) % cores.length;
    document.body.style.background = cores[corAtual];
});