async function interactiveComponent(req, res) {
  return res.status(200).json(req.body);
}

module.exports = interactiveComponent;
