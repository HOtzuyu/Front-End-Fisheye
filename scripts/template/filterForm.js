/**
 * @class filtered all gallery media relative to the popularity, date, title or just default
 * @description use on the photographer's page
 */
class FilterForm {
	constructor(mediaGallery) {
		this.mediaGallery = mediaGallery;
		this.$wrapper = document.createElement("div");
		this.$wrapper.classList.add("filter-form__wrapper");
		this.$filterForm = document.querySelector(".filter");
		this.$sectionMedia = document.querySelector("#section-media");
	}
	filterByOption(mediaGallery, option) {
		this.clearMediaGallery();
		switch (option) {
		case "popularity":
			return mediaGallery.sort((a, b) => {
				return b.likes - a.likes;
			});
		case "date":
			return mediaGallery.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			});
		case "title":
			return mediaGallery.sort((a, b) => a.title.localeCompare(b.title));
		}
	}
	openLightboxOnClick() {
		document
			.querySelectorAll("#section-media .gallery-med")
			.forEach((galleryCard) => {
				galleryCard.addEventListener("click", (e) => {
					lightbox.show(e.currentTarget.dataset.id);
				});
			});
	}
	openLightboxOnKeypress() {
		document
			.querySelectorAll("#section-media .gallery-med")
			.forEach((galleryCard) => {
				galleryCard.addEventListener("keypress", (e) => {
					if (e.key === "Enter") {
						lightbox.show(e.currentTarget.dataset.id);
					}
				});
			});
	}
	updatedGallery(mediaGallery) {
		mediaGallery = this.mediaGallery;
		mediaGallery.forEach((media) => {
			const allMedias = new MediaFactory(media);
			$sectionMedia.innerHTML += allMedias.renderMedia();
			this.openLightboxOnClick();
			this.openLightboxOnKeypress();
			photographerFooter.likeHandler();
		});
	}
	onChangeFilter() {
		this.$wrapper
			.querySelector(".filter-form")
			.addEventListener("change", (e) => {
				const option = this.filterByOption(this.mediaGallery, e.target.value);
				this.updatedGallery(option);
			});
	}
	clearMediaGallery() {
		this.$sectionMedia.innerHTML = "";
	}
	render() {
		const filterForm = `
        <div class="filter-form" action="#">
            <span class="filter-form__label">Trier par</span>
            <select id="filter-form__dropdown" aria-label="Order By">
                <option value="popularity">Popularité</option>
				<hr>
                <option value="date">Date</option>
				<hr>
                <option value="title">Titre</option>
            </select>
            <span class="filter-form__arrow"></span>
        </div>
        `;
		this.$wrapper.innerHTML = filterForm;
		this.onChangeFilter();
		this.$filterForm.appendChild(this.$wrapper);
	}
}