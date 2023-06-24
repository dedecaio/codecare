const OPTIONS = [
    ["Câncer de Mama", "Mastologista ou Oncologista especializado em câncer de mama.", "O câncer de mama é o crescimento anormal de células na mama. Pode ocorrer em homens e mulheres. É mais comum em mulheres e pode se manifestar como um nódulo na mama, alterações na pele ou mamilo, ou secreção mamilar."],
    ["Câncer de Pulmão", "Oncologista especializado em câncer de pulmão.", "O câncer de pulmão se desenvolve quando células anormais crescem nos pulmões. É frequentemente associado ao tabagismo, mas também pode ocorrer em não fumantes. Os sintomas podem incluir tosse persistente, falta de ar, dor no peito e perda de peso não intencional."],
    ["Câncer de Próstata", "Urologista ou Oncologista especializado em câncer de próstata.",
        " câncer de próstata afeta a próstata, uma glândula no sistema reprodutivo masculino. Geralmente cresce lentamente e pode não causar sintomas nos estágios iniciais. À medida que progride, pode causar dificuldade na micção, sangue no esperma e dor nos quadris ou costas."],
    ["Câncer de Cólon e Reto", "Gastroenterologista ou Oncologista especializado em câncer colorretal.",
        "O câncer colorretal se desenvolve no intestino grosso (cólon) ou no reto. Pode se formar a partir de pólipos pré-cancerosos no revestimento interno do cólon ou do reto. Os sintomas podem incluir mudanças nos hábitos intestinais, sangramento retal, dor abdominal e perda de peso inexplicada."],
    ["Câncer de Pele", "Dermatologista ou Oncologista especializado em câncer de pele.",
        "O câncer de pele se origina nas células da pele. Os tipos mais comuns são o carcinoma basocelular, o carcinoma de células escamosas e o melanoma. O câncer de pele pode aparecer como uma pinta ou lesão que muda de tamanho, forma ou cor ao longo do tempo."]
];

const sensor = new Agente("Sensor");
const marcadoresTumorais = new Agente("Marcadores Tumorais");
const celulasBoas = new Agente("Células Boas");


var msg = document.getElementById("msg");
var icon = document.getElementById("icon");
var especialista = document.getElementById("especialista");
var info = document.getElementById("info");
var sensorHTML = document.querySelector(".sensor");
var marcadoresTumoraisHTML = document.querySelector(".marcadores");
var celulasBoasHTML = document.querySelector(".celulasBoas");
var genericMsg = "Células cancerígenas foram encontradas na sua corrente sanguínea. Favor consultar um ";
var alertMsg = "Alerta, você pode estar com ";
var okMsg = "Está tudo certo.";


function simularAlteracao(num1, num2) {
    valorInicial = Math.random();

    numSorteado = Math.floor(valorInicial * (num2 - num1 + 1)) + num1;

    return numSorteado;
}


function msgHandler(num) {
    msg.innerHTML = alertMsg + OPTIONS[num][0];
    icon.classList.replace("fa-check", "fa-triangle-exclamation");
    especialista.innerHTML = genericMsg + OPTIONS[num][1];
    info.innerHTML = OPTIONS[num][2];
    sensor.alterarEstado("Detectou os marcadores");
    marcadoresTumorais.alterarEstado("Em grande número.");
    celulasBoas.alterarEstado("Danificadas.");
    sensorHTML.innerHTML = "Sensor: " + sensor.estado;
    marcadoresTumoraisHTML.innerHTML += "Marcadores Tumorais: " + marcadoresTumorais.estado;
    celulasBoasHTML.innerHTML += "Células: " + celulasBoas.estado;
}

function setDefault() {
    msg.innerHTML = okMsg;
    icon.classList.replace("fa-triangle-exclamation", "fa-check");
    especialista.innerHTML = "";
    info.innerHTML = "";
    sensor.alterarEstado("Não detectou nada.");
    marcadoresTumorais.alterarEstado("Normal.");
    celulasBoas.alterarEstado("Ótimas.");
    sensorHTML.innerHTML = "Sensor: " + sensor.estado;
    marcadoresTumoraisHTML.innerHTML += "Marcadores Tumorais: " + marcadoresTumorais.estado;
    celulasBoasHTML.innerHTML += "Células: " + celulasBoas.estado;
}

function coletaDados(x) {
    switch (x) {
        case 1:
            msgHandler(0);
            break;
        case 2:
            msgHandler(1);
            break;
        case 3:
            msgHandler(2);
            break;
        case 4:
            msgHandler(3);
            break;
        case 5:
            msgHandler(4);
            break;
        default:
            setDefault();
    }
}

function atualizaPágina() {
    location.reload();
}

var x = simularAlteracao(0, 10);
coletaDados(x);
setTimeout(atualizaPágina, 3000)


