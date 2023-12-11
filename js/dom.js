import { deleteUser, addUser, editUser} from "./api.js"

let box = document.querySelector('.box');

//add 
let btnAdd = document.querySelector(".add")
let dialogAdd = document.querySelector(".addDialog")
let addBtn = document.querySelector(".addbtn")
let form1 = document.querySelector(".formADD")

//edit 
let edit = document.querySelector(".edit")
let editDialog = document.querySelector(".editDialog")
let form2 = document.querySelector(".form2")


//add code 
btnAdd.onclick = () => {
    dialogAdd.showModal()
}

form1.onsubmit = (event) => {
    event.preventDefault();

    let newObj = {
        name: form1["name"].value,
        street: form1["street"].value,
        home: form1["home"].value,
        sum: form1["sum"].value,
        delete: "",
        edit: "",
        completed: false,
    };
    addUser(newObj);
}

addBtn.onclick = () =>{
    dialogAdd.close()
}

//edit 
let idx = null;

form2.onsubmit = (event) => {
    event.preventDefault()

    let user = {
        name: form2["name"].value,
        street: form2["street"].value,
        home: form2["home"].value,
        sum: form2["sum"].value,
        delete: "",
        edit: "",
        completed: false
    };
    editUser(idx, user)
}

edit.onclick = () => {
    editDialog.close();
}



function getData (data) {

    box.innerHTML = " ",

    data.forEach((item) => {

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = item.name

        let td2 = document.createElement("td");
        td2.innerHTML = item.street

        let td3 = document.createElement("td");
        td3.innerHTML = item.home

        let td4 = document.createElement("td");
        td4.innerHTML = item.sum 

        let td5 = document.createElement("td");
        td5.innerHTML = item.delete

        let img = document.createElement("img");
        img.src = "icons/icons8-мусор-64.png"
        img.style.width = "40%";

        let td6 = document.createElement("td");
        td6.innerHTML = item.edit

        let img1 = document.createElement("img");
        img1.src = "icons/icons8-редактировать-64 (1).png"
        img1.style.width = "40%";



        /*delete*/
        img.onclick  = () => {
            deleteUser(item.id);
        }

        /*edit*/
        img1.onclick = () => {

            editDialog.showModal() 

            idx = item.id

            form2["name"].value = item.name
            form2["street"].value = item.street
            form2["home"].value = item.home
            form2["sum"].value = item.sum
        }


        td5.appendChild(img)
        td6.appendChild(img1)
        tr.append(td1, td2, td3, td4, td5, td5, td6);
        box.appendChild(tr);
    })
}


export { getData }