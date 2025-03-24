const isNumber = (number) => typeof(number) === 'number' ? true : false;

function divisivel(number) {
    return !isNumber(number) ? number : number % 3 === 0 && number % 5 === 0 ? "FizzBuzz" :
        number % 3 === 0 ? "Fizz" : number % 5 === 0 ? "Buzz" : number;
}

for (let i = 0; i<= 100; i++){
    console.log(i , divisivel(i))
}
