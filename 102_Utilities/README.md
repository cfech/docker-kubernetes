Run a container with node in it 

    docker run -it node

Run in default command

    docker run -d-it node

Docker exec allows us to execute a command inside a running container 

Here we say run npm init <container name> in interactive (-it) mode

    docker exec -it  keen_benz npm init

Run node and override default CMD

    docker run -it  node npm init

---------- Building Util Container (See docker file) --------

    docker build -t node-util .

Start the docker container with a bind mount, this will allow us to run npm init inside the container and use the bind mount to share the package.json file to our home directory from inside the docker file, in essence than never needing node on our host machine to run npm init - makes this a utility container, more useful when we need alot of things installed to setup projects

    docker run --name node-util -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util npm init

### Entry points

 Now we just append init because of our npm entry point, no need to have the npm (and it wouldn't work) (see entrypoint in docker file)

    docker run --name node-util -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util init    

Could install too

    docker run -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util install express

### Run with docker compose
     
docker-compose run (service) (cmd to be appended to entry point)

     docker-compose run --rm(optional) example init

