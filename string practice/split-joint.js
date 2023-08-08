const lyrics = 'Tmi bondhu kala pakhi ami jeno  ki, bosonto kale ami bolte parini, sala sala kala kala';

/* -----------split()------------- */
//split the words when finds white space
const parts = lyrics.split(' ');
//split the words when finds ,
const sentences = lyrics.split(',')
//split every word
const chars = lyrics.split('')

console.log(parts);
console.log(sentences);
console.log(chars);

/* ---------slice()--------- */
/* -------start index, end index-------- */
const partial = lyrics.slice(66, 86);
console.log(partial);

const partial2 = lyrics.substring(68, 76)
console.log(partial2);

/* -----Array to string---- */
const lines = [
    'Tmi bondhu kala pakhi ami jeno  ki',
    ' bosonto kale ami bolte parini',
    ' sala sala kala kala'
    ];

const newSong = lines.join('.')
console.log(newSong)