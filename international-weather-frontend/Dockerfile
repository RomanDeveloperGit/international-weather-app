FROM node

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]
