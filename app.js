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


