FROM composer:latest

#where our code will be in the php container
WORKDIR /var/www/html

#cmd that will be used by this file, the flag is laravel specific
ENTRYPOINT ["composer", "--ignore-platform-reqs"]