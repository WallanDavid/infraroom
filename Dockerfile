# Usar Node oficial
FROM node:18

# Criar diretório de app
WORKDIR /app

# Copiar pacotes e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante
COPY . .

# Expor porta e rodar
EXPOSE 3000
CMD ["node", "server.js"]
