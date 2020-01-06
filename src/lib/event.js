async function event(req, res) {
  return res.status(200).json({ challenge: 'This is a challenge' });
}

module.exports = event;
