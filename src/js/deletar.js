import { Api } from "./api.js"

class DeleteClient {
    static async client(){
        const searchClient = document.getElementById("searchClient")
        const btnDelete    = document.getElementById("btnDelete")

        const listClients = await Api.listarClientes()
        listClients.forEach(element => {
            const option = document.createElement("option")
            option.innerText = element.nome
            searchClient.appendChild(option)
        });

        btnDelete.addEventListener("click", async (e) => {
            e.preventDefault()
            const nameFilter = nameFilter[0].id
            await Api.deletarCliente(nameFilter)
        })
    }
}
DeleteClient.client();