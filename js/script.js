var options = [
    ["Câncer de Mama", "Mastologista ou Oncologista especializado em câncer de mama.", "O câncer de mama é o crescimento anormal de células na mama. Pode ocorrer em homens e mulheres. É mais comum em mulheres e pode se manifestar como um nódulo na mama, alterações na pele ou mamilo, ou secreção mamilar."],
    ["Câncer de Pulmão", "Oncologista especializado em câncer de pulmão.", "O câncer de pulmão se desenvolve quando células anormais crescem nos pulmões. É frequentemente associado ao tabagismo, mas também pode ocorrer em não fumantes. Os sintomas podem incluir tosse persistente, falta de ar, dor no peito e perda de peso não intencional."],
    ["Câncer de Próstata", "Urologista ou Oncologista especializado em câncer de próstata.",
        " câncer de próstata afeta a próstata, uma glândula no sistema reprodutivo masculino. Geralmente cresce lentamente e pode não causar sintomas nos estágios iniciais. À medida que progride, pode causar dificuldade na micção, sangue no esperma e dor nos quadris ou costas."],
    ["Câncer de Cólon e Reto", "Gastroenterologista ou Oncologista especializado em câncer colorretal.",
        "O câncer colorretal se desenvolve no intestino grosso (cólon) ou no reto. Pode se formar a partir de pólipos pré-cancerosos no revestimento interno do cólon ou do reto. Os sintomas podem incluir mudanças nos hábitos intestinais, sangramento retal, dor abdominal e perda de peso inexplicada."],
    ["Câncer de Pele", "Dermatologista ou Oncologista especializado em câncer de pele.",
        "O câncer de pele se origina nas células da pele. Os tipos mais comuns são o carcinoma basocelular, o carcinoma de células escamosas e o melanoma. O câncer de pele pode aparecer como uma pinta ou lesão que muda de tamanho, forma ou cor ao longo do tempo."]
];

var form = document.querySelector("form");

var msg = document.getElementById("msg");
var icon = document.getElementById("icon");
var especialista = document.getElementById("especialista");
var info = document.getElementById("info");
var genericMsg = "Células cancerígenas foram encontradas na sua corrente sanguínea. Favor consultar um ";
var alertMsg = "Alerta, você pode estar com ";
var okMsg = "Está tudo certo.";

function msgHandler(num) {
    msg.innerHTML = alertMsg + options[num][0];
    icon.classList.replace("fa-check", "fa-triangle-exclamation");
    especialista.innerHTML = genericMsg + options[num][1];
    info.innerHTML = options[num][2];
}

function setDefault() {
    msg.innerHTML = okMsg;
    icon.classList.replace("fa-triangle-exclamation", "fa-check");
    especialista.innerHTML = "";
    info.innerHTML = "";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let input = event.target.elements.code.value;
    switch (input) {
        case "1":
            msgHandler(0);
            break;
        case "2":
            msgHandler(1);
            break;
        case "3":
            msgHandler(2);
            break;
        case "4":
            msgHandler(3);
            break;
        case "5":
            msgHandler(4);
            break;
        default:
            setDefault();
    }

});


