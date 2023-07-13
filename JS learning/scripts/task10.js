//tasks  10

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

    showAgeAndLangs: function(plan) {
        let result = `Мне ${personalPlanPeter["age"]} и я владею языками: `;
        const {languages} = personalPlanPeter["skills"]["languages"];

        for (let key in languages) {
            result += `${languages[key]} `.toUpperCase();
        }
    }
};

function showExperience(plan) {
  const {exp} = personalPlanPeter["skills"];

  return exp;
}

function showProgrammingLangs(plan) {
    let result = "";
    const {programmingLangs} = personalPlanPeter["skills"]["programmingLangs"];

    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return result;
}