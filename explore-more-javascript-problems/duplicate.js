//remove duplicate from an array
const names = ['abul', 'babul', 'cubul', 'dabul', 'abul','babul', 'abul','babul','abul', 'babul', 'cubul', 'dabul', 'abul','babul', 'abul','babul']

function removeDuplicate(names){

    const uniqueElement = [];
    
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqueElement.includes(name) === false){
            uniqueElement.push(name);
        }
    }
    return uniqueElement;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

//remove duplicate
// 1. target index 1 and compare with every element
// 2. take a empty array and check old array.include() === false
