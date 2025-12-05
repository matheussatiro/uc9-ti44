const input = require("../input");

(async () => {
    console.log("Você tem a chave (sim/não) ou qual a senha? ");
    let senha = await input();

    if(senha.toLowerCase() == "sim" || senha == ("senac123")){
    console.log("Bem vindo");
    }
})();