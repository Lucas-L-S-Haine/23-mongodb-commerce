db.produtos.find(
  { ingredientes: { $in: ["picles"] } },
  { _id: false, ingredientes: true },
);
// 14 - Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais.
