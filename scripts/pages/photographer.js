const $photographerHeader = document.querySelector(".photograph-header");
const $photographerFooter = document.querySelector("#sticky-footer");
const $sectionMedia = document.querySelector("#section-media");

async function displayPhotographersPage() {
  const {
    photographers,
    media
  } = await getPhotographers();
  const params = new URLSearchParams(document.location.search);
  const photographId = params.get("id");
  const selectedPhotographer = photographers.find(
    (photographer) => photographer.id == photographId
  );

  // Header based on selected photographer's id
  let userHeader = new Photographer(selectedPhotographer);
  $photographerHeader.innerHTML += userHeader.renderHeader();

  // Gallery based on selected photographer's id
  const mediaGallery = media.filter(
    (media) => media.photographerId == photographId
  );

  mediaGallery.forEach((media) => {
    console.log(media);
    const allMedias = new MediaFactory(media);
    $sectionMedia.innerHTML += allMedias.renderMedia();
  });
}

async function init() {
  await displayPhotographersPage();
}

init();