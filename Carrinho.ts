export type Produto = {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  quantidade: number;
};

export class Carrinho {
  private produtos: Produto[];

  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  removerProduto(idProduto: number) {
    const produtoEncontrado = this.produtos.findIndex(
      (produto) => produto.id === idProduto
    );
    if (produtoEncontrado < 0) {
      return "Produto não encontrado";
    }
    this.produtos.splice(produtoEncontrado, 1);
    return "Produto removido com sucesso";
  }

  alterarQuantidade(idProduto: number, quantidade: number): string {
    const produtoEncontrado = this.produtos.findIndex(
      (produto) => produto.id === idProduto
    );
    if (produtoEncontrado < 0) {
      return "Produto não encontrado";
    }
    this.produtos[produtoEncontrado].quantidade = quantidade;
    return "Quantidade do produto alterada com sucesso";
  }

  resumo(): Produto[] {
    return this.produtos;
  }
}
