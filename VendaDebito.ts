import { Carrinho } from "./Carrinho";
import { IVenda } from "./IVenda";
import { Venda } from "./Venda";

export class VendaDebito extends Venda implements IVenda {
  readonly desconto: number;

  constructor(carrinho: Carrinho) {
    super(carrinho);
    this.desconto = 0.07;
  }

  aplicarDesconto(): void {
    this.total = this.total + this.total * this.desconto;
  }

  finalizarCarrinho(): string {
    return `Pedido finalizado. Total: R$ ${(this.total / 100).toFixed(2)}`;
  }
}
