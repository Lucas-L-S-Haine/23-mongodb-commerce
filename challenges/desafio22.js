db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.4": 60 } },
);
db.produtos.updateOne(
  {
    $and: [
      { tags: { $exists: true } },
      { tags: { $in: ["bovino"] } },
    ],
  },
  { $inc: { "vendasPorDia.7": 120 } },
);
db.produtos.find({}, { _id: false, nome: true, vendasPorDia: true });
