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