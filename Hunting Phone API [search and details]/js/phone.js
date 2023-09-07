const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`); //careful it's `` not ''
    const data = await res.json();  //await and convert to json
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}
const displayPhones = (phones, isShowAll) => {
    // console.log(phones);

    //1. parent div
    const phoneContainer = document.getElementById('phone-container');

    //clear phone container card before adding new search
    phoneContainer.textContent = '';
    console.log(phones.length);     //search result length

    //display show all btn if there are more the 12 phone
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }else {
        showAllContainer.classList.add('hidden')
    }
    console.log('is Show All', isShowAll);

    //display only first 12 phone if    not show all
    if(!isShowAll){
        phones = phones.slice(0,12);
    }

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
        <img src="${phones.image}" alt="" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phones.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <h2 class="card-title">${11000}$</h2>
        <div class="card-actions">
        <button onclick="handleShowDetail('${phones.slug}')" class="btn btn-primary">Show Details</button>
        </div>
        </div>
        </div>
        `;
        //append child
        phoneContainer.appendChild(phoneCard);
    });
    
    //hide loading soinner
    toggleLoadingSpinner(false);
}
//
const handleShowDetail = async (id) => {
    //load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();  //await and convert to json
    const phone = data.data;
    // console.log(phone.name)
    // console.log(data)
    
    // showPhoneDetails(data)
    showPhoneDetails(phone)
    
}

//show phone details
const showPhoneDetails = (phone) => {
    // console.log(phone);
    
    const phoneName = document.getElementById('showDetailPhoneName');
    // console.log('hi ami phone', phoneName);
    // phoneName.innerText = phone.name;
    
    //1. parent div
    const phoneSpecParent = document.getElementById('modalSpecContainer');
    //clear the parent div preious result
    phoneSpecParent.textContent = '';
    //set parent div style classes
    phoneSpecParent.classList = 'place-content-center bg-500-red';

    //2. create child div
    const phoneSpecChild = document.createElement('div');
    console.log(phone);
    //3. set innerHTML to child
    phoneSpecChild.innerHTML = `
        <div> 
            <div class="flex justify-center items-center">
                <img class="w-1/2" src="${phone.image}" alt="" class="rounded-xl">
            </div>
            <h3 class="font-bold text-xl mb-4 mt-4">${phone.name}</h3>
            <p class="font-bold">Storage :<span class="font-light">${phone?.mainFeatures?.storage}</span></p>
            <p class="font-bold">Display Size :<span class="font-light">${phone?.mainFeatures?.displaySize}</span></p>
            <p class="font-bold">Chipset :<span class="font-light">${phone?.mainFeatures?.chipSet}</span></p>
            <p class="font-bold">Memory :<span class="font-light">${phone?.mainFeatures?.memory}</span></p>
            <p class="font-bold">Slug :<span class="font-light">${phone?.slug}</span></p>
            <p class="font-bold">Release data :<span class="font-light">${phone?.releaseDate}</span></p>
            <p class="font-bold">Brand :<span class="font-light">${phone?.brand}</span></p>
            <p class="font-bold">GPS :<span class="font-light">${phone?.others?.GPS || 'No GPS available'}</span></p>
            <p class="font-bold">GPS :<span class="font-light">${phone?.others?.GPS ? phone.others.GPS: 'No GPS available'}</span></p>
        </div>
    `;
    
    //4. append child on parent
    phoneSpecParent.appendChild(phoneSpecChild);
    
    //show the modal
    showDetailsModal.showModal()    
}

const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll)
}

//handle search recap
/* const handleSearch2 = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadPhone(searchText);
} */

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }else{
        loadingSpinner.classList.add('hidden');
    }
}

//show all button function
const showMore = () => {
    handleSearch(true);
}

loadPhone();