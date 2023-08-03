var shoppingCart = {
    // values : keys,
    books : 3,
    sunglass : 3,
    mouse : 1,
    pen : 5
}

//----------case 1------------
//when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;

//----------case 2------------
//alternative system
//when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

//----------case 4------------
var propertyName = 'mouse';
var propertyValues = shoppingCart[propertyName]
// console.log(propertyName, propertyValues);

var properties = Object.keys(shoppingCart);
var propertyvalues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyvalues);
//got in unumerable array means I can use in array loop

//set property values
shoppingCart.mouse = 15;      //1
console.log(shoppingCart);
shoppingCart['mouse'] = 29;   //2
console.log(shoppingCart);
shoppingCart['mouse'] = 89;   //3
console.log(shoppingCart);