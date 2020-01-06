async function event(req, res) {
  return res.status(200).json(req.body);
}

module.exports = event;
