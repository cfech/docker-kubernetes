FROM node:14-alpine

WORKDIR /app

#restricts the commands we can run, very similar to cmd but with 1 key difference 

#if we had 
#CMD [ "node app.js" ]
# and then had another command in the docker run command it would override the CMD command.

#that command in docker run does not overide an entrypoint,  but appends to it, so we could specify npm and then append any npm command to this image 
ENTRYPOINT [ "npm" ]