function reverseString(text){
/*     for(let i = 0; i < text.length; i--){
        //text[i]
        //input text every index element print one by pne
        //forward
        const element = text[i];
        console.log(element);
    } */

    let reversed = '';
    for(let i = text.length - 1; i >= 0; i--){
        //text[i]
        //input text every index element print one by pne
        //backward
        const element = text[i];
        reversed += element;
        console.log(element, reversed);
    }
    return reversed;
}

const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log('reversed output', reversed);
