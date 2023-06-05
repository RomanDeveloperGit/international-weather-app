FROM node

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "run", "server:prod" ]
