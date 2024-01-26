function soma(){
    console.log('------------------------------------')
    console.log(1 + 2)
    console.log('------------------------------------')
}
soma()

function soma2(num1, num2){
    console.log('------------------------------------')
    console.log(num1 + num2)
    console.log('------------------------------------')
}
soma2(7, 9)

function soma3(num1, num2){
    console.log('------------------------------------')
    var numeroSomado = num1 + num2
    return numeroSomado
}
console.log(soma3(9, 9))
