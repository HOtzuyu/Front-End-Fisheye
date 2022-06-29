/* eslint-disable no-unused-vars */
/*******          elements partie Header profil du photographe   ******/
function headerFactory(data) {
  const {
    name,
    portrait,
    city,
    tagline,
    id
  } = data;
  const image = `assets/photographers/${portrait}`;

    /*************    elements du DOM Header Photographe     *****/

  function getHeaderCardDOM() {
    const linkURL = "photographer.html";
    const url = `${linkURL}?id=${id}`;
    const article = document.createElement("article");
    article.innerHTML = ` 
      <article>
        <a class="profil">
          <h1>${name}</h1>
          <div class="content-photograph">
          <p class="where" aria-label="Pays du photographe" alt="Pays du photographe" tabindex="0">${city}</p>
          <p class="tagline" aria-label="phrase du photographe" alt="phrase du photographe" tabindex="0">${tagline}</p>
          </div>
        </a> 
          <button class="modal-btn closed" id="modal">Contactez moi</button>
        <div>
            <a href=${url}><img src=${image} alt="photo"></ a>
        </div>
      </article>`;
      return article;
  }

  return {
    name,
    image,
    getHeaderCardDOM
  };
}

