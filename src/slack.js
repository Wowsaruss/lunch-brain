// const Slack = require('slack');
// const token = process.env.SLACK_TOKEN;
// const bot = new Slack({ token });
const { db } = require('../src/utils');

async function lunchOrder({ body }, res) {
  try {
    if (body.text) {
      await db.orders().findOneAndUpdate(
        { userID: body.user_id, restaurant: body.command },
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
        { upsert: true }
      );
    }

    const prevOrder = await db
      .orders()
      .findOne({ userID: body.user_id, restaurant: body.command });

    return res
      .status(200)
      .send(`${prevOrder.userName.toUpperCase()}\n${prevOrder.order}`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { lunchOrder };
