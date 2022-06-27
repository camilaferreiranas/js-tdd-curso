const FizzBuz = (num) => {
    if(num % 3 === 0 && num % 5 === 0 ) return 'FizzBuzz';
    if(num % 3 === 0) return 'Fizz';
    if(num % 5 === 0) return 'Buzz';
    if(num % 3 !== 0 && num % 5 !== 0) return num;
    //return num || possibilidade
}

export default  FizzBuz;