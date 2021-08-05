#need this image to work with nginx
FROM php:7.4-fpm-alpine

#folder our website is served from, can see thta in the ngx config
WORKDIR /var/www/html

#we use the command built into the image to install some sql extension
RUN docker-php-ext-install pdo pdo_mysql

# no cmd at the end, so the default cmd of the base image will run, the default cmd of the base image will kick off the php interpreter, so we dont need the cmd

