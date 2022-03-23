let newArr = [];
let arr = ['a', 'b', 'c'];

function writeCards(names, event) { 
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown(x) {
    for (let i = x; i >= 0; i--) {
        console.log(x);
        x--;
    }
}