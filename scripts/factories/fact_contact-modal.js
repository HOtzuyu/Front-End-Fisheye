/**
 * @class create the contact form in photographer page
 * @description use on the photographer's page
 */
class ContactForm {
	/** 
	 * @param {json} photographer 
	 */
	constructor(photographer) {
		this.photographer = photographer;
	}
	/**
	 * @return {function} return all functions for creat the form
	 */
	render() {
		this.createModal();
		this.displayModal();
		this.closeModal();
		this.formValidation();
	}
	/**
	 * 
	 * @returns {string} add the form in the HTML
	 */
	createModal() {
		const $modalWrapper = document.querySelector("#contact_modal");
		const modal = `
          <div class="modal">
              <div class="content">
                <div class="header-modal">
                    <h2 id="contactez-moi">Contactez-moi : <br>${this.photographer.name}</h2>
                    <span class="close"></span>
                </div>
                <div class="modal-body">
                    <form id="contactForm">
                        <div class="formData">
                            <label>Prénom*</label><br>
                            <input class="text-control" type="text" id="last" name="last" autocomplete="off"
                                placeholder="Votre prènom"  required="required" >
                        </div>
                        <div class="formData">
                            <label>Nom*</label><br>
                            <input class="text-control" type="text" id="first" name="first" autocomplete="off"
                                placeholder="Votre nom"  required="required" >
                        </div>
                        <div class="formData">
                            <label>E-mail*</label><br>
                            <input class="text-control" type="email" id="email" name="email" autocomplete="off"
                                placeholder="Votre adresse e-mail"  required="required">
                        </div>
                        <div class="formData">
                            <label>Votre message</label><br>
                            <textarea id="msg" class="text-msg"  name="msg" autocomplete="off" placeholder="Votre message"></textarea>
                        </div>
                        <input type="submit" value="Envoyer" class="contact_button" aria-label="Envoyer votre message">
                    </form>                
                </div>
          </div>
          `;
		$modalWrapper.innerHTML = modal;
		return $modalWrapper;
	}
	/**
	 * @description display modal on click of the button contact 
	 */
	displayModal() {
		const contactBtn = document.querySelector(".contact_button-open");
		contactBtn.addEventListener("click", () => {
			const modal = document.getElementById("contact_modal");
			modal.style.display = "flex";
			modal.setAttribute("aria-hidden", "false");
			modal.classList.remove("visuallyhidden");
			modal.classList.add("center");
		});
	}
	/**
	 * @description close modal on click of the cross
	 */
	closeModal() {
		const closeBtn = document.querySelector(".close");
		closeBtn.addEventListener("click", () => {
			const modal = document.getElementById("contact_modal");
			modal.classList.add("visuallyhidden");
			modal.setAttribute("aria-hidden", "true");
		});
	}
	/**
	 * @description check all the form's fields
	 */
	formValidation() {
		const submitBtn = document.querySelector(".contact_button");
		submitBtn.addEventListener("click", (e) => {
			/**
			 * @param {string} inputs.value
			 * @param {string} message.value
			 * @description verifie if the field is NOT empty (firstname, lastname, email and message), write in the console.log the informations and clear the for if all OK. 
			 * Else add border for error fields.
			 */
			e.preventDefault();
			let inputs = document.querySelectorAll("input");
			let message = document.querySelector("textarea");
			const contactForm = document.querySelector("#contactForm");
			
			if (inputs.value != "" && message.value != "") {
				inputs.forEach((input) => {
					console.log(input.value);
				});
				console.log(message.value);
				const modal = document.getElementById("contact_modal");
				modal.classList.add("visuallyhidden");
				modal.setAttribute("aria-hidden", "true");
				contactForm.reset();
			}else {
				const formData = document.querySelectorAll(".formData");
				for (var i = 0; i < formData.length; i++) {
					console.log(formData[i].children[2].value);
					if (formData[i].children[2].value === "") {
						formData[i].setAttribute("data-error-visible", "true");
					} else {
						formData[i].setAttribute("data-error-visible", "false");
					}
				}
				console.log("Veuillez renseigner tous les champs du formulaire");
			}
		});
	}
}