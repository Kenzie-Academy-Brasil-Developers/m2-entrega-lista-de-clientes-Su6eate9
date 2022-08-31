import { Api } from "./api.js"

class CadastrarCliente {
    static createUser(){
        const nomeInput   = document.getElementById("nome")
        const emailInput  = document.getElementById("email")
        const idadeInput  = document.getElementById("idade")
        const cpfInput    = document.getElementById("cpf")
        const sexoInput   = document.getElementById("sexo")
        const cepInput    = document.getElementById("cep")
        const ruaInput    = document.getElementById("rua")
        const numeroInput = document.getElementById("numero")
        const bairroInput = document.getElementById("bairro")
        const cidadeInput = document.getElementById("cidade")
        const estadoInput = document.getElementById("estado")
        const btnCadastro = document.getElementById("btnCadastro")

        btnCadastro.addEventListener("click", async (e) => {
            e.preventDefault()
            const data = {
                "nome": nomeInput.value,
                "email": emailInput.value,
                "sexo": sexoInput.value,
                "idade": Number(idadeInput.value),
                "cpf": cpfInput.value,
                "endereco": {
                    "estado": estadoInput.value,
                    "cidade": cidadeInput.value,
                    "bairro": bairroInput.value,
                    "numero": numeroInput.value,
                    "rua": ruaInput.value,
                    "cep": cepInput.value
                }
            }
            return await Api.cadastrarCliente(data)
        })
    }
}
CadastrarCliente.createUser();