const { soma, subtrai, multiplica, divide, ehPar, raiz, media } = require("./calculadora")

describe("soma", () => {
    test("Soma com dois números positivos", () => {
        expect(soma(2, 3)).toBe(5)
    })
})

describe("raiz", () => {
    test("Calcule a raiz de um numero nao exato com precisao", () => {
        expect(raiz(2)).toBeCloseTo(1.414)
    })
    test ("Lançar erro para numero negativo", () => {
        expect(() => raiz(-4)).toThrow("Nao e possivel calcular raiz de numero negativo")
    })
})

describe("subtrai", () => {
    test ("Subtraia dois números positivos", () => {
        expect(subtrai(3, 2)).toBe(1)
    })
    test ('Retornar numero negativo', () => {
        expect(subtrai(2, 3)).toBe(-1)
    })
})

describe("multiplica", () => {
    test("Multiplique dois números positivos", () => {
        expect(multiplica(3, 0)).toBe(0)
    })
})

describe("divide", () => {
    test("Divida dois números positivos", () => {
        expect(divide(3, 2)).toBeCloseTo(1.5)
    })
    test("Lançar erro para divisão por 0", () => {
        expect(() => divide(1, 0)).toThrow("Nao e possivel dividir por zero")
    })
})

describe("ehPar", () => {
    test("Verifique se o número é par", () => {
        expect(ehPar(2)).toBe(true)
    })
})

describe("media", () => {
    test("Calcula a media de numeros positivos", () => {
        expect(media)
    })
})