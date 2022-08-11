import {photographerFactory} from '../src/factories/photographer.js';

const fetchPhotographers = async () => {
    const photographers = []
    const response = await fetch('../data/photographers.json');
    const photographersList = await response.json();
    photographers.push(...photographersList.photographers);
    console.log(photographersList)
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

