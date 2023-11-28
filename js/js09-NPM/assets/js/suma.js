const suma = (a,b) => {
    const numAEntero = a* 1000;
    const numBEntero = b* 1000;
    const result = numAEntero + numBEntero;
    return result / 1000;
}

console.log(suma (5,3));

module.exports = {suma};












