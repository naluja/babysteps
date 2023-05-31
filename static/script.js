// get register-form elements
const registerForm = document.querySelector(".register-form")
const registerEmail = registerForm.querySelector("#email")
const registerUsername = registerForm.querySelector("#username")
const registerPassword = registerForm.querySelector("#password")
const passwordCheck = registerForm.querySelector("#passwordCheck")
const babyName = registerForm.querySelector("#babyName")
const birthday = registerForm.querySelector("#birthday")
const error = registerForm.querySelector(".error")
const registerBtn = registerForm.querySelector(".register-btn")
const closeRegister = registerForm.querySelector("i")
// get register and log in clicks
const register = document.querySelector(".register")
const logIn = document.querySelector(".login")

// get logInForm elements
const loginForm = document.querySelector(".login-form")
const closeLogin = loginForm.querySelector("i")
const loginUsername = loginForm.querySelector("#usernameL")
const loginPassword = loginForm.querySelector("#passwordL")
const loginBtn = loginForm.querySelector(".login-btn")

// functions
const registation = e => {
	e.preventDefault()
	checkForm([
		registerEmail,
		registerUsername,
		registerPassword,
		passwordCheck,
		babyName,
		birthday,
	])
	checkEmail(registerEmail)
	passwordValidation(registerPassword, passwordCheck)
	formValidation(
		[
			registerEmail,
			registerUsername,
			registerPassword,
			passwordCheck,
			babyName,
			birthday,
		],
		registerForm
	)
}
const log = e => {
	e.preventDefault()
	checkForm([loginUsername, loginPassword])
	formValidation([loginForm, loginPassword], loginForm)
}
const hideForm = form => {
	form.style.display = "none"
}
const showForm = form => {
	form.style.display = "flex"
}

// listeners
register.addEventListener("click", () => {
	showForm(registerForm)
	hideForm(loginForm)
})
closeRegister.addEventListener("click", () => {
	hideForm(registerForm)
	clearAllErrors([
		registerEmail,
		registerUsername,
		registerPassword,
		passwordCheck,
		babyName,
		birthday,
	])
})
logIn.addEventListener("click", () => {
	showForm(loginForm)
	hideForm(registerForm)
})
closeLogin.addEventListener("click", () => {
	hideForm(loginForm)
})
registerBtn.addEventListener("click", registation)

loginBtn.addEventListener("click", log)
