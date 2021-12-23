const form = document.querySelector('.form-email')

function formValue(event) {
    event.preventDefault()
    const name = form.querySelector('[name="email"]')
    const values = {email: name.value}
    console.log(values)
}

form.addEventListener('submit', formValue)