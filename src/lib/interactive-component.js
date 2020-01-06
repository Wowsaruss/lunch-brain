async function interactiveComponent(req, res) {
  console.log(req.body);
  return res.status(200).json(req.body);
}

module.exports = interactiveComponent;
