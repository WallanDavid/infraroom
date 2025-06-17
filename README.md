# 🏗️ InfraRoom — API segura com Fastify, Docker e visão GCP-ready

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Fastify](https://img.shields.io/badge/Fastify-Framework-lightgrey)](https://www.fastify.io/)
[![Dockerized](https://img.shields.io/badge/Docker-ready-blue)](https://www.docker.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Railway-informational)](https://railway.app/)
[![Status](https://img.shields.io/badge/Status-em%20andamento-yellow)]()

> InfraRoom é uma API rápida e modular construída com Node.js + Fastify, pronta para ser escalada com Docker, GCP, e integração segura com microserviços. Este projeto simula a estrutura de uma aplicação real com comunicação entre serviços e arquitetura em nuvem.

---

## ⚙️ Tecnologias Utilizadas

- ⚡ [Fastify](https://www.fastify.io/) — Framework Node.js moderno e veloz
- 🐳 [Docker](https://www.docker.com/) — Empacotamento e isolamento do app
- ☁️ Railway — Hospedagem temporária para demonstração online
- 🔜 GCP (Google Cloud Platform) — Planejado para migração completa
- 🧪 Tap — Framework de testes automatizados

---

## 🔌 Endpoints disponíveis

| Método | Rota           | Descrição                             |
|--------|----------------|----------------------------------------|
| GET    | `/`            | Retorna mensagem de boas-vindas       |
| GET    | `/cloud-room`  | Simula comunicação com outro serviço  |

---

## ▶️ Como rodar localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/WallanDavid/infraroom.git
cd infraroom

# 2. Build e subir com Docker
docker-compose build
docker-compose up

Acesse:
http://localhost:3000/
http://localhost:3000/cloud-room

🗂️ Estrutura de Arquivos
infraroom/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── server.js
├── storage.js
├── .env.example
├── tests/
│   └── server.test.js
└── README.md

✅ Testes Automatizados
Este projeto possui cobertura automatizada com tap, incluindo os endpoints:

/ — Mensagem de boas-vindas

/cloud-room — Simulação de acesso à Cloud Room

Para rodar os testes:
npm test

Cobertura funcional ativa.


📦 Deploy (Railway)
1. Este projeto pode ser implantado diretamente via Railway.app:
2. Crie uma conta no Railway
3. Clique em “New Project” > “Deploy from GitHub Repo”
4. Selecione o repositório infraroom
5. Railway detecta automaticamente o Dockerfile
6. Aguarde o deploy e acesse a URL gerada


🔭 Visão de Expansão: Google Cloud (GCP)
O projeto foi arquitetado com base em padrões de microsserviços escaláveis e está pronto para ser migrado para a infraestrutura da Google Cloud:

✅ Planejamento GCP:
Componente Objetivo
🖥️ VM (Compute Engine) Rodar o container Docker com a API principal
🧠 Cloud Room Simular segundo microserviço ou backend externo
📦 Cloud Storage Armazenamento de logs, imagens, arquivos persistentes
🔐 VPC + VPN Segura Isolamento da rede para tráfego seguro e escalável
🌐 Load Balancer Distribuir carga entre múltiplas instâncias (futuramente)


✍️ Autor
Feito com 💻 por Wallan David
🔗 Projeto open-source sob licença MIT
