const monk = require('monk');

function connect() {
  return monk(process.env.MONGODB_URI, {
    autoReconnect: false,
    keepAlive: 0,
    useUnifiedTopology: true
  });
}

let connection = connect();

function state() {
  return (connection || {})._state || 'closed';
}

function db() {
  if (state() === 'closed') {
    console.log('db was detected as closed, attempting reconnect');
    connection = connect();
    console.log(`db connection is ${state()}`);
  }
  return connection;
}

console.log(`db connection is ${state()}`);

module.exports = { db, state };
