/* eslint-disable no-undef */
async function getPhotographers() {
    return (
        fetch("./data/photographers.json")
            .then(function (response) {
               // console.log(response);
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

    const photographersSection = document.querySelector(".photographer-section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
displayData();// recuperation des photographers