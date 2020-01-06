const monk = require('monk');

function connect() {
  return monk(process.env.MONGODB_URI, {
    autoReconnect: false,
    keepAlive: 0,
    useUnifiedTopology: true
  });
}

let db = connect();

function state() {
  return (db || {})._state || 'closed';
}

function orders() {
  if (state() === 'closed') {
    console.log('db was detected as closed, attempting reconnect');
    db = connect();
    console.log(`db connection is ${state()}`);
  }

  return db.get('orders');
}

console.log(`db connection is ${state()}`);

module.exports = { orders, state };
