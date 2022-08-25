import { Api } from "./api.js"

export class CreateCards{
    static async cards(){
        const apiGetClients = await Api.listarClientes()

        const ul = document.querySelector(".container")
        apiGetClients.forEach(element => {
            const li = document.createElement("li")
            const h2 = document.createElement("h2")

            const firstDiv = document.createElement("div")
            const h3Data   = document.createElement("h3")
            const email    = document.createElement("p")
            const age      = document.createElement("p")
            const cpf      = document.createElement("p")
            const sexo     = document.createElement("p")

            const secondDiv  = document.createElement("div")
            const h3Endereco = document.createElement("h3")
            const cep        = document.createElement("p")
            const estado     = document.createElement("p")
            const cidade     = document.createElement("p")
            const bairro     = document.createElement("p")
            const rua        = document.createElement("p")
            const numero     = document.createElement("p")

            h2.innerText = element.nome

            h3Data.innerText = "Dados Pessoais"
            email.innerText  = `Email: ${element.email}`
            age.innerText    = `Idade: ${element.idade}`
            cpf.innerText    = `Cpf: ${element.cpf}`
            sexo.innerText   = `Sexo: ${element.sexo}`
            
            h3Endereco.innerText = "Endereço"
            cep.innerText        = `Cep ${element.endereco.cep}`
            estado.innerText     = `Estado: ${element.endereco.estado}`
            cidade.innerText     = `Cidade: ${element.endereco.cidade}`
            bairro.innerText     = `Bairro: ${element.endereco.bairro}`
            rua.innerText        = `Rua ${element.endereco.rua}`
            numero.innerText     = `Número: ${element.endereco.numero}`

            firstDiv.append(h3Data,email,age,cpf,sexo)
            secondDiv.append(h3Endereco,cep,estado,cidade,bairro,rua,numero)
            li.append(h2,firstDiv,secondDiv)
            ul.appendChild(li)
        });
    }
}