

let errorTextVisible = false;
const error = document.querySelector('.error-text')
const btn = document.querySelector('.btn');


function validateEmail(event) {
	event.preventDefault();
	const emailInput = event.currentTarget.querySelector('#email');

	if (!emailInput.checkValidity()) {
		errorTextVisible = true;
		error.classList.add('error-text-active')
		btn.classList.add('icon-error-active');

	} else {
		errorTextVisible= false;
		error.classList.remove('error-text-active')
	
		event.currentTarget.submit();
	}
}