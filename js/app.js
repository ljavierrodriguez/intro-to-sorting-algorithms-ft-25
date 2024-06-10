/* Metodos de Ordenamiento */
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
let nombres = ["Pedro", "Paco", "Hugo", "Juan", "Miguel", "Tomas"]
let notas = [100, 20, 12, 5, 18, 21, 33, 14, 1]
let estudiantes = [
    { name: 'Pedro' }, 
    { name: 'Paco' }, 
    { name: 'Hugo' }, 
    { name: 'Juan' }, 
    { name: 'Miguel' }, 
    { name: 'Tomas' }
]

let numbers = [9, 3, 6, 4, 7, 2, 1, 5, 8]


console.log(nombres)
//console.log(nombres.sort())

const arr = [...nombres]
const resp = bubbleSort(arr)
console.log(resp)
console.log(nombres)

console.time('InicioBS')
console.log(notas)
console.log(bubbleSort([...notas]))
console.timeEnd('InicioBS')

console.time('InicioBSO')
console.log(estudiantes)
console.log(bubbleSortObject([...estudiantes]))
console.timeEnd('InicioBSO')

console.time('InicioSS')
console.log(nombres)
console.log(selectionSort([...nombres]))
console.timeEnd('InicioSS')

console.time('InicioQS')
console.log(nombres)
console.log(quickSort([...nombres]))
console.timeEnd('InicioQS')
imprimirNumeros(10);

console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(2)) // 1
console.log(fibonacci(5)) // 8
console.log(fibonacci(9)) // 8
console.log(fibonacci(10)) // 8

function bubbleSort(arr = []) {
    const size = arr.length - 1;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function bubbleSortObject(arr = []) {
    const size = arr.length - 1;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (arr[j].name > arr[j + 1].name) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function selectionSort(arr = []){
    const size = arr.length

    for(let i = 0; i < size - 1; i++){
        let min = i
        for(let j = i + 1; j < size; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min !== i){
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

function quickSort(arr = []){
    const size = arr.length; 
    if(size <= 1){
        return arr
    }

    const pivot = arr[0]
    const left = []
    const right = []

    for(let i = 1; i < size; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}

function imprimirNumeros(num){
    console.log(num)
    if(num === 0) return;
    return imprimirNumeros(num - 1)
}

function fibonacci(num){
    if(num === 0 || num === 1) return num
    return fibonacci(num - 1) + fibonacci(num - 2)
}