// const Slack = require('slack');
// const token = process.env.SLACK_TOKEN;
// const bot = new Slack({ token });

async function slackTest(req, res) {
  try {
    console.log(req.body);

    return res.status(200).send(req.body.text);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { slackTest };
