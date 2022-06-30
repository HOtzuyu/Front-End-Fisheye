const request = new URLSearchParams(location.search);
console.log(request);
const photographerId = request.get("id");
console.log(photographerId);

async function getPhotographers() {
  return (
      fetch("./data/photographers.json")
          .then(function (response) {
             console.log(response);
              return response.json();
          })
          .then((data) => { // recupere les donnees du fichier
              //console.log(data);
              return data.photographers;
          })
          .catch((err) => console.log("an error", err))
  );
}
async function displayData() {
  
  const photographers = await getPhotographers();

  const photographersHeader = document.querySelector(".photographer-header");
  photographers.forEach((photographer) => {
      const photographerModel = headerFactory(photographer);
      const userCardDOM = photographerModel.getHeaderCardDOM();
      photographersHeader.appendChild(userCardDOM);
  });
}
displayData();// recuperation des photographers