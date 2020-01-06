const Slack = require('slack');
const token = process.env.SLACK_TOKEN;
const bot = new Slack({ token });

async function slackTest(req, res) {
  try {
    console.log(req);

    // const test = await Slack.api.test({ nice: 1 });
    // const auth = await bot.api.test({ hyper: 'card' });

    return res.status(200).json('this is complete');
  } catch (e) {
    console.log(e);
  }
}

module.exports = { slackTest };
