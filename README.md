# Docker 

docker course 

https://www.udemy.com/course/docker-kubernetes-the-practical-guide/
- [Shell Commands](#shell-commands)
- [Section 3-Volumes/Envs/Args (44_realNodeApp)](#section-3---Volumes/Envs/Args-(44-realNodeApp))
- [Section 4 Networking (67_Networking)](#Section-4-Networking-67-Networking)
- [Section 5 - Multi Container Apps (80_multiContainer)](#section-5---Multi-Container-Apps-(80-multiContainer))
- [Section 6 Docker Compose (91 dockerCompose)](#Section-6-Docker-Compose-(91-dockerCompose))
- [Section 7 Utility Containers and Executing Commands in Containers (102 Utilities)](#section-7-utility-containers-and-executing-commands-in-containers-(102-Utilities))
- [Section 8 - More Complex multi container setup with php and laravel](#section-8---more-complex-multi-container-setup-with-php-and-laravel)
- [Section 9 Deploying to AWS](#section-9-deploying-to-aws)


# Shell Commands

 Show all running containers

    docker ps

Show all containers

    docker ps -a 

build the image, the t is a tag,. the . tells docker the correct docker file is in the current directory
 
    docker build . -t nodeappsetup_20

run a container with the image nodeappsetupe_20 and map local pro 80 to container port 80

    docker run -p 80:80 nodeappsetup_20

start an old container

    docker start --id or name---

will run in detached mode so we are no listening on the console and our console is not blocked
    
    docker start/run -d 

can re-attach ?maybe
    
    docker attach --container name---

can see logs of a container 

    docker logs --container name---

reattach  in a different way

    docker logs  -f --container name---


removing containers

    docker rm --name(s) name1 name 2

removes all stopped containers at once
    
    docker container prune 

shows all images

    docker mages

to remove images 

    docker rmi --image id, 1,2, 3, ...-- 

removes all images that are not tagged, add -a for all 

    docker image prune

--rm remove the container when when stopped

    docker run (image) --rm 

inspect all the config and info of the image
    
    docker image inspect --id----

docker cp can copy files into a container from local machine (dummy is local file)

    docker cp dummy/. --container name--:/test (:/ path we want )

copy from container to local
    
    docker --container name--:/test  dummy


give tags to images and names to containers, --name give the container a name

    docker run -p 80:80 --name 20_node -t 20_appsetup

giving a tag to image 

    docker build . -t 20_appsetup

 clones old image with a new tag, doesn't rename

                (old)               (new)
    docker tag ass1nodeapp:latest  cfech/node-hello-world

login to docker hub
    docker login 

logout of docker hub

    docker logout 

pushes to docker hub

                (path can be found in docker hub repo)
    docker push cfech/node-hello-world

gets this image from the registry(docker hub), will pull the latest version

    docker pull cfech/node-hello-world


# Section 3 - Volumes/Envs/Args (44 realNodeApp)
*Adding dockerignore files and ignoring files (e.g.) any local node modules we don't need will speed up build time*

--------------------- Unnamed/ Anonymous Volumes ------------------------

#Connects a folder inside the container to a folder outside the container on host machine, have to enable cross device link

(inside container)

VOLUME [ "/app/feedback" ] 



    docker volume ls  

--shows all volumes, an unnamed volume is an anonymous volume and will always go away when the container is shutdown, volumes are actually stored somewhere in the file directory and managed by docker

#--------------------- Unnamed/ Anonymous Volumes ------------------------

--------------------- Named Volumes ------------------------

Named volumes -- not deleted when container is removed

-v says store the /app/feedback in a volume on our local machine named feedback

    docker run -p 3000:80 --rm --name feedback-node-rm --name feedback-node-44 -v feedback:/app/feedback  -t feedback-node

#--------------------- Named Volumes ------------------------

#--------------------- Bind Mounts ------------------------

Bind mounts - allow us to bind the container to a folder on the desktop and when code is edited in th bound folder update it in the container

#quick ways to get current folder 

-v "%cd%":/app - windows

-v $(pwd):/app -mac/linux

Bind will override what is in the folder that we bind to , in this case it is the 2nd -v saying bind this folder to /app in the container, that is where our node modules are held in the npm install step, so now if we override that folder they will be gone

    docker run -p 3000:80 --rm --name feedback-node-44 -v feedback:/app/feedback -v "C:\Users\cfech\Desktop\code\udemy\docker\44_realNodeApp:/app" -t feedback-node


Solve this problem by adding a 3rd -v using an anonymous bind docker will save the app/node_modules folder for us to use because it is a longer relative path inside the container 

    docker run -p 3000:80 --rm --name feedback-node-44 -v feedback:/app/feedback -v "C:\Users\cfech\Desktop\code\udemy\docker\44_realNodeApp:/app" -v /app/node_modules -t feedback-node

Now we can update the source code and it will copy over to our docker container because of -v #2 


    docker volumes --help 
    
to find out more 

can make binds read only by adding :ro after the :/app

4th v allows us to edit the /app/temp folder other wise we wouldn't be able to with the :ro option on the 2nd volume

    docker run -p 3000:80 --rm --name feedback-node-44 -v feedback:/app/feedback -v "C:\Users\cfech\Desktop\code\udemy\docker\44_realNodeApp:/app:ro" -v /app/node_modules -v /app/temp -t feedback-node

--------------------- Bind Mounts ------------------------

--------------------- Environment Variables ------------------

Here we can set the port env in the cli as well,  using --env (or -e), we must also expose the correct port in the -p flag for this to work

    docker run -p 3000:8000 --env PORT=8000 --rm --name feedback-node-44 -v feedback:/app/feedback -v "C:\Users\cfech\Desktop\code\udemy\docker\44_realNodeApp:/app:ro" -v /app/node_modules -v /app/temp -t feedback-node

--------------------- Environment Variables ------------------

There are also build arguments that allow us to set a default but then also change with the --build-arg tag without changing the docker file ie: having 2 different ports for prod and dev

# Section 4 Networking (67 Networking)


*Adding dockerignore files and ignoring files (e.g.) any local node modules we don't need will speed up build time*


will pull the latest mongo image from docker hub and run a container with it

    docker run mongo

Misc Commands

    docker build -t networking .

    docker run --name networking --rm -p 3000:3000 -t networking

---------------------------------------- Must create a network------------------

See all networks

    docker network ls 

Create a network

     docker network create favorites-net

---------------------- Running containers on the same network --check app.js for connection string

Connection string with ip :

    mongodb://172.17.0.2:27017/swfavorites

Connection string with container name (works if on the same network)

    mongodb://mongodb:27017/swfavorites


Starting the db container and connecting to the network

    docker run -d --name mongodb --network favorites-net  -t mongo

Starting the app and connecting to the network

    docker run --name networking --rm -p 3000:3000 --network favorites-net -t networking

# Section 5 - Multi Container Apps (80 multiContainer)

FOR DOCKER CONTAINER COMMUNICATION WE MUST EITHER EXPOSE THE PORTS TO LOCAL HOST OR PUT THEM ALL ON THE SAME NETWORK OR BOTH

runs the mongo db db, exposing -p 27017 which is the default for the image

    docker run --rm -d --name mongodb -p 27017:27017  mongo

Build the backend image
    
    docker build backend -t 80backend

Run the backend image

    docker run -p 80:80 -d --name 80backend --rm -t 80backend

use to connect to db instead of local host 

    host.docker.internal

ex

    'mongodb://host.docker.internal:27017/course-goals'

Docker the React SPA

    docker build frontend -t 80frontend

Run the SPA, must have the -t here 

    docker run --name 80frontend --rm -d -p 3000:3000 -t 80frontend


# When running on the same network

create the network

    docker network create 80-goals-net

Run mongodb

    docker run --rm -d --name mongodb --network 80-goals-net mongo

Run the backend ,  have to expose the port for the frontend, running in the browser, to communicate with and the network for the mongodb container to communicate with

    docker run  --name 80backend --rm -d -p 80:80 --network 80-goals-net -t 80backend

Must also put the connection string in backend to the name of the container ex (mongodb is the name of our container).

    'mongodb://mongodb:27017/course-goals

Run the front end, we don't need the network fro the frontend because the front end runs in the browser and the dev server that is in the container doesn't need to communicate with our other containers

    docker run --name 80frontend --rm -p 3000:3000 -it 80frontend

 # Running Mongo DB with named volume

 This will allow us to persist data in our database

    docker run --rm -d --name mongodb -v data:/data/db --network 80-goals-net mongo

This will not create a username and password for this mongo db instance

*DON'T CHANGE THE PASSWORD AFTER THE 1ST CONTAINER AS IT SEEMS TO BE BOUND THE TO NAMED VOLUME, HAVE TO RESEARCH HOW TO CHANGE PASSWORD, PROBABLY ON MONGO DOCKER HUB PAGE*

    docker run --name mongodb -v data2:/data/db -d --network 80-goals-net -e MONGO_INITDB_ROOT_USERNAME=test -e MONGO_INITDB_ROOT_PASSWORD=test -t mongo 

# Volumes and Binds for backend

Adding volume for logs to backend so we save he logs after termination

    docker run -v logs:/app/logs  -d --name mongodb -v data:/data/db --network 80-goals-net mongo

Working with bind mounts, named and anonymous volumes 

    docker run -v
    C:\Users\cfech\Desktop\code\udemy\docker\80_multiContainer\backend:/app -v logs:/app/logs -v /app/node_modules --name 80backend -d -p 80:80 --network 80-goals-net -t 80backend


Bind mount for the source code to the work directory of the docker container, this will copy all files into the container when the source code it changed,

*Note about bind mounts, the longer in container path will persist so when we see /app/node_modules they will persist inside the container even if source code is change because /app/node_modules is a longer in container path than just /app

     -v C:\Users\cfech\Desktop\code\udemy\docker\80_multiContainer\backend:/app 
 
 Named volume for logs so the logs persist
 
    -v logs:/app/logs 
 
 Anonymous volume the node modules so they are not overridden in the copy phase

    -v /app/node_modules 
 

Name the container 80backend

    --name 80backend 
 
 Run in detached mode

    -d 
 
 Expose external port 80 from internal port 80

    -p 80:80 
 
 Connect to goals -net

    --network 80-goals-net 
 
 The image to use

    -t 80backend


*Careful with spacing*

Will populate the environment variable in our code to pass db info to it, an add password if needed

    docker run -v C:\Users\cfech\Desktop\code\udemy\docker\80_multiContainer\backend:/app -v logs:/app/logs -v /app/node_modules -e MONGODB_USERNAME=test -e MONGODB_PASSWORD=test --name 80backend -d -p 80:80 --network 80-goals-net -t 80backend

Sets environment variables

    MONGODB_USERNAME=test

    MONGODB_PASSWORD=test

# Volumes and Binds for frontend

-v will bind the source code to the docker container for live source code updates 

*will not work on windows if not using a linux file system*

    docker run -v C:\Users\cfech\Desktop\code\udemy\docker\80_multiContainer\frontend\src:/app/src --name 80frontend --rm -p 3000:3000 -it 80frontend

*Adding dockerignore files and ignoring files (e.g.) any local node modules we don't need will speed up build time*


# Section 6 Docker Compose (91 dockerCompose)
*VIEW THE DOCKER-COMPOSE.YML FILE IN 91_DOCKER COMPOSE FOR MORE INFO*

*DOCKER COMPOSE DOES NOT REPLACE THE DOCKER FILE BUT WORKS IN CONJUNCTION WITH IT TO BUILD MORE COMPLEX MULTI CONTAINER PROJECTS WHERE MULTIPLE CONTAINERS MUST TALK TO EACH OTHER. IT ALSO REMOVES THE NEED FOR LONG CLI COMMANDS*

start a docker compose

finds and builds all images , starts a custom network and attaches all containers to it 

    docker-compose up

 Starts in detached mode

    docker compose up -d

brings the whole network down and prunes containers and networks

    docker-compose down

 Will remove the volumes as well

    docker-compose down -v

Will rebuild all images in docker compose (ie: if there is a code change or something the bind mount doesn't pick up)

    docker-compose up --build

Will just build the missing images but not start the containers

    docker-compose build

# Section 7 Utility Containers and Executing Commands in Containers (102 Utilities)

Run a container with node in it 

    docker run -it node

Run in default command

    docker run -d-it node

Docker exec allows us to execute a command inside a running container 

Here we say run npm init [container name] in interactive (-it) mode

    docker exec -it  keen_benz npm init

Run node and override default CMD

    docker run -it  node npm init

---------- Building Util Container (See docker file) --------

    docker build -t node-util .

Start the docker container with a bind mount, this will allow us to run npm init inside the container and use the bind mount to share the package.json file to our home directory from inside the docker file, in essence than never needing node on our host machine to run npm init - makes this a utility container, more useful when we need a lot of things installed to setup projects

    docker run --name node-util -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util npm init

### Entry points

 Now we just append init because of our npm entry point, no need to have the npm (and it wouldn't work) (see entrypoint in docker file)

    docker run --name node-util -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util init    

Could install too

    docker run -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util install express

### Run with docker compose
     
docker-compose run (service) (cmd to be appended to entry point)

     docker-compose run --rm(optional) example init


# Section 8 - More Complex multi container setup with php and laravel 

Refer to 111_dockerLaravelPhp readme for more info

# Section 9 Deploying to AWS

Bind mounts are not for production, only for development not production. They are useful because we don't have to rebuild the image with each code change

In production the container should be stand alone, no code should be needed from the outside. So when we build for production we always user COPY instead of bind mounts

## Steps to deploying container to EC2 from Docker hub ##
*Note: EC2 is your own managed machine, so the user is responsible for security, keeping the machine updated/compliant, scale etc ..*

1. Go to https://aws.amazon.com/ create account/sign into the console. (Would need a credit card)

2. Services -> EC2

3. Launch instance -> user "Amazon Linux 2 AMI (HVM)" 64 bit. 

4. Choose size of instance 

5. Configure instance (ensure there is a VPC selected in the network section)

6. Review and Launch

7. Generate new key pair, download and save in a safe spot (used for shh)

8. After launching go to Instances, select checkbox next to the instance you want and click connect. 

9. Read about ssh and copy the connection string in the popup window. 

10. Open an ssh capable terminal (mac and linux support natively windows may or may not)

11. Enter the connection string, should look something like 

        ssh -i "keyfile.pem" ec2-user@ec2-1-1-1-1.us-east/west-#.compute.amazonaws.com

        ssh -i "keyfile" ec2-user@ec2-your ip address.country-region-number.compute.amazonaws.com

12. Type in yes

13. When connected you will see your terminal look like 

        [ec2-user@your-ip ~]

*If unable to connect by ssh you may have to configure inbound rules in security groups to allow inbound traffic on port 22, should be set by default tho*

14. In ssh enter

        sudo yum update -y

to ensure all packages are up to date 

15. Install docker on EC2 Instance 

        sudo amazon-linux-extras install docker

*if this fails you may need to configure security groups to allow outbound traffic, should allow all by default though*

16. Start the docker service

        sudo service docker start

17. Can ensure docker is running by checking with 

        docker ps

Should see the docker headings. No containers are yet running. 

18. We now have 2 options to get our image onto EC2

    A. Copy all the source code onto the ec2 instance and build the image there

    B. Build the image on our local machine and push it to a registry (such as docker hub) and just pull it into our image

## Adding image to docker hub ##

*open a new terminal, not in ssh*

1. Go to docker hub and create a repo

2. Building the image for docker hub, must give a tag with the docker hub repo name

        docker build -t node-aws-example .

3. Re-tag the image with docker hub username/repo-name

    docker tag node-aws-example cfech/node-aws-example

4. Push to docker hub

    docker push cfech/node-aws-example

*If this fails you may need to login to docker hub account with 'docker login'*

--------------------------------------------------------------------------------------

*Back in ssh*

19. Once the image is in the repo we can run our container on the EC2 instance with

        sudo docker run -d --rm --name awsexample -p 80:80 cfech/node-aws-example

        sudo docker run -d --rm --name [your container name] -p 80:80 [your image name on docker hub]

This will check the local docker cache and check if there is a copy of this image, if not it will reach out to docker hub and pull it down and run the container (as long as repo isn't private, for private repos/registries there may be some sort of login component.)


## Configuring Security Groups ## 

Before we can view our webpage on the internet we must allow inbound http traffic. 

1. Check to see what security group the EC2 instance is in. It will usually be right in the information of the instance. 

2. Go to that security group and select Inbound Rules (could also config outbound) -> Edit inbound rules -> add rule

3. Select type (in our case http, could also config https, ssh etc... here), protocol and port should auto populate

4. Select source (in our case anywhere on ipv 4 but could put custom config here) and save rules.

### ------------------------------------------------------------------------------

20. Now we can check our service by navigating to the IP address of the server, found in the instances page of aws.

## Updating Image running on EC2 ##

1. To update an image , rebuild and repush to docker hub as shown in the steps above

2. In ssh 

    
        sudo docker ps

to see running containers 

    sudo docker stop [container name ]

to stop the container


3. Update the image in the EC2 instance 

        sudo docker pull cfech/node-aws-example [your image name]

4. Rerun the container 


        sudo docker run -d --rm --name awsexample -p 80:80 cfech/node-aws-example

        sudo docker run -d --rm --name [your container name] -p 80:80 [your image name on docker hub]

## Shutting down the container

Run 

    sudo docker stop [container name]


## AWS Billing / Free Tier / Stopping an Instance

Aws free tier is limited and you can incur charges when using it if your leave your instances running constantly, especially if they are in an auto scale or load balancing group

If not a prod environment you should verify your instance is not in either of these groups, review the free tier allotments per month, and pause/stop the instance when not using it to avoid fees. You can monitor fees/ track usage from the Bill and Cost Management Dashboard

To stop and instance right click it in the EC2 instances window -> stop instance
or -> terminate instance to get rid of it. If you stop an instance and it is an an auto scaling group it will spin up another copy for you so watch out for that