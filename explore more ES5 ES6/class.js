const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 165000},
]

//similar
//has some properties, method
class Product{
    country = 'Bangladesh';
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('le le lenovo')
// console.log(lenovo)
// lenovo.speak('oba kita kau')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log("I am teaching")
    }
}

const tapon = new Teacher('Tapon sir', 'Physics')
console.log(tapon);
const rasid = new Teacher('Rasid sir', 'English')