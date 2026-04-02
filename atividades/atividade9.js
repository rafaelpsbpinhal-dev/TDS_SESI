
function horaAtual(hora, nome){

    if (hora >= 0 && hora >=11) {
        console.log (`Bom dia ${nome}`);
    } 
    else if(hora >= 12 && hora >=17) {
        console.log (`Bom tarde ${nome}`);
    }
    else{
        console.log (`Bom noite ${nome}`);
    }
}

horaAtual(14, "Rafael!")