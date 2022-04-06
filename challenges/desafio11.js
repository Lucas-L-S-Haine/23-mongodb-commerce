db.produtos.updateMany({}, {
  $push: {
    $each: { tags: ["combo", "tasty"] },
    $sort: { tags: 1 },
  },
});
db.produtos.find({
  $nor: [
    { nome: "Big Mac" },
    { nome: "McChicken" },
  ],
}, { _id: false, nome: true, tags: true });
