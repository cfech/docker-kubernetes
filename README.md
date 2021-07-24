# Docker

docker course 

https://www.udemy.com/course/docker-kubernetes-the-practical-guide/


#--------------------- shell comands --------------------------------
Show all running containers

    docker ps

Show all conatiners

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

removes all stoped containers at once
    
    docker container prune 

shows all images

    docker mages

to remove images 

    docker rmi --image id, 1,2, 3, ...-- 

removes all images that are not tagged, add -a for all 

    docker image prune

--rm remove the container when when stoped

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

Bind mounts - allow us to bind the conatiner to a folder on the desktop and when code is edited in th binded folder update it in the container

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

There are also build arguments that allow us to set a default but then also chnage with the --build-arg tag without changing the docker file ie: having 2 different ports for prod and dev