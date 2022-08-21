function displayModal() {
  const modal = document.getElementById('contact_modal')
  const main = document.querySelector('main')
  const section = document.querySelector('.medias-container')
  const countContainer = document.querySelector('.count-container')
  const  body = document.querySelector('body')
  body.classList.add('no-scroll')
  main.setAttribute('aria-hidden', 'true')
  countContainer.setAttribute('aria-hidden', 'true')
  section.setAttribute('aria-hidden', 'true')
  main.setAttribute('tabindex', '-1')
  section.setAttribute('tabindex', '-1')
  modal.setAttribute('aria-hidden', 'false')
  modal.setAttribute('tabindex', '1')
  
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
  modal.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
  const modalTitle = document.querySelector('.modal-title')
  const headingName = document.querySelector('.heading-name').textContent
  modalTitle.innerHTML = `Contactez moi </br> ${headingName}`
}

function closeModal() {
  const main = document.querySelector('main')
  const modal = document.getElementById('contact_modal')
  const section = document.querySelector('.medias-container')
  const countContainer = document.querySelector('.count-container')
  main.setAttribute('aria-hidden', 'false')
  countContainer.setAttribute('aria-hidden', 'false')
  section.setAttribute('aria-hidden', 'false')
  main.setAttribute('tabindex', '1')
  section.setAttribute('tabindex', '1')
  modal.setAttribute('aria-hidden', 'true')
  

  const  body = document.querySelector('body')
  body.classList.remove('no-scroll')
  modal.style.display = 'none'
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

const keydownpressed = 'keydown'
// when the user press escape key, close the modal
document.addEventListener(keydownpressed, (e) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}
)
