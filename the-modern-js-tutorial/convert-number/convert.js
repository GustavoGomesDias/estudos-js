function vazio(param){
    if(!param){
        return true;
    }
}

function convert_for_base(){
    const inputNumber = Number(document.getElementById("input-number-b").value);
    const inputBase = Number(document.getElementById("input-base-b").value);
    if(vazio(inputNumber) || vazio(inputBase)){
        alert("Preencha todos os campos");
        
        // Dar reload na página
        window.location.reload();
    }else{
        const res = inputNumber.toString(inputBase);
        document.getElementById("result-b").innerHTML = res;
    }
}

function convert_for_number(){
    const inputNumber = document.getElementById("input-number-n").value;
    const inputBase = Number(document.getElementById("input-base-n").value);
    if(vazio(inputNumber) || vazio(inputBase)){
        alert("Preencha todos os campos");
        
        // Dar reload na página
        window.location.reload();
    }else{
        const res = parseInt(inputNumber,inputBase);
        document.getElementById("result-n").innerHTML = res;
    }
}