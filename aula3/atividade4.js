const input = require("../input");

(async () => {
    console.log("Você gostaria de ganhar um presente misterioso (sim ou não)?")
    let presente = await input()
    
    if(presente == "sim" ){
        console.log("ganhou um abraço")
    }else if(presente == "não")
        console.log("ganhou 50 reais")
    
})();