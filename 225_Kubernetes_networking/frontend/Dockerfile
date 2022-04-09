FROM node:14-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

#built the react app
RUN npm run build

# setup nginx web sever to serv the build files
FROM nginx:1.19-alpine

COPY --from=builder /app/build /usr/share/nginx/html

# copy our config for nginx server into the container
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# run the webserver
CMD [ "nginx", "-g", "daemon off;" ]