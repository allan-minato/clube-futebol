# Usar a imagem node:16.14-alpine como base
FROM node:16.14-alpine
# Mudar para o diretório de trabalho /app-frontend
WORKDIR /app-backend
# Copiar os package.json e package-lock.json para o container
COPY package.json package-lock.json packages.npm ./
# Instalar as dependências Node
RUN npm install
# Copiar o restante dos arquivos da aplicação para o container
COPY . .
# Sinalize que aplicação expõe a porta 3000
EXPOSE 3001
# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
ENTRYPOINT [ "npm", "run" ]
# Dica: Leia a seção Docker e Docker-compose no README para mais informações
CMD [ "start" ]