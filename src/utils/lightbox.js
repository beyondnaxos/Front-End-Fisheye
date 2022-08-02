import { factoryLB } from '../factories/media.js';

class Lightbox {
  static init() {
    // const links = Array.from(document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"], img[src$=".gif"], video[src$=".mp4"]'))
    const links = Array.from(
      document.querySelectorAll(
        'img:not(.logo):not(.heading-image):not(.close):not(.heart), video'
      )
    );
    console.log(links);
    const gallery = links.map((link) => link.getAttribute('src'));
    console.log(gallery);

    links.forEach((link) =>
      link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(link);
        new Lightbox(e.currentTarget.getAttribute('src'), gallery);
      })
    );
  }
  /*
    @param {string} url  url de l'image à afficher
    */

  constructor(url, gallery) {
    this.element = this.buildDOM(url);
    this.gallery = gallery;
    if (url.endsWith('.mp4')) {
      this.loadVideo(url);
    }
    else {
      this.loadImage(url);
    }
    // this.loadImage(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    document.addEventListener('keyup', this.onKeyUp);
  }

  loadImage(url) {
    this.url = null;
    const image = new Image();
    const container = this.element.querySelector('.lightbox__container');
    const loader = document.createElement('div');
    loader.classList.add('lightbox__loader');
    container.innerHTML = '';
    container.appendChild(loader);
    console.log(url);
    image.onload = () => {
      container.removeChild(loader);
      container.appendChild(image);
      this.url = url;
    };
    // container.innerHTML = factoryLB(url);
    image.src = url;
    // console.log(factoryLB(url));
  }


  loadVideo(url) {
    this.url = null;
    const video = document.createElement('video');
    const container = this.element.querySelector('.lightbox__container');
    const loader = document.createElement('div');
    loader.classList.add('lightbox__loader');
    container.innerHTML = '';
    container.appendChild(loader);

    // replace container's child loader with video
    const refresher = () => {  
    container.replaceChildren( video );
    }

    video.onloadeddata = refresher;
    // video.onloadeddata = () => {
    //     container.removeChild(loader);
    //     container.appendChild(video);
        
    //     }
    video.setAttribute('src', url);
    video.setAttribute('controls', true);
    video.setAttribute('autoplay', true);
    video.setAttribute('loop', true);
    video.setAttribute('muted', true);
    video.setAttribute('playsinline', true);
    video.setAttribute('preload', 'auto');
    video.setAttribute('webkit-playsinline', true);
    // // container.innerHTML = factoryLB(url);
    this.url = url;
    video.src = url;
    // add source item 
    video.innerHTML = `<source src="${url}" type="video/mp4">`;
}

  next(e) {
    e.preventDefault();
    console.log(this.gallery);
    let i = this.gallery.findIndex(image => image === this.url);
    
    if (i === this.gallery.length - 1) {
      i = -1;
    }
    if(this.gallery[i + 1].endsWith('.mp4')) {
      this.loadVideo(this.gallery[i + 1]);
    }
    else {
      this.loadImage(this.gallery[i + 1]);
    }
    
    console.log(i);
  }


  prev(e) {
    e.preventDefault();
    console.log(this.gallery)
    let i = this.gallery.findIndex(image => image === this.url)
    if (i === 0) {
      i =  this.gallery.length;
    }
    if(this.gallery[i - 1].endsWith('.mp4')) {
      this.loadVideo(this.gallery[i - 1]);
    }
    else {
      this.loadImage(this.gallery[i - 1]);
    }
    
  }

  onKeyUp(e) {
    if (e.key === 'Escape') {
      this.close(e);
    }
  }

  /*
    @param {mouseEvent}
    */

  close(e) {
    e.preventDefault();
    this.element.classList.add('fadeOut');
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener('keyup', this.onKeyUp);
  }

  /*
    @param {string} url  url de l'image à afficher
    @return {HTMLElement} element de la lightbox
    */
  buildDOM(url) {
    const dom = document.createElement('div');
    dom.classList.add('lightbox');
    dom.innerHTML = `
            <button class="lightbox__close">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précédent</button>
            <div class="lightbox__container">
            </div>`
    dom
      .querySelector('.lightbox__close')
      .addEventListener('click', this.close.bind(this));
    dom
      .querySelector('.lightbox__next')
      .addEventListener('click', this.next.bind(this));
    dom
      .querySelector('.lightbox__prev')
      .addEventListener('click', this.prev.bind(this));
    return dom;
  }
}

export default Lightbox;

// ${factoryLB(url)}
