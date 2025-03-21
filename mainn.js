const array = [2,3,4,5,6] // criando array

array.forEach(item =>{
    if(item % 2 === 0){
        console.log(`O numero ${item} é par`)
    }else{
        console.log(`O numero ${item} é impar`)
    }
})