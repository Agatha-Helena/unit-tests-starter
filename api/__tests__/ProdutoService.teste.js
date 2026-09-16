const ProdutoService = require("../services/ProdutoService")

describe('ProdutoService - Testes Unitários com Mocks', () => {
    let service
	let mockRepository

    beforeEach(() => {
        mockRepository = {
            findAll: jest.fn(),
            findById: jest.fn(),
            create: jest.fn(),
            delete: jest.fn()
        }
        service = new ProdutoService(mockRepository)
    })
    describe('Listar', () => {
        test('chama repository.findAll uma vez e retorna o resultado', () => {
            const produtos = [{id: 1, nome: "Coxinha", preco: 5}]
            mockRepository.findAll.mockReturnValue(produtos)

            const resultado = service.listar()

            expect(mockRepository.findAll).toHaveBeenCalledTimes(1)
            expect(resultado).toEqual(produtos)
        })

        test('chama repository.findById e retorna o resultado', () => {
            const id = 1
            const produto = {id: 1, nome: "Coxinha", preco: 5}
            mockRepository.findById.mockReturnValue(produto)

            const resultado = service.buscarPorId(id)

            expect(mockRepository.findById).toHaveBeenCalledWith(id)
            expect(resultado).toEqual(produto)
        })
    })

    describe('Criar', () => {
        test('passa dados para criar e retorna produto criado', () => {
            const produto = {nome: 'Brigadeirao', preco: 8}
            mockRepository.create.mockReturnValue(produto)

            const resultado = service.criar(produto)

            expect(mockRepository.create).toHaveBeenCalledWith(produto)
            expect(resultado).toEqual(produto)
        })

        test('lancar erro quando os dados forem invalidos', () => {
            const produto = {preco: 3}

            expect(() => service.criar(produto)).toThrow('Dados invalidos.')
            /* dando erro */
        })
    })
    
    describe('Deletar', () => {
        /* nao finalizado */
        test('deletar o produto existente com o id correto', () => {

        })
        test('lancar erro quando o id do produto nao for encontrado', () => {
            expect().toThrow('Produto nao encontrado')
        })
    })
})