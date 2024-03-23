import data from "../data/education.json" assert { type: "json" }

const { education } = data

const bgIconAlt = "Purple Circle"
const bgIconUrl = "assets/images/purple_circle_filled.svg"

const educationListEl = document.getElementById("educationList")

education.map((item) => {
  const educationItem = `
 <div class="relative mx-auto">
   <img
     src=${bgIconUrl}
     alt=${bgIconAlt}
     class="h-24 w-24"
   />
   <img
     src=${item.iconUrl}
     alt=${item.iconAlt}
     class="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] w-10 h-10"
   />
 </div>

 <h3 class="text-2xl text-serif text-center">
  ${item.degree}
 </h3>

 <div class="border rounded-full w-full border-indigo-500"></div>
 <p class="font-semibold text-sm text-center">
    ${item.institution}
 </p>
 <p class="text-sm text-center">Nov 2019 - Apr 2024</p>
</div>`

  const containerEl = document.createElement("div")
  containerEl.className = "grid grid-cols-1 items-center gap-4"

  containerEl.innerHTML = educationItem

  educationListEl.appendChild(containerEl)
})

console.log(education, educationListEl)
