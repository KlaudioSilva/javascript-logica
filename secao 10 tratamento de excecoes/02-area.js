function calcularAreaRetangulo(l, a){
    if(typeof l !== 'number' || typeof a !== 'number'){
        throw new Error('calcularAreaRetangulo só aceita dois parâmetros do tipo Number');
    }
    return l * a;
}

function calcularAreaTriangulo(b, a){
    if(typeof b !== 'number' || typeof a !== 'number'){
        throw new Error('calcularAreaTriangulo só aceita dois parâmetros do tipo Number');
    }
    return (b * a) / 2;
}

function calcularAreaCirculo(r){
    if(typeof r !== 'number'){
        throw  new Error('calcularAreaCirculo só aceita um parâmetro do tipo Number');
    }
    return (Math.Pi * r * r);
}