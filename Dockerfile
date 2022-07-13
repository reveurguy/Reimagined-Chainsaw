FROM node:18-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node
COPY package*.json ./
COPY --chown=node:node package.json .
RUN npm install
COPY --chown=node:node . .
USER node
EXPOSE 8080
CMD ["npm", "start"]