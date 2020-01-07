async function interactiveComponent(req, res) {
  console.log('!!!!!!!!!!!HIT1', req.body);
  return res.status(200).send({
    type: 'image',
    image_url: 'http://placekitten.com/700/500',
    alt_text: 'Multiple cute kittens'
  });
}

module.exports = interactiveComponent;
