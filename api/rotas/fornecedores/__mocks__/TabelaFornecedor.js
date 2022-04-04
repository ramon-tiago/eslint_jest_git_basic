module.exports = {
  listar () {
    return [true]
  },
  inserir (fornecedor) {
    return {
      id: 500,
      dataCriacao: '10/12/2023',
      dataAtualizacao: '10/12/2023'
    }
  },
  async pegarPorId (id) {
    return true
  },
  atualizar (id, dadosParaAtualizar) {
    return true
  },
  remover (id) {
    return true
  }
}
