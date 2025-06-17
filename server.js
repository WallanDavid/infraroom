require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const axios = require('axios');

const PORT = process.env.PORT || 3000;

// Rota principal
fastify.get('/', async () => {
  return { message: 'Bem-vindo ao InfraRoom 🚀' };
});

// Simula entrada numa "sala" cloud com integração entre containers
fastify.get('/cloud-room', async () => {
  try {
    const response = await axios.get('http://cloudrun:4000/external-data');
    return {
      status: '✅ Comunicação com Cloud Run OK',
      data: response.data
    };
  } catch (err) {
    return {
      error: '❌ Falha ao se conectar com Cloud Run',
      details: err.message
    };
  }
});

// Inicializa o servidor
fastify.listen({ port: PORT, host: '0.0.0.0' }, err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  } else {
    fastify.log.info(`🟢 Servidor rodando em http://localhost:${PORT}`);
  }
});
