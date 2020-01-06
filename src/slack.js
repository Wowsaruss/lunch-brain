// const Slack = require('slack');
// const token = process.env.SLACK_TOKEN;
// const bot = new Slack({ token });
const { db } = require('../src/utils');

async function slackTest({ body }, res) {
  try {
    const prevOrder = await db.orders().findOneAndUpdate(
      { userID: body.user_id, restaurant: body.text },
      {
        $set: {
          user: body.user_id,
          userName: body.user_name,
          teamID: body.team_id,
          teamDomain: body.team_domain,
          restaurant: body.text,
          channelID: body.channel_id,
          channelName: body.channel_name,
          command: body.command,
          token: body.token
        }
      },
      { upsert: true, new: true }
    );

    return res.status(200).send(prevOrder.text);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { slackTest };
