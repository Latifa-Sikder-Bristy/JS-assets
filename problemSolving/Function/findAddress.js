function findAddress(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    const joinObj = values.join(',');
/* 
    if(values.length < 3){
        const output = values.splice(1, 3, "__");
    } */


/*     if(keys.length < 3 || values.length < 3 ){
        const joinObj = obj.splice(1, 3, "__");
        console.log(joinObj);
    } */
    return joinObj;
}



const sample = {
    street:10,
    age: 30,
    society: 'Earth Perfect'
};
console.log(findAddress(sample));



/* -----Array to string---- */
/* const lines = [
    'Tmi bondhu kala pakhi ami jeno  ki',
    ' bosonto kale ami bolte parini',
    ' sala sala kala kala'
    ];

const newSong = lines.join('.')
console.log(newSong) */