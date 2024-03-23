document.getElementById("menuBtn").addEventListener("click", function () {
  console.log("Menu Button Clicked")
  document.getElementById("verticalMenu").classList.remove("hidden")
  document.getElementById("closeMenuBtn").classList.remove("hidden")
  // document.getElementById("menuBtn").classList.add("hidden")
})

document.getElementById("closeMenuBtn").addEventListener("click", function () {
  console.log("Close Menu Button Clicked")
  document.getElementById("verticalMenu").classList.add("hidden")
  document.getElementById("closeMenuBtn").classList.add("hidden")
  // document.getElementById("menuBtn").classList.remove("hidden")
})
