function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

function exibirParOuImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = verificarParOuImpar(numero);
    document.getElementById('resultadoParOuImpar').innerText = resultado;
}

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

function exibirMaioridade() {
    const idade = document.getElementById('idade').value;
    const resultado = verificarMaioridade(idade);
    document.getElementById('resultadoMaioridade').innerText = resultado;
}

function classificarNota(nota) {
    if (nota >= 60) {
        return "Aprovado";
    } else if (nota >= 40 && nota <= 59) {
        return "Em recuperação";
    } else {
        return "Reprovado";
    }
}

function exibirClassificacaoNota() {
    const nota = document.getElementById('nota').value;
    const resultado = classificarNota(nota);
    document.getElementById('resultadoClassificacaoNota').innerText = resultado;
}

function calculadoraSimples(operacao, num1, num2) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Operação inválida";
    }
}

function exibirResultadoCalculadora() {
    const operacao = document.getElementById('operacao').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = calculadoraSimples(operacao, num1, num2);
    document.getElementById('resultadoCalculadora').innerText = resultado;
}

let array = [];

function addNumber(array, number) {
    array.push(number);
    return array;
}

function exibirAddNumber() {
    const numero = parseFloat(document.getElementById('numeroArray').value);
    const resultado = addNumber(array, numero);
    document.getElementById('resultadoAddNumber').innerText = "Array atualizado: " + resultado.join(", ");
}
const api_key = "92d5365c8a52bbc1738e0437835a1301";

document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeatherData(city);
});

function getWeatherData(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=pt_br`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherDiv.innerHTML = `
            <h2>Clima em ${data.name}</h2>
            <img src="${icon}" alt="Ícone do clima">
            <div class="weather-item">
                <p>Temperatura: ${data.main.temp}°C</p>
            </div>
            <div class="weather-item">
                <p>Sensação Térmica: ${data.main.feels_like}°C</p>
            </div>
            <div class="weather-item">
                <p>Descrição: ${data.weather[0].description}</p>
            </div>
            <div class="weather-item">
                <p>Pressão: ${data.main.pressure} hPa</p>
            </div>
            <div class="weather-item">
                <p>Vento: ${data.wind.speed} m/s</p>
            </div>
        `;
    })
    .catch(error => {
        alert('Erro ao obter dados do clima: ' + error.message);
    });
}