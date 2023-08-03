const color = 'yellow';
// check all statement
// slow cz check every statement
if(color == 'green'){
    console.log('Green');
}else if(color === 'blue'){
    console.log('blue');
}else if(color === 'red'){
    console.log('red');
}else if(color === 'yellow'){
    console.log('yellow');
}else if(color === 'pink'){
    console.log('pink');
}

//better alternative switch
// faster than if-else cz check every statement
switch (color) {
    case "green":
        console.log('Green');
        break;
    case "blue":
        console.log('blue');
        break;
    case "white":
        console.log('white');
        break;
    case "red":
        console.log('red');
        break;
    case "yellow":
        console.log('yellow');
        break;
    case "pink":
        console.log('pink');
        break;
    }
