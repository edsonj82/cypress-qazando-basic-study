const names = ['Edson', 'Tamires', 'Izabel','Pedro']
//index: 6

//Para percorrer um array, o foreach é a melhor escolha
names.forEach(element =>{
    console.log(element)
})

console.log('------------------------------------')

for (let index = 0; index < names.length; index++) {
    console.log(names[index])
}

console.log('------------------------------------')

for (let index = 0; index < names.length; index++) {
    console.log("posição: " + index)
}