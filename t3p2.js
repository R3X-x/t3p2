let suma=0
let i = -1
for(let k=0; k<=500; k++){
   i=i*-1
   suma = suma +i/((k*2)+1)
}
resultados=(suma)*4
console.log("La suma da como resultado " + resultados)
document.getElementById("texto")