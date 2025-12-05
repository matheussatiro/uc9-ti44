const input = require("../input");

(async () =>{
    console.log("qual é seu saldo");
    let saldo = Number (await input());

    if(isNaN(saldo)){
        console.log("Saldo deve ser um numero");
    }else{
        console.log("Qual o número produto voce deseja? ");
        let produto = Number( await input());

        if(isNaN(produto)){
            console.log("Deve ser um número para o produto")
        }else if(saldo > 5 && produto == 42){
            console.log("pegue sua coquinha!");
        }else{
            console.log(`Vá embora e pegue seu ${saldo}`);
    }
    }     
 })();