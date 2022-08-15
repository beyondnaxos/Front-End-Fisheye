import * as APICalls from '../utils/APICalls.js';
class PhotographerModel {

  constructor(id) {
    this.name;
    this.id = id
    this.city
    this.country
    this.tagline
    this.price
    this.portrait
    this.medias = [];
    this.totalLikes = 0
  }

  async getPhotographer() {
    const photographer = await APICalls.fetchPhotographer(this.id);
    this.name = photographer.name;
    this.city = photographer.city;
    this.country = photographer.country;
    this.tagline = photographer.tagline;
    this.price = photographer.price;
    this.portrait = photographer.portrait;
    this.medias = await APICalls.fetchMedias(this.id);
    console.log(this);
    this.totalLikes = this.medias?.reduce((acc, media) => {
      return acc + media.likes;
    }
      , 0)
  }

  

}



export default PhotographerModel ;