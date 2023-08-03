var shoppingCart = {
    // values : keys,
    books : 3,
    sunglass : 2,
    mouse : 1,
    shoe : 1,
    pen : 5
}
//array vs obejct
//array
var shoppingItems =['books', 'sunglass', 'shoes', 'pen']
var friendAge = [12, 34, 54, 32, 55];
//object
var friendAge = {
    me: 28,
    ray: 30,
    nai: 8,
    mom: 50
}
//get keys
const keys = Object.keys(shoppingCart);
console.log(keys);
//get values
const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'mouse', 'shoe', 'pen' ]
for(var i = 0; i < keys.length; i++){
    console.log(keys[i]);
    console.log(shoppingCart)
    var propertyName = keys[i];

    var propertyValues = shoppingCart[propertyName];
    // console.log(propertyName, propertyValues);
}
//for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}