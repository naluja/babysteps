const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorText = formBox.querySelector(".errorText")

	formBox.classList.add("error")
	errorText.textContent = input.id + msg
}
const clearError = input => {
	const formBox = input.parentElement
	const errorText = formBox.querySelector(".errorText")

	formBox.classList.remove("error")
	errorText.textContent = ""
}
const clearAllErrors = input => {
	input.forEach(el => {
		clearError(el)
	})
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, " cannot be empty")
		} else {
			clearError(el)
		}
	})
}

const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, " is not an email")
	}
}

const passwordValidation = (password, passwordCheck) => {
	if (password.value.length < 8) {
		showError(password, " must have at least 8 characters")
	} else if (password.value !== passwordCheck.value) {
		showError(password, "S doesn't match")
		showError(passwordCheck)
	}
}
const formValidation = (input, form) => {
	let errors = 0
	input.forEach(el => {
		if (el.parentElement.classList.contains("error")) {
			errors++
		}
	})
	if (errors == 0) {
		form.submit()
	}
}
