db.produtos.findOne({}, { _id: false, nome: true, valoresNutricionais: true });
db.produtos.findOne(
  {},
  { _id: false, nome: true, valoresNutricionais: 1 },
);
// db.produtos.updateMany(
//   {}
// )
//
// 25 - Adicione o elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
// Para isso, escreva no arquivo desafio25.js duas queries, nesta ordem:
// 
// Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
// 
// Crie uma query que retorne o nome e tags de todos os documentos.
