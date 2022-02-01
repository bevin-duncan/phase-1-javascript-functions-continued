// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}
function mondayWork(workActivity = 'go to the office'){
    return (`This Monday, I will ${workActivity}.`)
}
function wrapAdjective(flair = '*'){
    function innerFunction(p1 = 'special'){
        return `You are ${flair}${p1}${flair}!`
    }
        return innerFunction
}
wrapAdjective("%")("a dedicated programmer");