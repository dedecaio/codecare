class Agente {
    constructor(nome) {
        this.nome = nome;
        this.estado = "";
    }


    alterarEstado(novoEstado) {
        this.estado = novoEstado;
    }
}