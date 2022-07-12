const fetchPhotographer = async (id) => {
    const response = await fetch(`../data/photographers.json`);
    const photographersList = await response.json();
    const photographer = photographersList.photographers.find(photographer => photographer.id === id);
    return photographer;
  }

  const fetchMedias = async (id) => {
    const response = await fetch(`../data/photographers.json`);
    const photographersList = await response.json();
    const medias = photographersList.media.filter(media => media.photographerId === id);
    return medias;
  }

  export { fetchPhotographer, fetchMedias };