/* 
show an output: 1 to 50
1. if the number is divisable by 3 then insteat of the number, show 'foo'
2. if the number is divisable by 5 then insteat of the number, show 'bar'
3. if the number is divisable by 3 and 5 then insteat of the number, show 'foobar'
*/

/* 
---------------
- breakdown problem smaller
*/

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0  && i % 5 === 0){
        console.log('foo');
    }else if(i % 3 === 0){
        console.log('bar');
    }
    else if(i % 5 === 0){
        console.log('foobar');
    }else{
        console.log(i);
    }
}