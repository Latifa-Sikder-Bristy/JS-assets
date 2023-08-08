const userName = 'blackPink';
const userInput = 'blackPinK';

/* //compare ignoring case sansitivity
if( userInput === userName){
    console.log('valid user')
}else{
        console.log('invalid user')
} */

//compare with case sansitivity
if( userInput.toLocaleLowerCase === userName.toLocaleLowerCase){
    console.log('valid user')
}else{
        console.log('invalid user')
}

/* //compare with upper case sansitivity
if( userInput.toLocaleUpperCase === userName.toLocaleUpperCase){
    console.log('valid user')
}else{
        console.log('invalid user')
} */