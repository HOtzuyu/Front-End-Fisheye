/**
 * @class modal bottom right for show a total of likes and photographer's price
 * @description use on the photographer's page
 */
class PhotographerFooter extends Photographer {
	constructor(photographer, media) {
		super(photographer);
		this._likes = media.likes;
	}
	/**
	 * @returns {string} html elements for display footer likes
	 */
	renderFooter() {
		return `
          <div class="sticky-footer-likes">
              <h2 class="total-likes">${this.totalLikes()}</h2>
              <i class="fa-solid fa-heart fa-lg"></i>
          </div>
          <h3>${this.price}</h3>
          `;
	}
	/**
	 * 
	 * @returns {number} total of likes
	 */
	totalLikes() {
		const $allLikesCounter = document.querySelectorAll(".footer-like-counter");
		let allLikes = [];
		$allLikesCounter.forEach((like) => {
			allLikes.push(parseInt(like.textContent));
		});
  
		const totalLikes = allLikes.reduce((a, b) => {
			return a + b;
		});
  
		return totalLikes;
	}
	/**
	 * @description check if the user like a picture and add to the total
	 */
	likeHandler() {
		const $galleryFooterLikes = document.querySelectorAll(
			".gallery-footer-like"
		);  
		$galleryFooterLikes.forEach((item) => {
			item.addEventListener("click", () => {
				const $footerLikeCounter = item.querySelector(".footer-like-counter");
				const $heartIcon = item.querySelector(".heart-icon");
				let likeSum = parseInt($footerLikeCounter.textContent);
  
				if ($heartIcon.classList.contains("fas")) {
					$heartIcon.classList.remove("fas");
					$footerLikeCounter.innerHTML = --likeSum;
				} else {
					$heartIcon.classList.add("fas");
					$footerLikeCounter.innerHTML = ++likeSum;
				}  
				document.querySelector("h2.total-likes").innerText = this.totalLikes();
			});
		});
	}
}