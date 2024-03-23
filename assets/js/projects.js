const projectsList = document.getElementById("listOfProjects")

const projects = [
  {
    title: "Pneumonia Detection",
    imgSrc: "assets/images/pneumonia_detection.jpg",
    link: "https://subek-pneumonia.hf.space/",
  },
  {
    title: "Brain Tumor Segmentation",
    imgSrc: "assets/images/brain_tumor_segmentation.jpg",
    link: "https://subek-brain-tumor.hf.space/",
  },
  {
    title: "Face Landmarks Detection",
    imgSrc: "assets/images/face_landmarks_detection.png",
    link: "https://github.com/SubekSharma/Face_Landmarks_Detection",
  },
  {
    title: "Landmarks Recognition System",
    imgSrc: "assets/images/landmark_recognition.jpg",
    link: "https://github.com/Gantavya-app",
  },
]

projects.forEach((project) => {
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

  projectsList.appendChild(li)
})
