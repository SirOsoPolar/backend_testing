
const res = require("express/lib/response");
const michael = require('./algo.json');
// function esPrimo(numero) {
//     for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
//         if(numero % i === 0) return false;
//     return numero > 1;
// }  

function primos (req) {
    // if ( parseInt(req.params.id) > 100000){
    //     return false
    // }
    // let lista = [];
    // let x = 0
    // while (lista.length < parseInt(req.params.id, 10)) {
    //     x = x +  1
    //     if (esPrimo(x))
    //         lista.push(x);
    // } 
    return ( !!req.query.q ? (!!michael.find( x => x == req.query.q) ? 'Existe' : 'No existe' ) : 'No hay query' )
}
const nprimos = (req,res) => (res.json(primos(req)))

module.exports = 
{ 
    nprimos
}