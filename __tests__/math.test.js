const soma = require('../scripts/math')

test('testar a soma de dois números positivos', () =>{
    expect(soma(2, 2)).toBe(4)
})

test('testar a soma de dois números negativos', () =>{
    expect(soma(-2, -2)).toBe(-4)
})

test('testar a soma de um positivo e um negativo', () =>{
    expect(soma(3, -2)).toBe(1)
})

test('testar a soma de um positivo e um zero', () =>{
    expect(soma(3, 0)).toBe(3)
})