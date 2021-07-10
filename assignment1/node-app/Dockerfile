FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app


EXPOSE 3000

CMD ["node", "server.js"]

#docker build -t ass1nodeapp .

#docker run -p 80:80 --name a1nodeapp -t ass1nodeapp

#docker stop a1nodeapp

#docker start a1nodeapp

#docker run -p 3000:3000 --rm --name a1nodeapp2 -t ass1nodeapp