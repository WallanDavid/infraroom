// storage.js
require('dotenv').config();
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  keyFilename: process.env.GCP_KEY_FILE
});

const bucketName = process.env.GCP_BUCKET;
const arquivoLocal = 'arquivo-local.txt';
const destinoRemoto = 'logs/arquivo-remoto.txt';

async function uploadArquivo() {
  try {
    await storage.bucket(bucketName).upload(arquivoLocal, {
      destination: destinoRemoto,
    });
    console.log(`✅ Upload feito com sucesso para gs://${bucketName}/${destinoRemoto}`);
  } catch (err) {
    console.error('⚠️ Erro ao simular upload:', err.message);
  }
}

uploadArquivo();
