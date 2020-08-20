FROM node

WORKDIR /application

COPY package*.json /application/

RUN npm install

COPY . /application/

EXPOSE 3000
CMD["npm", "start"]
