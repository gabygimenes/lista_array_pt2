//5.reduce

//9. Calcule a quantidade total de itens em estoque, somando o estoque de todos os produtos.

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const redu = produtos.reduce((totalis, produto) => {
  return totalis + produto.estoque
}, 0);

console.log("A quantidade total de itens no estoque é: " + redu)


//10
{
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const total = produtos.reduce((totalis, produto) => {
    return totalis + (produto.preco * produto.estoque)
}, 0);

console.log("O patrimônio total em estoque é de R$" + total)
};