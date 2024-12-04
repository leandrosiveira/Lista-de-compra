const form = document.querySelector("form")
const section = document.querySelector("section")
const item = document.querySelector("input")
const addItem = document.getElementById("add-item")
const deleteImg = document.querySelector('img[src="style/assets/icons/delete.png"][alt="Icone de delete"]')
const deleteItem = document.querySelector(".item")
const infoDeleted = document.querySelector(".display-none")



form.addEventListener("submit", (event) => {
  event.preventDefault()

  const div = document.createElement("div")
  div.classList.add("item")
  
  const input = document.createElement("input")
  input.setAttribute('type', 'checkbox')
  input.setAttribute('name', 'item')
  
  const nameItem = document.createElement("p")
  nameItem.textContent = item.value

  const deleteImg = document.createElement('img')
  deleteImg.setAttribute('src', 'style/assets/icons/delete.png')
  deleteImg.setAttribute('alt', 'Icone de delete')
  
  div.append(input, nameItem, deleteImg)
  section.prepend(div)

  addItem.value = ""
})


section.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const itemDeleted = event.target.closest("div")
    itemDeleted.remove()

    infoDeleted.classList.remove("display-none")
  }
})

