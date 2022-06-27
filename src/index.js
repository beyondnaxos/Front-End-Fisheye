function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    const picture = `../../assets/photographers/${portrait}`;
    function getUserCardDOM() {

        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", picture)

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const div = document.createElement('div');
        div.classList.add('photographer_info');
        
        const title = document.createElement('h3');
        title.textContent = `${city} , ${country}`;
        
        const description = document.createElement('p');
        description.textContent = tagline;
        
        const dailyPrice = document.createElement('p');
        dailyPrice.textContent = `${price}€/jour`;
        
        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(dailyPrice);
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(div);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}

const fetchPhotographers = async () => {
    const photographers = []
    const response = await fetch('../data/photographers.json');
    const photographersList = await response.json();
    photographers.push(...photographersList.photographers);
    return photographers;
}

const displayData = async (photographers) => {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

const init = async () => {
    // Récupère les datas des photographes
    const photographers = await fetchPhotographers();
    displayData(photographers);
};

init();
