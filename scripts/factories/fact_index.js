function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id } = data;
 
    const image = `assets/photographers/${portrait}`;
  
    /*************    elements du DOM Accueil     *****/
  
    function getUserCardDOM() {
      const article = document.createElement("article");
      const linkURL = "photographer.html";
      const url = `${linkURL}?id=${id}`;
      article.innerHTML = `
          <a href=${url}>
            <img class="photographer-portrait" src=${image} alt="photo">
            <h2>${name}</h2>
          </a>
          <div class="photographer-content">
            <h3 class="photographer-place">${country}/${city} </h3>
            <p class="tagline">${tagline}</p>
            <p class="price">${price}€/jour</p>
          </div>`;
      return article;
    }
    return { name,image ,getUserCardDOM };
  }