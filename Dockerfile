FROM node:16.17.1-alpine
WORKDIR /var/www/app
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000
CMD [ "node", "./server.js" ]