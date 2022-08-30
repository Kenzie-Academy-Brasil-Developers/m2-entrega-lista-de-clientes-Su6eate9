export class Api {
    static baseUrl = "https://atividade-api-clientes.herokuapp.com"
    static headers = {
        "Content-Type": "application/json"
    }
    static async listarClientes(){
        const apiClients = await fetch(`${Api.baseUrl}/clientes`)
        .then(response => response.json())
        .then(json => json)
        .catch(error => console.log(error))
        return apiClients
    }

    static async cadastrarCliente(data){
        const newUser = await fetch(`${Api.baseUrl}/clientes`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(json =>{
            setTimeout(() => {
                Window.location.assign("../../index.html")
            }, 2000);
            return json
        }).catch(error => console.log(error))
        return newUser
    }

    static async editarCliente(id, data){
        const updateClient = await fetch(`${Api.baseUrl}/clientes/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        }).then(response => response.json()
        .then(json => {
            setTimeout(() => {
                Window.location.assign("../../index.html")
            }, 2000);
            return json
        })).catch(error => console.log(error))
        return updateClient
    }

    static async deletarCliente(id){
        const deleteClient = await fetch(`${Api.baseUrl}/clientes/${id}`, {
            method: "DELETE",
            headers: this.headers
        }).then(response => response.json())
        .then(json => {
            setTimeout(() => {
                Window.location.assign("../../index.html")
            }, 2000);
            return json
        }).catch(error => console.log(error))
        return deleteClient
    }

}