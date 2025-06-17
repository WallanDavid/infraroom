require('dotenv').config();
const fastify = require('fastify')({ logger: true });

const PORT = process.env.PORT || 3000;

fastify.get('/', async () => {
  return { message: 'Bem-vindo ao InfraRoom 🚀' };
});

fastify.get('/cloud-room', async () => {
  return { status: 'Você entrou na Cloud Room ☁️🪑' };
});

// Exporta o app para testes
module.exports = fastify;

if (require.main === module) {
  fastify.listen({ port: PORT, host: '0.0.0.0' }, err => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    } else {
      fastify.log.info(`🟢 Servidor rodando em http://localhost:${PORT}`);
    }
  });
}
