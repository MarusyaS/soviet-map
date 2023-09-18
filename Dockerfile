FROM node:carbon
WORKDIR /usr/src/soviet-map
COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .
EXPOSE 3000
CMD ["npm", "start"]