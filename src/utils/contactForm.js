function displayModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  modal.style.width = '100%'
  modal.style.height = '100vh'
  modal.style.position = 'fixed'
  modal.style.top = '0'
  modal.style.left = '0'
  modal.style.right = '0'
  modal.style.bottom = '0'
  modal.style.margin = '0'
  modal.style.padding = '50px'
  modal.style.border = '1px solid #ccc'
  modal.style.borderRadius = '10px'
  modal.style.backgroundColor = 'white'
  const modalTitle = document.querySelector('.modal-title')
  const headingName = document.querySelector('.heading-name').textContent

  modalTitle.innerText += ` ${headingName}`
}

function closeModal() {
  const modal = document.getElementById('contact_modal')
  const modalTitle = document.querySelector('.modal-title')
  modal.style.display = 'none'
  modalTitle.innerHTML = 'Contactez-moi'
}

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const firstname = document.getElementById('firstname').value
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const formData = new FormData()
  formData.append('firstname', firstname)
  formData.append('name', name)
  formData.append('email', email)
  formData.append('message', message)
  // show data from form data in console
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`)
  }
  closeModal()
})
