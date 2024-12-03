// const section = document.querySelector("section")

// const div = document.querySelector("div.item")

// const input = document.querySelector("input[type=checkbox][name=item]")
// const item = document.getElementById("add_item")
// const nameItem = document.querySelector("p")
// const deleteImg = document.querySelector('img[src="style/assets/icons/delete.png"][alt="Icone de delete"]')

// newItem.append(input, nameItem, deleteImg)
// section.prepend(div)

// nameItem.textContent = "Saco de Lixo"
// console.log(section.innerHTML)
const button = document.querySelector("button")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const newItem = {
    newItem: input.value,
  }
  const section = document.querySelector("section")
  
  const div = document.querySelector("div.item")
 
  
  const input = document.querySelector("input[type=checkbox][name=item]")
  const item = document.getElementById("add_item")
  const nameItem = document.querySelector("p")
  const deleteImg = document.querySelector('img[src="style/assets/icons/delete.png"][alt="Icone de delete"]')
  
  nameItem.textContent = this.newItem
  div.append(input, nameItem, deleteImg)
  section.prepend(div)
})
