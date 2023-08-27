const numbers = [1, 6, 8, 9, 4];
// for(let i = 0; i < numbers.length; i++){}    //less use

//best use
for(const num of numbers){
    // console.log(num);
}

const nobab = 'Siraj Ud Doulla';
for(const char of nobab){
    // console.log(char);
}

const actor = {
    name: 'ananta',
    age: 45,
    phone: '017948634671',
    money: 948634671
};
for(const key in actor){        //for in use to read obj property
    const value = actor[key]    //get property value
    // console.log(key, value);    //output property key, value
}

// optional
//step 1. make obj to an array
//step 2. use for of on this array
const keys = Object.keys(actor);
for(const key of keys){        //for in use to read obj property
    const value = actor[key];
    console.log(key, value);    //output property key, value
}
// console.log(keys);