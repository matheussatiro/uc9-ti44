const input = require("../input");
const { validaremail } = require("./matheus");
const { validartelefone } = require("./matheus");

let agenda = [];
let continuar;
(async () => {


console.log("Olá insira seu nome");
let nomeE = (await input());

  console.log("Olá, digite seu email");
  let Email = (await input()); 

  console.log("Olá, digite o numero do seu telefone");
  let telE = (await input()); 

  if(validaremail (Email) && validartelefone(telE)){
    console.log("Essa agenda é muito da bem organizada, parabens seu 💩💩")

    agenda.push(
        { 
            nome: nomeE,
            telefone: telE,
            email: Email
        }
    );
    
  }else{
    console.log("Essa atrocidade não pode se chamar de agenda")

  }

  

  console.log("👌 agenda atualizada com sucesso");
  console.log("aqui essa mierda atualizada seu animal de teta ")
  console.log(agenda)

})();