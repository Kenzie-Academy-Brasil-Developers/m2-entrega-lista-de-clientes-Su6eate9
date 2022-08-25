export class Api {
    static baseUrl = "https://atividade-api-clientes.herokuapp.com"
    static async listarClientes(){
        const apiClients = await fetch(`${this.baseUrl}/clientes`).then(resp => resp.json()).catch(err => console.log(err))
        return apiClients
    }

    static async cadastrarCliente(data){
        const newUser = await fetch(`${this.baseUrl}/clientes`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        }).then(resp => resp.json()).catch(err => console.log(err))
        return newUser
    }

    static async editarCliente(id, data){

    }

    static async deletarCliente(id){

    }

}