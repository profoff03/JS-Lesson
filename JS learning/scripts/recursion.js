let students = {
    js: [{
        name: "John",
        progress: 100
    }, {
        name: "Ivan",
        progress: 60
    }],

    html: {
        basic: [{
            name: "Peter",
            progress: 20
        }, {
            name: "Ann",
            progress: 18
        }],

        pro: [{
            name: "Sam",
            progress: 10
        }]
    }
}

const getTotalProgressByIteration = function (data) {
    console.log(Object.values(data));
}

getTotalProgressByIteration(students);