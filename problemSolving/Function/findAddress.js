/* function findAddress(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    if(keys.length == 3){
        var joinObj = values.join(',');
        return joinObj;
    }else{
        var joinObj = values.join(',');
        var joinObj = values.join('__');
    }
    console.log(keys.length);
}




const sample = {
    street:10,
    // age: 30,
    society: 'Earth Perfect'
};
console.log(findAddress(sample));
 */



/* -----Array to string---- */
/* const lines = [
    'Tmi bondhu kala pakhi ami jeno  ki',
    ' bosonto kale ami bolte parini',
    ' sala sala kala kala'
    ];

const newSong = lines.join('.')
console.log(newSong) */


function findAddress(obj) {
    const street    = obj.street ? obj.street : '__';
    const house       = obj.house ? obj.house : '__';
    const society   = obj.society ? obj.society : '__';
    return street +','+ house +','+ society ;
}

const sample = {
    street:10,
    house: '15A',
    society: 'Earth Perfect'
};
console.log(findAddress(sample));