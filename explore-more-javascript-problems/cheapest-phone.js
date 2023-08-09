const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'black'},
    {name: 'Iphone', camera: 40, storage: '32gb', price: 122000, color: 'green'},
    {name: 'oppo', camera: 10, storage: '32gb', price: 12000, color: 'silver'},
    {name: 'Xaomi', camera: 10, storage: '32gb', price: 15000, color: 'black'},
    {name: 'Nokia', camera: 10, storage: '32gb', price: 44000, color: 'silver'},
    {name: 'Tecno', camera: 10, storage: '32gb', price: 26000, color: 'blue'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];

    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);