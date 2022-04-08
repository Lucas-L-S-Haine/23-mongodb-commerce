db.produtos.find(
  { ingredientes: { $in: ["picles"] } },
  { _id: false, valoresNutricionais: { $slice: 3 }, nome: true, ingredientes: true },
);
