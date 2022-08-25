import { Api } from "./api.js"

export class CadastrarCliente {
    static async createUser(){
        const nomeInput   = document.getElementById("nome")
        const emailInput  = document.getElementById("email")
        const idadeInput  = document.getElementById("idade")
        const cpfInput    = document.getElementById("cpf")
        const sexoInput   = document.getElementById("sexo")
        const cepInput    = document.getElementById("cep")
        const ruaInput    = document.getElementById("rua")
        const numeroInput = document.getElementById("nome")
        const bairroInput = document.getElementById("bairro")
        const cidadeInput = document.getElementById("cidade")
        const estadoInput = document.getElementById("estado")
        const btnCadastro = document.getElementById("btnCadastro")

        btnCadastro.addEventListener("click", evt => {
            evt.preventDefault()
            const data = {
                nome: nomeInput.value,
                email: emailInput.value,
                idade: idadeInput.value,
                cpf: cpfInput.value,
                sexo: sexoInput.value,
                endereco: {
                    cep: cepInput.value,
                    rua: ruaInput.value,
                    numero: numeroInput.value,
                    bairro: bairroInput.value,
                    cidade: cidadeInput.value,
                    estado: estadoInput.value
                }
            }
            Api.cadastrarCliente(data)
        })
    }
}