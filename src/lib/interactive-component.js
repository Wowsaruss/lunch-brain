async function interactiveComponent(req, res) {
  console.log('!!!!!!!!!!!HIT2', req.body);
  return res.status(200).json({
    type: 'image',
    image_url: 'http://placekitten.com/700/500',
    alt_text: 'Multiple cute kittens'
  });
}

module.exports = interactiveComponent;
