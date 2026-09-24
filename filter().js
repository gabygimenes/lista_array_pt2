
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const produtosAtivos = produtos.filter((produto) => produto.ativo);

console.log('Produtos Ativos no Sistema:', produtosAtivos);
console.log('\n');


const produtosDisponiveis = produtos.filter((produto) => {
    return produto.preco >= 100 && produto.estoque > 0;
});

console.log('Produtos Disponíveis (Preço >= 100 e Em Estoque):');
console.log(produtosDisponiveis);
console.log("\n");