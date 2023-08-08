/* const lyrics = 'Tmi bondhu kala pakhi ami jeno  ki, bosonto kale ami bolte parini, sala sala kala kala';
 */
//ignoring case
/* const searchString = 'kala';
//case sensitive
// const doesExist = lyrics.includes('kala');
// const doesExist = lyrics.includes('Kala');
const doesExist = lyrics.includes(searchString);
console.log(doesExist);
 */

const lyrics = 'Tmi bondhu kala pakhi ami jeno  ki, bosonto kale ami bolte parini, sala sala kala kala';

//care case
const searchString = 'kAla';
//lyris lowercase
const lyrichsLowerCase = lyrics.toLowerCase();
//search string lowercase
const stringToLower = searchString.toLowerCase()
//check
const doesExist = lyrichsLowerCase.includes(stringToLower);
console.log(doesExist);

/* -----------indexOf--------- */
console.log(lyrics.indexOf('kala'));  // 11
console.log(lyrics.indexOf('kaiila')); // -1

///
if(lyrics.indexOf('sada') != -1){
    console.log('Exist');
} else{
    console.log('Not Exist'); // Not Exist
}

//check is it starts with
console.log(lyrics.startsWith('2mi '))

//check is it starts with
const fileName = 'jghdfiyg.pdf';
const otherFile = 'jghdfiyg.png';
console.log(fileName.endsWith('.pdf'))