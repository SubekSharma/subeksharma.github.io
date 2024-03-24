function fetchPersona() {
  return fetch("assets/data/persona.json")
    .then((res) => res.json())
    .then((data) => data)
}

function renderPersona(persona) {
  const phoneNodes = document.querySelectorAll("[renderitem = 'phone'")
  const emailNodes = document.querySelectorAll("[renderitem = 'email'")
  const firstNameNodes = document.querySelectorAll("[renderitem = 'firstName'")
  const lastNameNodes = document.querySelectorAll("[renderitem = 'lastName'")
  const fullNameNodes = document.querySelectorAll("[renderitem = 'fullName'")
  const aboutNodes = document.querySelectorAll("[renderitem = 'about'")

  phoneNodes.forEach((node) => (node.textContent = persona.phone))
  emailNodes.forEach((node) => (node.textContent = persona.email))
  firstNameNodes.forEach((node) => (node.textContent = persona.firstName))
  lastNameNodes.forEach((node) => (node.textContent = persona.lastName))
  fullNameNodes.forEach(
    (node) => (node.textContent = `${persona.firstName} ${persona.lastName}`)
  )
  aboutNodes.forEach((node) => (node.textContent = persona.about))

  const researchSectionText = document.querySelectorAll(
    "[renderitem = 'researchSectionText'"
  )
  researchSectionText.forEach(
    (node) => (node.textContent = persona.researchSectionText)
  )
}

fetchPersona().then(renderPersona)
