// const Slack = require('slack');
// const token = process.env.SLACK_TOKEN;
// const bot = new Slack({ token });
const { db } = require('../src/utils');

async function slackTest({ body }, res) {
  try {
    console.log(body);
    const prevOrder = await db.orders().findOneAndUpdate(
      { userID: body.user_id, restaurant: body.text },
      {
        $set: {
          user: body.user_id,
          userName: body.user_name,
          teamID: body.team_id,
          teamDomain: body.team_domain,
          restaurant: body.command,
          channelID: body.channel_id,
          channelName: body.channel_name,
          command: body.command,
          token: body.token,
          order: body.text
        }
      },
      { upsert: true, new: true }
    );
    console.log(prevOrder);

    return res.status(200).send(prevOrder.order);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { slackTest };
