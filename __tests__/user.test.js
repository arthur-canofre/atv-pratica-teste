const functions = require('../scripts/user')
const soma = require('../scripts/math')

test('testar a função addUser', () => {
    expect(functions.addUser('Pedro', true)).toStrictEqual([{id: 0, nome: 'Pedro', active: true}])
})

test('testar a função getUser', () => {
    expect(functions.getUser(0)).toStrictEqual({id: 0, nome: 'Pedro', active: true})
})


test('testar a soma de usuarios ativos', () => {
    var  ativos = 0
    for(var i = 0; i < functions.users.length; i++){
        if(functions.getUser(i).active){
            ativos = soma(ativos, 1)
        }
    }
    expect(ativos).toBe(1)
})