let btn = document.querySelector("#btn")
let inputed = document.querySelector("#inptone")
let add = document.querySelector(".addtodo")
let update = document.querySelector("#update")
let checkall = document.querySelector("#checkall")
let deleted = document.querySelector("#delete")
let selected = ""
btn.addEventListener("click",function(){
let createtext = document.createTextNode(inputed.value)
if(inputed.value===""){
    alert("error")
}
else{
inputed.value=""

let createbox = document.createElement("div")
createbox.className = "box";
let left = document.createElement("div")
left.className = "left"
let checkbox = document.createElement("input")
checkbox.type = "checkbox"
left.appendChild(checkbox)
left.appendChild(createtext)
let icon = document.createElement('i');
icon.className = 'fa-solid fa-trash right';
let edit = document.createElement("i")
edit.className = 'fa-solid fa-pen-to-square'
createbox.appendChild(left)
createbox.appendChild(icon)
createbox.appendChild(edit)
   add.appendChild(createbox)
icon.addEventListener("click",function(elem){
    let removeElem = elem.target.parentNode
    removeElem.remove()
})
edit.addEventListener("click",function(e){
inputed.value = e.target.parentNode.childNodes[0].innerText
selected = e.target.parentNode.children[0]
update.style.display = "block"
btn.style.display = "none"
})
update.addEventListener("click",function(){
    selected.innerText = inputed.value
    update.style.display = "none"
btn.style.display = "block"
checkbox.style.display = "block"
})

checkall.addEventListener("click", function(e) {
    const checkboxes = document.querySelectorAll('.box input[type="checkbox"]'); 
    const isChecked = e.target.checked;  
    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked; 
        deleted.addEventListener("click",function(){
        if(isChecked){
        checkbox.parentElement.parentElement.remove()
        }   
        else{
            checkall = false
        }
        })
    });
});
checkbox.addEventListener("click",function(e){
    deleted.addEventListener("click",function(){
        let checking = e.target.checked
        if(checking){
        e.target.parentElement.parentElement.remove()
        }
    })

})

}
})