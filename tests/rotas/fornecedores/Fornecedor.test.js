/* eslint-disable no-undef */
jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor.js')

describe('classe Fornecedor', () => {
  it('O método validar() retorna true', async () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    expect(fornecedor.validar()).toBe(true)
  })

  test('O metódo criar() foi executado com sucesso', async () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    await fornecedor.criar()

    expect(fornecedor.id).toBe(500)
    expect(fornecedor.dataCriacao).toBe('10/12/2023')
    expect(fornecedor.dataAtualizacao).toBe('10/12/2023')
  })
})
