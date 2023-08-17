function add(num1, num2){
    console.log(num1, num2);
    //arguments only can use insidee function
    //return array like obj
    //no push() pop() work here
    console.log(arguments);
    console.log(arguments[2]);
}
add(12, 15, 42, 54, 22, 23);