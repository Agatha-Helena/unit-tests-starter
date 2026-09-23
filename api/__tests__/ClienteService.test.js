const ClienteService = require("../services/ClienteService");

// Teste unitario: o service e testado em isolamento total.
// O repository e substituido por um mock (jest.fn()), assim testamos so a
// logica do service, sem depender de dados reais.
//
// Abaixo ha 1 teste pronto (listar) como referencia de estilo.
// Os demais estao como test.todo — implemente cada um seguindo o ENUNCIADO-02-CLIENTES.md.

describe("ClienteService (unitario com mocks)", () => {
  let service;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    service = new ClienteService(mockRepository);
  });

  describe("listar", () => {
    test("chama repository.findAll uma vez e retorna o resultado", () => {
      const clientes = [{ id: 1, nome: "Ana Souza", email: "ana@email.com" }];
      mockRepository.findAll.mockReturnValue(clientes);

      const resultado = service.listar();

      expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual(clientes);
    });
  });

  describe("buscarPorId", () => {
    test("repassa o id ao repository e retorna o cliente encontrado", () => {
      const id = 1
      const cliente = {id: 1, nome: 'Ana Souza0', email: 'ana@email.com'}
      mockRepository.findById.mockReturnValue(cliente)

      const resultado = service.buscarPorId(id)

      expect(mockRepository.findById).toHaveBeenCalledWith(id);
      expect(resultado).toEqual(cliente)
    });
    test("lanca erro 'Cliente nao encontrado' quando o repository retorna null", () => {
      const id = 1034793

      mockRepository.findById.mockReturnValue(null)

      expect(() => service.buscarPorId(id)).toThrow('Cliente nao encontrado')
      expect(mockRepository.findById).toHaveBeenCalledWith(id)
    });
  });

  describe("criar", () => {
    test("repassa os dados ao repository e retorna o cliente criado", () => {
      const cliente = {nome: 'Ana', email: 'ananas@email.com'}
      mockRepository.create.mockReturnValue(cliente)

      const resultado = service.criar(cliente)

      expect(mockRepository.create).toHaveBeenCalledWith(cliente)
      expect(resultado).toEqual(cliente)
    });
    test("propaga o erro quando nome ou email estiverem faltando", () => {
      const cliente = {nome: 'Anna'}
      mockRepository.create.mockImplementation(() => {
        throw new Error('Nome e email sao obrigatorios')
      })

      expect(() => service.criar(cliente)).toThrow('Nome e email sao obrigatorios')
      expect(mockRepository.create).toHaveBeenCalledWith(cliente)
    });
    test.todo("propaga o erro quando o email ja estiver cadastrado", () => {
      const cliente = {
        nome: 'Anna',
        email: 'ana@email.com'
      }

      mockRepository.create.mockImplementation(() => {
        throw new Error('Email ja cadastrado')
      })

      expect(() => service.criar(cliente)).toThrow('Email ja cadastrado')
      expect(mockRepository.create).toHaveBeenCalledWith(cliente)
    });
  /* });

  describe("atualizar", () => {
    test.todo("chama repository.findById e repository.update quando o cliente existe", () => {

    });
    test.todo("lanca erro 'Cliente nao encontrado' sem chamar repository.update quando o cliente nao existe", () => {

    });
    test.todo("propaga o erro quando o novo email ja pertence a outro cliente", () => {

    });
  });

  describe("remover", () => {
    test.todo("chama repository.delete com o id correto quando o cliente existe", () => {

    });
    test.todo("lanca erro 'Cliente nao encontrado' quando o repository retorna false", () => {

    }); */
  });
});