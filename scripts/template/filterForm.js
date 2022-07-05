class FilterForm {
  constructor(mediaGallery) {
    this.mediaGallery = mediaGallery;

    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("filter-form__wrapper");
    this.$filterForm = document.querySelector(".filter");
    this.$sectionMedia = document.querySelector("#section-media");
  }


  render() {
    const filterForm = `
        <div class="filter-form" action="#">
            <span class="filter-form__label">Trier par</span>
            <select id="filter-form__dropdown" aria-label="Order By">
                <option value="default">Par défaut</option>
                <option value="popularity">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
            </select>
            <span class="filter-form__arrow"></span>
        </div>
        `;

    this.$wrapper.innerHTML = filterForm;
    this.$filterForm.appendChild(this.$wrapper);
    const filterDrop = document.querySelector("#filter-form__dropdown");
    console.log(filterDrop.value) ;

    console.log(this.mediaGallery[2].likes);
  }
}
