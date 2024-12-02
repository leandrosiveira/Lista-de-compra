const section = document.querySelector("section")

const newItem = document.querySelector("div.item")

const input = document.querySelector("input[type=checkbox][name=item]")
const item = document.getElementById("add_item")
const nameItem = document.querySelector("p")
const deleteImg = document.querySelector('img[src="style/assets/icons/delete.png"][alt="Icone de delete"]')

newItem.append(input, nameItem, deleteImg)
section.prepend(newItem)

// nameItem.textContent = "Saco de Lixo"
// console.log(section.innerHTML)
const button = document.querySelector("button")

button.addEventListener("click", (event) => {
  event.preventDefault()
  nameItem.textContent = item.value
})
