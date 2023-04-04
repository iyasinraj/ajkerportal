const catagory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data.news_category);
}

const displayCatagory = (categoris) =>{
    const categorisDiv = document.getElementById('categoris-div');
    for(const category of categoris){
        const categoryItem = document.createElement('p')
        categoryItem.innerHTML = `<a class = "text-decoration-none fw-bold" href="#">${category.category_name}</a>`;
        categorisDiv.appendChild(categoryItem);
    }
}

catagory();

const todaysHeadlines = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/04`;
    const res = await fetch(url);
    const data = await res.json();
    displayTodaysHeadlines(data.data[2]);
}

const displayTodaysHeadlines = (news) =>{
    const TodaysHeadlines = document.getElementById('todays-headlines');
    TodaysHeadlines.innerHTML = `
    <div class="bg-image rounded-4 my-4 d-flex align-items-end" style="background-image: url('${news.image_url}');
    height: 80vh;
    width: 100%">
        <!-- today's headlines -->
        <div class="bg-secondary h-100 rounded-4 bg-opacity-50 d-flex align-items-end">
        <div class="container text-light px-4">
            <h4>${news.title}</h4>
            <div class="d-flex">
                <p class="me-4">${news.author.published_date.slice(0, 10)}</p>
                <p>${news.author.name}</p>
            </div>
        </div>
        </div>
    </div>
    <div class="mx-4 my-4 d-flex justify-content-between">
        <button class="btn fw-bold text-light bg-danger"> Sports</button>
        <div class="d-flex">
            <div class="mx-4 d-flex align-items-center">
                <i class="fa-regular fa-eye"></i>
                <p class="ms-2 mb-0">1.5M</p>
            </div>
            <div class="mx-4 d-flex align-items-center">
                <i class="fa-regular fa-comment"></i>
                <p class="ms-2 mb-0">5k</p>
            </div>
            <div class="mx-4 d-flex align-items-center">
                <i class="fa-solid fa-share-nodes"></i>
                <p class="ms-2 mb-0">15k</p>
            </div>
        </div>
    </div>
    `;
}

todaysHeadlines();

const letestNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayLetestNews(data.data);
    console.log(data.data);
}


const displayLetestNews = (letestNews) =>{
    const letestNewsDiv = document.getElementById('letest-news');
    for(const news of letestNews){
        const newsItem = document.createElement('div');
        newsItem.classList.add('col');
        newsItem.innerHTML = `
        <div class="card h-100">
            <img src="${news.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            </div>
            <div class="p-4 d-flex justify-content-between">
                <p class="me-4">${news.author.published_date.slice(0, 10)}</p>
                <p>${news.author.name}</p>
            </div>
    </div>
        `;
        letestNewsDiv.appendChild(newsItem);
    }
}


letestNews ()