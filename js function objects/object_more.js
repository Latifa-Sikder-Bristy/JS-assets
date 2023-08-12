//object property can be an object too!!! cool!!!
const hero = {
    name: 'John',
    id: 121,
    address: 'movie cinema',
    isString: true,
    friends: ['Apu', 'Raz', 'Salman'],
    movie: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2028}],
    act: function(){
        console.log('acting like sakib khan');
    },
    car: {
        brand:'mercedes',
        price: 5000000000,
        made: 2025
    }
}
// console.log(student.car);
console.log(hero.act);
hero.act();
