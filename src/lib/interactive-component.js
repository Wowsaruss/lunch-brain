async function interactiveComponent(req, res) {
  console.log('!!!!!!!!!!!HIT2', req.body);
  return res.status(200).json([
    {
      type: 'section',
      block_id: 'section678',
      text: {
        type: 'mrkdwn',
        text: 'Pick items from the list'
      },
      accessory: {
        action_id: 'text1234',
        type: 'multi_static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select items'
        },
        options: [
          {
            text: {
              type: 'plain_text',
              text: '*this is plain_text text*'
            },
            value: 'value-0'
          },
          {
            text: {
              type: 'plain_text',
              text: '*this is plain_text text*'
            },
            value: 'value-1'
          },
          {
            text: {
              type: 'plain_text',
              text: '*this is plain_text text*'
            },
            value: 'value-2'
          }
        ]
      }
    }
  ]);
}

module.exports = interactiveComponent;
