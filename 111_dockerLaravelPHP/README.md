# This app doesnt really work. Some laravel/PHP thing 

Example php laravel nginx web app with docker containers

Run docker compose and just run the composer container, 
Through the entry point we say run this laravel command to create a new project

    "compose (in dockerfile ) create-project --prefer-dist laravel/laravel"

and add the '.' to say use the working directory.  

This will then create the project and share it to the src folder in our root directory through the bind mount pm the composer service in the docker-compose file


    docker-compose run composer create-project --prefer-dist laravel/laravel .

*Was getting this error when running the command* 
    
    Could not delete /var/www/html/vendor/composer/f9ede2b6/briannesbitt-Carbon-8619c29/src/Carbon/Lang


Starting only the server, php and mysql services

    docker-compose up -d server php mysql

If we user the depends_on flag in the docker compose we cna just run

    docker-compose up -d server

And the server service will bring up all the services that it depends on

--Build tels docker to look at the images and see if anything has changed and if so rebuild them
    
    docker-compose up -d --build server

Php/laravel specific that says to test the db connection 

    docker-compose run --rm artisan migrate