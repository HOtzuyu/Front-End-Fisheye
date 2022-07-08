/**
 * @class Display all informations about all photographers
 * @description use on theindex and photographer's page
 */
class Photographer {
	/**
	 * 
	 * @param {data} photographer 
	 */
	constructor(photographer) {
		this._name = photographer.name;
		this._id = photographer.id;
		this._city = photographer.city;
		this._country = photographer.country;
		this._tagline = photographer.tagline;
		this._price = photographer.price;
		this._picture = photographer.portrait;
	}
	get picture() {
		return `../assets/photographers/${this._picture}`;
	}
	get localisation() {
		return `${this._city}, ${this._country}`;
	}
	get price() {
		return `${this._price}€/jour`;
	}
	/**
	 * 
	 * @returns {string} html photographer's introducing card || index page
	 */
	renderUser() {
		return `
        <div class="photographer-wrapper">
          <a href="photographer.html?id=${this._id}" aria-label="Page de ${this._name}">
              <article class="photographer-profile">
                  <img src="${this.picture}" alt="Photo de profil du photographe ${this._name}">
                  <h2>${this._name}</h2>
              </article>
          </a>
          <div class="photographer-infos">
              <p class="photographer-city">${this.localisation}</p>
              <p class="photographer-tagline">${this._tagline}</p>
              <p class="photographer-price">${this.price}</p>
          </div>
        </div>
        `;
	}
	/**
	 * 
	 * @returns {string} html photographer header page || photographer page
	 */
	renderHeader() {
		return `
        <div class="photograph-header-info">
            <h1 class="photograph-header-title">${this._name}</h1>
            <h2 class="photographer-header-city">${this.localisation}</h2>
            <p class="photographer-header-tagline">${this._tagline}</p>
        </div>
        <button class="contact_button-open" aria-label="Contactez-moi">Contactez-moi</button>
        <img src="${this.picture}" alt="Photo de profil de ${this._name}"/>
        `;
	}
}