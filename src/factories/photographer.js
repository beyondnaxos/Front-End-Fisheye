
export function photographerFactory(data) {

    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `../../assets/photographers/${portrait}`;
    
    function getUserCardDOM() {

        const article = document.createElement('article');

        article.setAttribute('onclick', `location.href='photographer.html?id=${id}'`);

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

