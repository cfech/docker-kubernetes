FROM node


WORKDIR /app

COPY package.json .

RUN npm install

#COPY FROM CURRENT FOLDER TO WORKING DIRECTORY
COPY . .

EXPOSE 80



CMD ["npm", "start"]

#docker build -t feedback-node .
#docker run -p 3000:80 --rm --name feedback-node-44 -t feedback-node

#--------------------- Unnamed/ Anonymous Volumes ------------------------
#Connects a folder inside the conatiner to a folder outside the container on host machine, have to enable cross device link
#        (inside container)

# VOLUME [ "/app/feedback" ] #un comment out this line to have an anoymous volume that is destroyed when container is removed



#docker volume ls  --shows all volumes, an unamed volume is an annymous volume and will alwasy go away when the conatiner is shutdown, volumes are actually stored somewhere in the file directory and managed by docker
#--------------------- Unnamed/ Anonymous Volumes ------------------------
#--------------------- Named Volumes ------------------------
#Named volumes -- not delete when container is removed

#-v says store the /app/feedback in a volume on our local machine named feedback

#docker run -p 3000:80 --rm --name feedback-node-rm --name feedback-node-44 -v feedback:/app/feedback  -t feedback-node

#--------------------- Named Volumes ------------------------
#--------------------- Bind Mounts ------------------------
#Bind mounts - allow us to bind the conatiner to a folder on the desktop and when code is edited in th binded folder update it in the container

#quick ways to get current folder 
# -v "%cd%":/app - windows
# -v $(pwd):/app -mac/linux

#Bind will overide what is in the folder that we bind to , in this case it is the 2nd -v saying bind this folder to /app in the conatiner, that is where our node modules are held in the npm install step, so now if we override that folder they will be gone

#docker run -p 3000:80 --rm --name feedback-node-44 -v feedback:/app/feedback -v "C:\Users\cfech\Desktop\code\udemy\docker\44_realNodeApp:/app" -t feedback-node


#Solve this problem by adding a 3rd -v using an anonymous bind docker will save the app/node_modules folder for us to use becuase it is a longer relative path inside the container 

#docker run -p 3000:80 --rm --name feedback-node-44 -v feedback:/app/feedback -v "C:\Users\cfech\Desktop\code\udemy\docker\44_realNodeApp:/app" -v /app/node_modules -t feedback-node

#Now we can update the source code and it will copy over to our docker container bacuase of -v #2 


#docker volumes --help to find out more 

#--------------------- Bind Mounts ------------------------