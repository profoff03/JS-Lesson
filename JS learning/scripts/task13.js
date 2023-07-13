const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

const isBudgetEnough =  function (data) {
    let totalAreaMall = 0;
    let totalVolumeMall = 0;
    data.shops.forEach( shop => {
        totalAreaMall += shop.width * shop.length;
    });

    totalVolumeMall = totalAreaMall * data.height;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}