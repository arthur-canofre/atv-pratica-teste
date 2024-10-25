
var users = []

function addUser(nome, active){
    var user ={
        id: users.length,
        nome: nome,
        active: active
    }
    users.push(user)
    return users
}

function getUser(id){
    return users[id]
}



module.exports = { addUser, getUser, users }