console.log('Testing');

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`); //careful it's `` not ''
    const data = await res.json();  //await and convert to json
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);;
}
const displayPhones = phones => {
    // console.log(phones);

    //1. parent div
    const phoneContainer = document.getElementById('phone-container');

    //clear phone container card before adding new search
    phoneContainer.textContent = ''

    //get each phone
    phones.forEach(phones => {
        console.log(phones);
        //2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card bg-grey-100 shadow-xl';

        //3. set innerHTML
        phoneCard.innerHTML = `
        <div class="card bg-grey-100 shadow-xl">
            <figure class="px-10 pt-10">
            <img src="${phones.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phones.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h2 class="card-title">${11000}$</h2>
                <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
        `;
        //append child
        phoneContainer.appendChild(phoneCard);
    });
}

const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText)
}

loadPhone();