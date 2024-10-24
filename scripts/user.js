
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

function ativos(){
    var actives = 0
    users.filter((element) => element.active? actives++: null)
    return actives
}

module.exports = { addUser, getUser, ativos }