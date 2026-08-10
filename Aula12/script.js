// // programacao sincrona e assincrona

// console.log('1. inicio do processo')
// setTimeout(() => {
//     console.log('2. meio do processo')
// }, 1000);
// console.log('3. final do proceso')

// const btn = document.getElementById('botao');
// const popup = document.getElementById('popup');

// // adiciona um evento
// btn.addEventListener('click', () => {
//     popup.classList.add('popup-active'); // adiciona uma classe nova p botao

//     setTimeout(() => {  //passa 2 segundos e a classe e removida
//         popup.classList.remove('popup-active')
//     }, 2500)
// })

// for (let letra of "ola") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000)
// }

// for (let letra of "mundo") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000)
// }

// // setInterval(() => {
// //     console.log('tic')
// // }, 1000)

// let counter = 0
// const interval = setInterval (() => {
//     counter ++;
//     console.log("counter: ", counter);

//     if(counter >= 5){
//         clearInterval(interval)
//         console.log('o intervslo foi removido')
//     }
// }, 1000)

// const eventoFuturo = (res) => {
//     return new Promise((resolve, reject) => {
//         if (res === true){
//             resolve("promessa resolvuida")
//         }else{
//             reject("promessa rejeitada")
//         }
//     })
// }
// // console.log(eventoFuturo());
// console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));

// const eventoFuturo = (res) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             res ? resolve('promessa resolvida') : reject ('promessa rejeitada')
//         }, 2000)
//     })
// }

// // console.log(eventoFuturo(true));
// // console.log(eventoFuturo(false));

// eventoFuturo(true)
//     .then((response) => { console.log(response)})
//     .finally(() => {console.log('fim do processo')})

// eventoFuturo(false)
//     .catch((error) => {console.log(error)})
const BD = [
    { id: 1, nome: 'Produto 1', preco: 1500 },
    { id: 2, nome: 'Produto 2', preco: 2500 },
    { id: 3, nome: 'Produto 3', preco: 3500 }
]
const pedirProdutos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 5000)
    })
}
let produtos = [] // inicializamos com um array vazio
// // função que gera a visualização dos produtos
const renderProdutos = (arr) => {
    console.log(produtos)
}
// pedimos os dados e geramos a visualização de forma assíncrona
pedirProdutos()
    .then((res) => {
        produtos = res
        renderProdutos(produtos)
    })

