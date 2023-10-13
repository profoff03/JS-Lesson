const factorial = function (number) {
    if (typeof(number) !== 'number' || !Number.isInteger(number)) {
        return "Ошибка, проверьте данные";
    }

    if (number >= 1) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }
}

console.log(factorial(0));