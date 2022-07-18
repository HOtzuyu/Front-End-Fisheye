class Lightbox {
	constructor(listMedia) {
		this.currentMedia = null;
		this.listMedia = listMedia;
		this.$modalWrapper = document.querySelector(".lightbox");
	}
	show(element) {
		this.currentMedia = this.getElementById(element);
		this.render();
		this.display();
		this.focus();
		this.manageEvents();
	}
	createLightbox() {
		const lightbox = `
            <div class="lightbox__media" aria-label="image closeup view">                
                <button class="lightbox__close close" aria-label="Close dialog"></button>
                <button class="lightbox__next" aria-label="Next imagee"></button>
                <button class="lightbox__prev" aria-label="Previous image"></button>
                <div class="lightbox__media__wrapper">
                    <div>
                        <img src="" alt="Vue rapprochée du media" class="lightbox__picture">
                        <video alt="Vue rapprochée du media" controls autoplay src="" class="lightbox__video"></video>
						<h2 class="lightbox__content__title">
                    </div>
                    
                        
                    </h2>
                </div>
            </div>
          `;
		this.$modalWrapper.innerHTML = lightbox;
	}
	render() {
		this.createLightbox();
	}
	focus() {
		document.querySelector(".lightbox .close").focus();
	}
	next() {
		let index = this.listMedia.findIndex(
			(element) => element.id == this.currentMedia.id
		);
		if (index == this.listMedia.length - 1) {
			this.currentMedia = this.listMedia[0];
		} else {
			this.currentMedia = this.listMedia[index + 1];
		}
		this.display();
	}
	prev() {
		let index = this.listMedia.findIndex(
			(element) => element.id == this.currentMedia.id
		);
		if (index == 0) {
			this.currentMedia = this.listMedia[this.listMedia.length - 1];
		} else {
			this.currentMedia = this.listMedia[index - 1];
		}
		this.display();
	}
	close() {
		document.querySelector(".lightbox").classList.add("visuallyhidden");
	}
	/**
	 * @description navigation on the lightbox
	 */
	manageEvents() {
		// Mouse Trigger
		document.querySelector(".lightbox__next").addEventListener("click", () => {
			this.next();
			document.querySelector(".lightbox__content__title").innerHTML = `${this.currentMedia.title}`;
		});
		document.querySelector(".lightbox__prev").addEventListener("click", () => {
			this.prev();
			document.querySelector(".lightbox__content__title").innerHTML = `${this.currentMedia.title}`;

		});
		document.querySelector(".lightbox__close").addEventListener("click", () => {
			this.close();
		});
		/**
		 * @description use keyboard for accessibility
		 */
		document.querySelector(".lightbox").addEventListener("keyup", (e) => {
			switch (e.key) {
			case "ArrowRight":
				this.next();
				break;
			case "ArrowLeft":
				this.prev();
				break;
			case "Escape":
				this.close();
				break;
			}
		});
	}
	getElementById(id) {
		return this.listMedia.find((element) => element.id == id);
	}
	display() {
		if (this.currentMedia.image){
			console.log(this.currentMedia);
			document.querySelector(".lightbox__picture").classList.remove("visuallyhidden");
			document.querySelector(".lightbox__picture").alt =
				this.currentMedia.title;
			document.querySelector(".lightbox__video").classList.add("visuallyhidden");
			document.querySelector(
				".lightbox__picture"
			).src = `assets/galleryPhoto/${this.currentMedia.photographerId}/${this.currentMedia.image}`;
		} else{
			document.querySelector(".lightbox__video").classList.remove("visuallyhidden");
			document.querySelector(".lightbox__picture").classList.add("visuallyhidden");
			document.querySelector(
				".lightbox__video"
			).src = `assets/galleryPhoto/${this.currentMedia.photographerId}/${this.currentMedia.video}`;
		}
		document.querySelector(".lightbox").classList.remove("visuallyhidden");
		document.querySelector(".lightbox__content__title").innerHTML = this.currentMedia.title;
	}
}