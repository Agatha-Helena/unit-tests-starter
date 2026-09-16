const request = require('supertest')
const createApp = require('../app')

describe('API /produtos - testes de integracao', () => {
    let app

    beforeEach(() => {
        app = createApp()
    })

    describe('GET /produtos', () => {
        test('retorna 200 e um array com os produtos iniciais', async () => {
            const res = await request(app).get('/produtos')

            expect(res.status).toBe(200)
            expect(Array.isArray(res.body)).toBe(true)
            expect(res.body.length).toBe(3)
        })

        test('retorna 200 e um produto com o id específico', async () => {
            const res = await request(app).get('/produtos/2')

            expect(res.status).toBe(200)
        })

    //Criar caso de teste do GET /produtos/:id
    })
})