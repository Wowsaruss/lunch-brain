async function interactiveComponent(req, res) {
  console.log('!!!!!!!!!!!HIT1', req.body);
  return res.status(200).json({
    type: 'plain_text_input',
    action_id: 'view_submission'
  });
}

module.exports = interactiveComponent;
