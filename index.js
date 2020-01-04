const app = require('./src');
const PORT = process.env.PORT;

app.listen(PORT, () => console.info(`running on port ${PORT}`));
