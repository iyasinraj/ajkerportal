const dreamGirl = [
    {
      sokina: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          { facebook: {link: "https://www.facebook.com/", followers: "12545", status: "single", friendsList: [{ name: "rofik" }, undefined],},
          },
          { instagram: "https://www.instagram.com/" },
        ],
      },
    },
  ];
 const result = dreamGirl[0].contactInfo;
  console.log(result);






/* 
steps 
1. find api link
2. fetch the api url
3. diclare display function
4. add display function in fetch url function
5. (optional) diclare fuction for custor url key
*/




const loadPhones = async(searchkey) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchkey}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.innerHTML = ``;
    

    const showAll = document.getElementById('show-all')
    if(phones.length > 15){
        phones = phones.slice(0, 15);
        showAll.classList.remove('d-none')
    }else{
        showAll.classList.add('d-none')
    }

    const noPhoneMasage = document.getElementById('noPhoneMassage');
    if(phones.length === 0){
        noPhoneMasage.classList.remove('d-none')
    }
    else{
        noPhoneMasage.classList.add('d-none')
    }

    phones.forEach(phone => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top p-4" alt="...">
           <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
            <!-- Button trigger modal -->
            <button onclick = "phoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Show More Details</button>
    `;
    phoneContainer.appendChild(div);        
    });

    loader(false);
}

// enter feature
document.getElementById('input-field').addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        searchPhone()
    }  
})


// program start from here by clickin search button from UI
const searchPhone = () => {
    loader(true);
    const searchField = document.getElementById('input-field');
    const searchkey = searchField.value;
    loadPhones(searchkey);
}

// loader
const loader = isLoading =>{
    const spiner = document.getElementById('loader');
    if(isLoading){
        spiner.classList.remove('d-none')
    }
    else{
        spiner.classList.add('d-none')
    }
}


const phoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = (phone) =>{
    const title = document.getElementById('staticBackdropLabel');
    title.innerText = phone.name
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img src="${phone.image}" alt="" srcset="">
    <h1>Features</h1>
    <h6>Chipset: ${phone.mainFeatures.chipSet}</h6>
    <h6>Display Size: ${phone.mainFeatures.displaySize}</h6>
    <h6>Memory: ${phone.mainFeatures.memory}</h6>
    <h6>Storage: ${phone.mainFeatures.storage}</h6>
    `;
}


