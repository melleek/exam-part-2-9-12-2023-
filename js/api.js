import { getData } from "./dom.js"

let api = "http://localhost:3000/data"

async function get() {
    try {
        const { data } = await axios.get(api)
        getData(data)
    }
    catch (err) {
        console.log(err);
    }
}

//add user
async function addUser (newObj) {
    try {
        const { data } = await axios.post(`${api}`, newObj);
        
        get();
    }
    catch (e) {
        console.log(e)
    }
}

//delete user
async function deleteUser (id) {
    try {
        const { data } = await axios.delete(`${api}/${id}`);
        get();
    } catch (e) {
        console.log(e);
    }
}

//edit
async function editUser(id,user) {
    try {
        const { data } = await axios.put(`${api}/${id}` , user);
        get();
    }
    catch (error) {
        console.log(error)
    }
}

export { get, deleteUser, addUser, editUser }