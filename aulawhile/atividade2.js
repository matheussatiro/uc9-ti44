const input = require("../input");

(async() => {
    do{
        console.log("aperte sim para continuar: (sim) ou (não)")
        var num = await input()
        
        }while(num == "sim") 

})();
