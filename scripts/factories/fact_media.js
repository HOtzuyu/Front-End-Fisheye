/**
 * @class Display all project of the photographer selected
 * @description use on the photographer's page
 */
class Media {
	/**
	 * 
	 * @param {data} media 
	 */
	constructor(media) {
		this._id = media.id;
		this._photographerId = media.photographerId;
		this._title = media.title;
		this._likes = media.likes;
		this._date = media.date;
		this._price = media.price;
		this._type = media.type;
		this._img = media.image;
		this._video = media.video;
	}
	get id() {
		return this._id;
	}
	get photographerId() {
		return this._photographerId;
	}
	get title() {
		return this._title;
	}
	get like() {
		return this._likes;
	}
	get date() {
		return this._date;
	}
	get price() {
		return this._price;
	}
	get medias() {
		return this._img ? this._img : this._video;
	}
	template() {
		this.renderMedia();
	}
}
/**
 * @decription if the media is a photo, use this condition to show in the gallery html
 */
class Photo extends Media {
	constructor(media) {
		super(media);
		this._img = media.image;
	}
	renderMedia() {
		return `
          <div class="gallery-wrapper">
              <a class="gallery-card" aria-label="Ouvrir la vue rapprochée de ${this._title}">
                  <div class="gallery-item">
                      <img data-id="${this._id}" class="card-image gallery-med" src="assets/galleryPhoto/${this._photographerId}/${this._img}" alt="${this._title}" tabIndex="0"/>
                  </div>
              </a>
              <div class="gallery-footer">
                  <figcaption class="gallery-footer-title">${this._title}</figcaption>
                  <div class="gallery-footer-like">
                      <p aria-label="Nombre de j'aime" class="footer-like-counter">
                          ${this._likes}
                      </p>
                      <i class="fa-regular fa-heart heart heart-icon"></i>
                  </div>
              </div>
          </div>
          `;
	}
}
/**
 * @decription if the media is a video, use this condition to show in the gallery html
 */
class Video extends Media {
	constructor(media) {
		super(media);
		this._video = media.video;
	}
	renderMedia() {
		return `
          <div class="gallery-wrapper">
              <a class="gallery-card">
                <div class="gallery-item">
                    <video class="card-image gallery-med" controls="controls" preload="metadata"  playsinline id="player">
                     <source src="assets/galleryPhoto/${this._photographerId}/${this._video}" type="video/mp4">
                    </video>                  
                </div>
              </a>
              <div class="gallery-footer">
                  <figcaption class="gallery-footer-title">${this._title}</figcaption>
                  <div class="gallery-footer-like">
                      <p aria-label="Nombre de j'aime" class="footer-like-counter">
                          ${this._likes} 
                      </p>
                      <i class="fa-regular fa-heart heart heart-icon"></i>
                  </div>
              </div>
          </div>
          `;
	}
}