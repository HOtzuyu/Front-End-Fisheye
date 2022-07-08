/**
 * @async wait information for display and buid all elements on the  photgrapher.html
 * @description use on the photographer page
 */
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
	/**********************************************************************************************/
	/*************Header based on selected photographer's id*****************************************/
	/**********************************************************************************************/
	let userHeader = new Photographer(selectedPhotographer);
	$photographerHeader.innerHTML += userHeader.renderHeader();
	/**********************************************************************************************/
	/*******************Gallery based on selected photographer's id**********************************/
	/**********************************************************************************************/
	const mediaGallery = media.filter(
		(media) => media.photographerId == photographId
	);
	mediaGallery.forEach((media) => {
		//console.log(media);
		const allMedias = new MediaFactory(media);
		$sectionMedia.innerHTML += allMedias.renderMedia();
	});
	/**********************************************************************************************/
	/************************************Filtered Gallery*******************************************/
	/**********************************************************************************************/
	const FilteredGallery = new FilterForm(mediaGallery);
	FilteredGallery.render();
	/**********************************************************************************************/
	/***********************************Lightbox*****************************************************/
	/**********************************************************************************************/
	lightbox = new Lightbox(mediaGallery);
	const openLightboxOnClick = () => {
		document
			.querySelectorAll("#section-media .gallery-med")
			.forEach((galleryCard) => {
				galleryCard.addEventListener("click", (e) => {
					lightbox.show(e.currentTarget.dataset.id);
				});
			});
	};
	openLightboxOnClick();
	const openLightboxOnKeypress = () => {
		document
			.querySelectorAll("#section-media .gallery-med")
			.forEach((galleryCard) => {
				galleryCard.addEventListener("keypress", (e) => {
					if (e.key === "Enter") {
						lightbox.show(e.currentTarget.dataset.id);
					}
				});
			});
	};
	openLightboxOnKeypress();
	/**********************************************************************************************/
	/******************************************Contact Modal****************************************/
	/**********************************************************************************************/
	let contactModal = new ContactForm(selectedPhotographer);
	contactModal.render();
	/**********************************************************************************************/
	/******************************************************Account Footer*****************************/
	/**********************************************************************************************/
	photographerFooter = new PhotographerFooter(
		selectedPhotographer,
		mediaGallery
	);
	$photographerFooter.innerHTML += photographerFooter.renderFooter();
	photographerFooter.likeHandler();
}
async function init() {
	await displayPhotographersPage();
}
init();