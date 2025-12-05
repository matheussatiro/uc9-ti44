function random(inferior=0, superior=1, tipo='float'){
    if(superior<inferior)
        {
            console.error("Numero superior deve ser maior que o numero")
        }
    
    switch(tipo){
        case 'float': return Math.random()*(superior+1-inferior)+(inferior);
        case 'int': return Math.floor(Math.random()*(superior+1-inferior))+(inferior);
    }
}







//

const validarCPF = cpf => {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  
    const calc = (base) =>
      [...cpf].slice(0, base).reduce((s, n, i) => s + n * (base + 1 - i), 0) * 10 % 11 % 10;
  
    return calc(9) === +cpf[9] && calc(10) === +cpf[10];
  };




  //


  function validaremail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validartelefone(telefone) {
    telefone = telefone.replace(/\D/g, "");

    return telefone.length === 10 || telefone.length === 11;
}

module.exports = {
        random, validarCPF, validaremail, validartelefone
}