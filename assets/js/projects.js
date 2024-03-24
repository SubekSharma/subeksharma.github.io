function fetchProjectsData() {
  return fetch("assets/data/projects.json")
    .then((response) => response.json())
    .then((data) => data.projects)
    .catch((error) => console.log(error))
}

function renderProjects(projects = []) {
  const projectsListElement = document.getElementById("listOfProjects")

  projects?.forEach((project) => {
    const li = document.createElement("li")
    const imgLink = document.createElement("a")
    const titleLink = document.createElement("a")
    const img = document.createElement("img")
    const title = document.createElement("p")

    imgLink.href = project.link
    titleLink.href = project.link

    img.src = project.imgSrc
    img.alt = project.title
    img.classList.add(
      "w-80",
      "mx-auto",
      "rounded-xl",
      "h-80",
      "aspect-square",
      "object-cover"
    )

    title.classList.add(
      "text-center",
      "text-2xl",
      "text-serif",
      "text-center",
      "my-4",
      "underline",
      "underline-offset-4"
    )
    title.textContent = project.title

    li.appendChild(imgLink)
    imgLink.appendChild(img)

    li.appendChild(titleLink)
    titleLink.appendChild(title)

    projectsListElement.appendChild(li)
  })
}

fetchProjectsData().then(renderProjects)
