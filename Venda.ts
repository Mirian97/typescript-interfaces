import { Carrinho } from "./Carrinho";

export abstract class Venda {
  carrinho: Carrinho;
  total: number;

  constructor(carrinho: Carrinho) {
    this.carrinho = carrinho;
    this.total = this.calcularTotal();
  }

  private calcularTotal(): number {
    let total = 0;
    for (let item of this.carrinho.resumo()) {
      total += item.valor * item.quantidade;
    }
    return (this.total = total);
  }

  abstract finalizarCarrinho(): string;
}
