import { Api } from "./api.js"

class UpdateClient {
    static async patchClient(){
        const nameSearch   = document.getElementById("search")
        const btnSearch    = document.getElementById("btnSearch")
        const nomeUpdate   = document.getElementById("nomeUpdate")
        const emailUpdate  = document.getElementById("emailUpdate")
        const idadeUpdate  = document.getElementById("idadeUpdate")
        const cpfUpdate    = document.getElementById("cpfUpdate")
        const sexoUpdate   = document.getElementById("sexoUpdate")
        const cepUpdate    = document.getElementById("cepUpdate")
        const ruaUpdate    = document.getElementById("ruaUpdate")
        const numeroUpdate = document.getElementById("numeroUpdate")
        const bairroUpdate = document.getElementById("bairroUpdate")
        const cidadeUpdate = document.getElementById("cidadeUpdate")
        const estadoUpdate = document.getElementById("estadoUpdate")
        const btnUpdate    = document.getElementById("btnUpdate")

        const listClients = await Api.listarClientes()
        listClients.forEach(element => {    
            const options = document.createElement("option")
            options.innerText = element.nome
            nameSearch.appendChild(options)
        });

        btnSearch.addEventListener("click", async (e) => {
            e.preventDefault()
            const nameFilter = await listClients.filter(name => nameSearch.value === name.nome)
            const nameId = nameFilter[0].id
            btnUpdate.addEventListener("click", async (e) => {
                e.preventDefault()
                const data = {
                    nome: nomeUpdate.value,
                    email: emailUpdate.value,
                    sexo: sexoUpdate.value,
                    idade: Number(idadeUpdate.value),
                    cpf: cpfUpdate.value,
                    endereco: {
                        estado: estadoUpdate.value,
                        cidade: cidadeUpdate.value,
                        bairro: bairroUpdate.value,
                        numero: numeroUpdate.value,
                        rua: ruaUpdate.value,
                        cep: cepUpdate.value
                    }
                }
                return await Api.editarCliente(nameId,data)
            })
        })
    }
}
UpdateClient.patchClient();