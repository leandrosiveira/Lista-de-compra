const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const section = document.querySelector("section")
  
  const div = document.createElement("div")
  div.classList.add("item")
  
  const input = document.createElement("input")
  input.setAttribute('type', 'checkbox')
  input.setAttribute('name', 'item')
  
  const nameItem = document.createElement("p")
  const item = document.querySelector("input")
  nameItem.textContent = item.value

  
  const deleteImg = document.createElement('img')
  deleteImg.setAttribute('src', 'style/assets/icons/delete.png')
  deleteImg.setAttribute('alt', 'Icone de delete')
  
  div.append(input, nameItem, deleteImg)
  section.prepend(div)

  const addItem = document.getElementById("add-item")
  addItem.value = ""
})
