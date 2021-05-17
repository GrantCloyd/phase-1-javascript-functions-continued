// Your code here

const saturdayFun = (activity='roller-skate') => `This Saturday, I want to ${activity}!`;

const mondayWork = (task='go to the office') => `This Monday, I will ${task}.`

const wrapAdjective = (exclamation='*') => {
    const innerFunction = (adj='special') => `You are ${exclamation}${adj}${exclamation}!`
    return innerFunction;
}