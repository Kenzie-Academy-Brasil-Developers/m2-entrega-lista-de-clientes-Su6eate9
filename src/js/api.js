export class Api {
  
    static async listarClientes(){
        const urlBase = "https://atividade-api-clientes.herokuapp.com/clientes"
        const apiClients = await fetch(urlBase).then(resp => resp.json()).catch(err => console.log(err))
        return apiClients
    }

    static async cadastrarCliente(data){

    }

    static async editarCliente(id, data){

    }

    static async deletarCliente(id){

    }

}