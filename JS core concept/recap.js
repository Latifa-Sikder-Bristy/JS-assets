//----------6 things-----
//1. variable
var myName = 'khan';

//math opration: +, -, *, /
//shorthand: +=, --, *=, /=
//++, --

//2. Array
var friends = ['abul','topul','balbul','dabul','abul','ebul'];

//3. 
var my3rdfriends = friends[2];
friends[2] = 'topul';

//3. conditionals
// >, <, >=, <=, ==, ===, !=, !==
if(friends.length < 2){
    console.log('too few');
}else{

}

//4. loop
var number = 0;
while(number <=6){
    console.log(number);
    number++;
}

for(var i; i <= 10; i++){

}

//5. function
function isMoonUp(time){
    if (time > 8) {
        return true;
    }
}

//6. object
var jantus= {
    height: 60,
    weight : 70,
    romanticism: 'heavvy',
    bappertk: 'borolox'
}