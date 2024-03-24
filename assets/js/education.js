const bgIconAlt = "Purple Circle"
const bgIconUrl = "assets/images/purple_circle_filled.svg"

function fetchEducationData() {
  return fetch("assets/data/education.json")
    .then((res) => res.json())
    .then((data) => data.education)
}

function renderEducation(education) {
  const educationListEl = document.getElementById("educationList")

  education.map((item) => {
    const educationItem = `
 <div class="flex flex-col h-[400px] w-full  py-4">
    <div class="relative flex items-center justify-center">
      <img
        src=${bgIconUrl}
        alt=${bgIconAlt}
        class="h-24 w-24"
      />
      <img
        src=${item.iconUrl}
        alt=${item.iconAlt}
        class="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] w-10 h-10 z-50"
      />

   </div>

     <div class="text-2xl flex-1 border-b-2 border-[#5e17eb] text-serif flex items-center justify-center text-center">
       <h3  class="text-serif">

      ${item.degree}
      </h3>
     </div>

    <div class="font-semibold h-[100px] flex flex-col  text-sm text-center">
      <p class="flex-1 flex items-center justify-center">
       ${item.institution}
     </p>
       <p class="text-sm text-center">${item.year}</p>
     </div>

 </div> 
 `

    const containerEl = document.createElement("div")
    containerEl.className = ""

    containerEl.innerHTML = educationItem

    educationListEl.appendChild(containerEl)
  })
}

fetchEducationData().then(renderEducation)
