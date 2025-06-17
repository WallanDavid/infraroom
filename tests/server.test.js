// tests/server.test.js
const tap = require('tap');
const app = require('../server');

tap.test('GET / retorna mensagem de boas-vindas', async t => {
  const res = await app.inject({
    method: 'GET',
    url: '/'
  });

  t.equal(res.statusCode, 200);
  t.same(JSON.parse(res.payload), {
    message: 'Bem-vindo ao InfraRoom 🚀'
  });
});

tap.test('GET /cloud-room retorna status da Cloud Room', async t => {
  const res = await app.inject({
    method: 'GET',
    url: '/cloud-room'
  });

  t.equal(res.statusCode, 200);
  t.match(res.payload, /Cloud Room/);
});
