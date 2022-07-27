import {factoryLB} from "../factories/media.js"

class Lightbox {

    static init() {

        const links = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"], img[src$=".gif"], video[src$=".mp4"]')
        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('src'))
        }))

        // console.log(links);
    }


    /*
    @param {string} url  url de l'image à afficher
    */
    constructor(url) {
        const element = this.buildDOM(url)
        document.body.appendChild(element)
        console.log('element');
        console.log(element);
    }


    /*
    @param {string} url  url de l'image à afficher
    @return {HTMLElement} element de la lightbox
    */
    buildDOM(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `
            <button class="lightbox__close">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précédent</button>
            <div class="lightbox__container">
            ${factoryLB(url)}
            </div>`
    
        return dom
        }
    

}

export default Lightbox


