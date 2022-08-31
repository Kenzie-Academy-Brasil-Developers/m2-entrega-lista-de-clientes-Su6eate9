export class Api {
    static url = "https://atividade-api-clientes.herokuapp.com"
    static headers = {
        "Content-Type": "application/json"
    }
    static async listarClientes(){
        return await fetch(`${Api.url}/clientes`)
        .then(response => response.json())
        .then(json => json)
        .catch(error => console.log(error))
    }
    static async cadastrarCliente(data){
        return await fetch(`${Api.url}/clientes`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(json => {
            setTimeout(() => {
                window.location.assign("../../index.html")
            }, 2000);
            return json
        })
        .catch(error => console.log(error))
    }
    static async editarCliente(id,data){
        return await fetch(`${Api.url}/clientes/${id}`, {
            method: "PATCH",
            headers: Api.headers,
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(json => {
            console.log(json)
            setTimeout(() => {
                window.location.assign("../../index.html")
            }, 2000);
            return json
        }).catch(error => console.log(error))
    }
    static async deletarCliente(id){
        const deleteClient = await fetch(`${Api.url}/clientes/${id}`, {
            method: "DELETE",
            headers: this.headers
        }).then(response => response.json())
        .then(json => {
            setTimeout(() => {
                window.location.assign("../../index.html")
            }, 2000);
            return json
        }).catch(error => console.log(error))
        return deleteClient
    }
}