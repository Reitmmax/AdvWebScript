const { items } = require('../../data');

// Callback function for /api/info
const getInfo = (req, res) => {
  res.status(200).json({ items });
};

// Callback function for /api/info/:id
const selectSingle = (req, res) => {
  const { id } = req.params;
  const singleItem = items.find((item) => item.id === Number(id));
  res.json(singleItem);
};

module.exports = { getInfo, selectSingle };
