function fib(numberOfIteration) {
    if (typeof (numberOfIteration) !== 'number' || numberOfIteration <= 0 || !Number.isInteger(numberOfIteration)) {
        return "";
    }

    const first = 0;
    const second = 1;
    let result = "";

    for (let i = 0; i < numberOfIteration; i++) {
        if (i + 1 === numberOfIteration) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;

        return result;
    }
}

const time = fib(5);
console.log(time);