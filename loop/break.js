/* for (var i = 1; i <= 20; i++){
    console.log(i);
    if(i > 5){
        break;
    }
} */

/* var raostGiven = 0;
while( raostGiven < 10){
    console.log("den den ");
    raostGiven++;
    if(raostGiven > 4){
        break;
    }
}
 */
/* var items = ['book','laptop', 'monitor', 'headphone','bottle']

for (var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'book'){
        break;
    }
    console.log(item);
} */

var numbers = [34, 54, 54, 77, 32, 34, 65, 98];

for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 60){
        break;
    }
    // like array[index]
    console.log(number);
}