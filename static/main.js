const toothForm = document.querySelector(".tooth-form")
const toothInput = toothForm.querySelector("#tooth")
const toothDate = toothForm.querySelector("#eruption")
const toothBtn = toothForm.querySelector(".tooth-btn")
// get sleep form elements
const sleepForm = document.querySelector(".sleep-form")
const napStart = sleepForm.querySelector("#napstart")
const napEnd = sleepForm.querySelector("#napend")
const sleepBtn = sleepForm.querySelector(".sleep-btn")

// get meals form elements
const mealsForm = document.querySelector(".meals-form")
const mealType = mealsForm.querySelector("#mealType")
const mealInput = mealsForm.querySelector("#meal")
const mealTime = mealsForm.querySelector("#mealTime")
const mealBtn = mealsForm.querySelector(".meals-btn")

// get meds form elements
const medsForm = document.querySelector(".meds-form")
const medInput = medsForm.querySelector("#med")
const medTime = medsForm.querySelector("#medTime")
const dose = medsForm.querySelector("#dose")
const medsBtn = medsForm.querySelector(".med-btn")
// tooth form validation
const toothSubmit = e => {
	e.preventDefault()
	checkForm([toothInput, toothDate])
	formValidation([toothInput, toothDate], toothForm)
}
// sleep form validation
const sleepSubmit = e => {
	e.preventDefault()
	checkForm([napStart, napEnd])
	formValidation([napStart, napEnd], sleepForm)
}
const mealsSubmit = e => {
	e.preventDefault()
	checkForm([mealType, mealInput, mealTime])
	formValidation([mealType, mealInput, mealTime], mealsForm)
}
const medsSubmit = e => {
	e.preventDefault()
	checkForm([medInput, medTime, dose])
	formValidation([medInput, medTime, dose], medsForm)
}

toothBtn.addEventListener("click", toothSubmit)
sleepBtn.addEventListener("click", sleepSubmit)
mealBtn.addEventListener("click", mealsSubmit)
medsBtn.addEventListener("click", medsSubmit)
