import { Carrinho } from "./Carrinho";
import { VendaCredito } from "./VendaCredito";
import { VendaDebito } from "./VendaDebito";

const carrinho = new Carrinho();
carrinho.adicionarProduto({
  id: 1,
  descricao: "armario",
  categoria: "moveis",
  valor: 100000,
  quantidade: 2,
});

carrinho.adicionarProduto({
  id: 2,
  descricao: "cama",
  categoria: "moveis",
  valor: 50000,
  quantidade: 1,
});

console.log(carrinho.resumo());
carrinho.alterarQuantidade(2, 3);
console.log(carrinho.resumo());
carrinho.removerProduto(1);
console.log(carrinho.resumo());

const vendaCredito = new VendaCredito(carrinho);
vendaCredito.aplicarDesconto();
console.log(vendaCredito.finalizarCarrinho());

const vendaDebito = new VendaDebito(carrinho);
vendaDebito.aplicarDesconto();
console.log(vendaDebito.finalizarCarrinho());
