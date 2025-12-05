
const input = require("../input");
const { validarCPF } = require("./matheus");

(async () => {
    console.log("Olá, digite seu cpf nesse site seguro");
    let cpf = (await input());    
    
    if(validarCPF(cpf)){
        console.log("esse CPF é valido, obrigado pelo empréstimo");
    }else{
        console.log("Esse CPF não é valido");
    }
        
})()