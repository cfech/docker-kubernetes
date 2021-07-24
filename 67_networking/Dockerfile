FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "app.js"]


#will pull the latest mongo image from docker hub and run a container with it

#docker run mongo

#docker build -t networking .

#docker run --name networking --rm -p 3000:3000 -t networking

#---------------------------------------- Must create a network------------------

#docker network ls -- see all networks

# docker network create favorites-net

#---------------------- Running containers on the same network --check app.js for connection string

#--- the db

#docker run -d --name mongodb --network favorites-net  -t mongo

# --- the app

#docker run --name networking --rm -p 3000:3000 --network favorites-net -t networking
