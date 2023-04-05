const catagory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data.news_category);
}

const displayCatagory = (categoris) =>{
    const categorisDiv = document.getElementById('categoris-div');
    for(const category of categoris){
        const categoryItem = document.createElement('li');
        categoryItem.classList.add('nav-item');
        categoryItem.innerHTML = `
        <a class="nav-link" href="#">${category.category_name}</a>
        `;
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
    <div class="card shadow text-bg-dark">
        <img src="${news.image_url}" class="card-img" alt="...">
        <div class="card-img-overlay d-flex align-items-end">
            <div>
                <h5 class="card-title">${news.title}</h5>
                <div class="d-flex">
                <p class="card-text me-4">${news.author.published_date.slice(0, 10)}</p>
                <p class="card-text"><small>${news.author.name}</small></p>
                </div>
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
}


const displayLetestNews = (letestNews) =>{
    const letestNewsDiv = document.getElementById('letest-news');
    for(const news of letestNews.slice(0,6)){
        const newsItem = document.createElement('div');
        newsItem.classList.add('col');
        newsItem.innerHTML = `
        <div class="card shadow rounded-4 h-100">
            <img src="${news.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            </div>
            <div class="px-2 d-flex justify-content-between">
                <p class="me-4">${news.author.published_date.slice(0, 10)}</p>
                <p>${news.author.name}</p>
            </div>
    </div>
        `;
        letestNewsDiv.appendChild(newsItem);
    }
}
letestNews ()

const worldNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/03`;
    const res = await fetch(url);
    const data = await res.json();
    displayWorldNews(data.data);
}


const displayWorldNews = (worldNews) =>{
    const newsDiv = document.getElementById('world-news');
    for(const news of worldNews.slice(0, 3)){
        const newsItem = document.createElement('div');
        newsItem.classList.add('col','card','my-2','border', 'text-light', 'border-0');
        newsItem.innerHTML = `
        <img src="${news.image_url}" class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title fw-bold">${news.title}</h5>
        </div>
        `;
        newsDiv.appendChild(newsItem);
    }
}
worldNews ()

const techNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/05`;
    const res = await fetch(url);
    const data = await res.json();
    displayTechNews(data.data);
    console.log(data.data);
}


const displayTechNews = (techNews) =>{
    const newsDiv = document.getElementById('tech-news');
    const news1 = techNews[0];
    const news2 = techNews[1];
    const news3 = techNews[2];
    
    console.log(news1, news2, news3);
    newsDiv.innerHTML = `
    <div class="row row-cols-lg-2 row-cols-1">
        <div class="col-lg-8 col-12">
            <div class="card shadow mb-3 px-0">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="d-flex p-4 align-items-center">
                            <!-- author details -->
                            <img src="${news1.author.img}" class="rounded-circle me-4" style="height:50px; width:50px;" alt="">
                            <p class="fs-4">${news1.author.name}</p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${news1.title}</h5>
                            <p class="card-text">${news1.details.slice(0,100)}....</p>
                            <p class="card-text"><small class="text-body-secondary">${news1.author.published_date.slice(0,10)}</small></p>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <img src="${news1.image_url}" class="img-fluid h-100 w-100 rounded-end" alt="...">
                    </div>
                </div>
            </div>
            <div class="card shadow mb-3 px-0">
                    <div class="row g-0">
        
                        <div class="col-md-8">
                                <div class="d-flex p-4 align-items-center">
                                    <!-- author details -->
                                    <img src="${news3.author.img}" class="rounded-circle me-4" style="height:50px; width:50px;" alt="">
                                    <p class="fs-4">${news3.author.name}</p>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${news3.title}</h5>
                                    <p class="card-text">${news3.details.slice(0,100)}....</p>
                                    <p class="card-text"><small class="text-body-secondary">${news3.author.published_date.slice(0,10)}</small></p>
                                </div>
                        </div>
        
                    <div class="col-md-4">
                    <img src="${news3.image_url}" class="img-fluid h-100 w-100 rounded-end" alt="...">
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12">
                <div class="card shadow mb-3 px-0">
                    <div class="row g-0">
        
                        <div class="col-8 col-lg-12">
                            <div class="d-flex p-4 align-items-center">
                                <!-- author details -->
                                <img src="${news2.author.img}" class="rounded-circle me-4" style="height:50px; width:50px;" alt="">
                                <p class="fs-4">${news2.author.name}</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${news2.title}</h5>
                                <p class="card-text">${news2.details.slice(0,100)}....</p>
                                <p class="card-text"><small class="text-body-secondary">${news2.author.published_date.slice(0,10)}</small></p>
                            </div>
                        </div>
        
                        <div class="col-4 col-lg-12">
                        <img src="${news2.image_url}" class="img-fluid h-100 w-100 rounded-end rounded-lg-buttom" alt="...">
                        </div>
                    
                    </div>
                </div>
        </div>    
    </div>
    `;
    
}
techNews ()