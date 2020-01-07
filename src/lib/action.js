async function interactiveComponent(req, res) {
  console.log('!!!!!!!!!!!HIT1', req.body);
  return res.status(200).json({ type: 'external_select' });
}

module.exports = interactiveComponent;
