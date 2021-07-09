#image we will use, will be chached locally when after the first pull
FROM node

#make app the work direcroty so all our cmds will be run in this folder
WORKDIR /app


#copy the package json first so if we change code that doesnt effect the package json then docker will not have to do npm install again (optimization step) due to layering
COPY package.json /app

#run this command in the image, default will be in the working directory
#executed when image is being built
RUN npm install


#specifies which files to copy and to where
#here we copy everything in the curent directory into the image, the 2nd path is the path in the image where the file is stored
#all the files in the current directory will be copied into an app folder in the container

#absolute path, not ./app, just /app sinde we alread declared a working directory
COPY . /app

#will copy to the working directory which is now /app
#COPY . ./

#expose this  port to the local system in order to listen on it, just added for instructional purposes, not actually required but recomended, -p in the docker cmd actually exposes the port
EXPOSE 80

#will run when a container is started based on the image 
CMD ["node", "server.js"]


#--------------------- shell comands --------------------------------
#docker ps  ...all runing processes
#docker ps -a ...all processes

#build the file, the t is a tag,. the . tells docker the correct docker file is in the current direcrtory
# docker build . -t nodeappsetup_20

#make the port available (local: docker )
#docker run -p 80:80 nodeappsetup_20

#start an old conatiner
#docker start --id or name---

#will run in detatched mode so we are no listening on the console and our console is not blockde
#docker start/run -d 

#can re-attach
#docker attatch --container name---

#can see logs 
#docker logs --container name---

#reattatch  in a different way
#docker logs  -f --container name---