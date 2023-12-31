# Docker 

docker course 

https://www.udemy.com/course/docker-kubernetes-the-practical-guide/
- [Shell Commands](#shell-commands)
- [Section 3 Volumes Envs And Args](#section-3-volumes-envs-and-args)
  * [Unnamed and Anonymous Volumes](#unnamed-and-anonymous-volumes)
  * [Names Volumes](#names-volumes)
  * [Bind Mounts](#bind-mounts)
  * [Environment Variables](#environment-variables)
- [Section 4 Networking](#section-4-networking)
- [Section 5 Multi Container Apps](#section-5-multi-container-apps)
  * [Running Multi Container Apps On The Same Network](#running-multi-container-apps-on-the-same-network)
  * [Running Mongo DB With A Named Volume](#running-mongo-db-with-a-named-volume)
  * [Volumes And Binds For The Backend](#volumes-and-binds-for-the-backend)
  * [Volumes And Binds For frontend](#volumes-and-binds-for-frontend)
- [Section 6 Docker Compose](#section-6-docker-compose)
- [Section 7 Utility Containers And Executing Commands In Containers](#section-7-utility-containers-and-executing-commands-in-containers)
  * [Building Utility Container](#building-utility-container)
  * [Entry Points](#entry-points)
  * [Run With Docker Compose](#run-with-docker-compose)
- [Section 8 More Complex Multi Container Setup With PHP And Laravel](#section-8-more-complex-multi-container-setup-with-php-and-laravel)
- [Section 9](#section-9)
- [Deploying to AWS](#deploying-to-aws)
  * [Steps To Deploy A Container To An EC2 From Docker Hub](#steps-to-deploy-a-container-to-an-ec2-from-docker-hub)
  * [Adding Image To Docker Hub](#adding-image-to-docker-hub)
  * [Configuring Security Groups](#configuring-security-groups)
  * [Updating Image Running On An EC2](#updating-image-running-on-an-ec2)
  * [Shutting Down The Container](#shutting-down-the-container)
  * [AWS Billing / Free Tier / Stopping an Instance](#aws-billing---free-tier---stopping-an-instance)
  * [Deploying to ECS](#deploying-to-ecs)
- [Section 11 Kubernetes](#section-11-kubernetes)
  * [Nodes](#nodes)
  * [Master Node](#master-node)
  * [Worker Nodes](#worker-nodes)
- [Section 12 Installing Kubernetes](#section-12-installing-kubernetes)
  * [Installing Kubernetes (Windows)](#installing-kubernetes--windows-)
  * [Running Kubernetes With Kubectl And Minikube](#running-kubernetes-with-kubectl-and-minikube)
  * [Kubernetes Objects](#kubernetes-objects)
    + [Pod Object](#pod-object)
    + [185 Deployment Object](#185-deployment-object)
  * [FROM  Readme 186 first Kubernetes](#from--readme-186-first-kubernetes)
    + [Imperative Creation Example](#imperative-creation-example)
    + [188 Service Object](#188-service-object)
    + [190 Restarting Containers](#190-restarting-containers)
    + [191 Scaling in action](#191-scaling-in-action)
    + [192 Updating Deployments](#192-updating-deployments)
    + [193 Deployment Rollbacks and History](#193-deployment-rollbacks-and-history)
    + [194 Imperative vs Declarative Approach](#194-imperative-vs-declarative-approach)
    + [195 Creating A Deployment Configuration File With Declarative Approach](#195-creating-a-deployment-configuration-file-with-declarative-approach)
    + [197 Working With Labels And Selectors](#197-working-with-labels-and-selectors)
    + [198 Creating A Service Declaratively](#198-creating-a-service-declaratively)
    + [199 Updating And Deleting Resources While Using Declarative Approach](#199-updating-and-deleting-resources-while-using-declarative-approach)
    + [200 Multiple Vs Single Deployment Files](#200-multiple-vs-single-deployment-files)
    + [201 Labels And Selectors Continued](#201-labels-and-selectors-continued)
    + [202 Liveness Probes](#202-liveness-probes)
    + [203 A Closer Look At Configuration Options](#203-a-closer-look-at-configuration-options)
    + [204 A Summary](#204-a-summary)
- [13 Managing Data & Volumes With Kubernetes](#13-managing-data---volumes-with-kubernetes)
    + [207 Volume recap](#207-volume-recap)
    + [208 Kubernetes and Volumes More Than Docker Volumes](#208-kubernetes-and-volumes-more-than-docker-volumes)
    + [209 Kubernetes Volumes VS Docker Volumes](#209-kubernetes-volumes-vs-docker-volumes)
    + [210 Creating A New Deployment And Service](#210-creating-a-new-deployment-and-service)
    + [211 Getting Started With Kubernetes And Volumes](#211-getting-started-with-kubernetes-and-volumes)
    + [212 EmptyDir Volume Type](#212-emptydir-volume-type)
  * [**To Update Deployment**](#--to-update-deployment--)
    + [213 Volume Type  hostPath](#213-volume-type--hostpath)
    + [214 Understanding CSI Volume Type](#214-understanding-csi-volume-type)
    + [215 From Volumes To Persistent Volumes](#215-from-volumes-to-persistent-volumes)
    + [216 Defining A Persistent Volume](#216-defining-a-persistent-volume)
    + [217 Creating A Persistent Volume Claim](#217-creating-a-persistent-volume-claim)
    + [218 Using A Claim In A Pod](#218-using-a-claim-in-a-pod)
    + [219 Volumes Vs Persistent Volumes](#219-volumes-vs-persistent-volumes)
    + [220 Using Environment Variables](#220-using-environment-variables)
    + [221 Environment Variables And ConfigMaps](#221-environment-variables-and-configmaps)
- [Some Object CLI Commands](#some-object-cli-commands)
- [14 Kubernetes Networking](#14-kubernetes-networking)
    + [225 Starting Project And Goal](#225-starting-project-and-goal)
    + [226 Creating First Deployment](#226-creating-first-deployment)
    + [227 Another Look At Services](#227-another-look-at-services)
    + [228 Multiple Containers In 1 Pod](#228-multiple-containers-in-1-pod)
    + [229 Pod Internal Communication](#229-pod-internal-communication)
    + [230 Creating Multiple Deployments](#230-creating-multiple-deployments)
    + [231 Pod to Pod Communication With IP Addresses and Environment Variables](#231-pod-to-pod-communication-with-ip-addresses-and-environment-variables)
    + [232 Using DNS for Pod to Pod Communication](#232-using-dns-for-pod-to-pod-communication)
    + [233 Which Is Best](#233-which-is-best)
    + [235 Adding A Containerized Frontend](#235-adding-a-containerized-frontend)
    + [236 Deploying A Frontend Container With Kubernetes](#236-deploying-a-frontend-container-with-kubernetes)
    + [237 Using A Reverse Proxy For The Frontend](#237-using-a-reverse-proxy-for-the-frontend)
  * [Common Kubernetes Deployment Cycle](#common-kubernetes-deployment-cycle)
  * [Updating The Container](#updating-the-container)
- [Section 15 AWS EKS](#section-15-aws-eks)
    + [241 Deployment Options And Steps](#241-deployment-options-and-steps)
    + [242 AWS EKS vs AWS ECS](#242-aws-eks-vs-aws-ecs)
    + [243 Preparing The Starting Project](#243-preparing-the-starting-project)
    + [246 Creating And Configuring Kubernetes Cluster With EKS](#246-creating-and-configuring-kubernetes-cluster-with-eks)
    + [247 Adding Worker Nodes](#247-adding-worker-nodes)
- [Command Index](#command-index)
  * [Docker](#docker-1)
    + [Docker Compose](#docker-compose)
  * [Minikube](#minikube)
  * [Kubernetes](#kubernetes)
    + [Deployments](#deployments)
    + [Services](#services)
    + [Declarative Approach](#declarative-approach)
  * [AWS](#aws)

# Shell Commands #

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


# Section 3 Volumes Envs And Args #
- 44 realNodeApp
*Adding dockerignore files and ignoring files (e.g.) any local node modules we don't need will speed up build time*

## Unnamed and Anonymous Volumes

#Connects a folder inside the container to a folder outside the container on host machine, have to enable cross device link

(inside container)

VOLUME [ "/app/feedback" ] 



    docker volume ls  

--shows all volumes, an unnamed volume is an anonymous volume and will always go away when the container is shutdown, volumes are actually stored somewhere in the file directory and managed by docker

## Names Volumes ##
Named volumes -- not deleted when container is removed

-v says store the /app/feedback in a volume on our local machine named feedback

    docker run -p 3000:80 --rm --name feedback-node-rm --name feedback-node-44 -v feedback:/app/feedback  -t feedback-node

## Bind Mounts ##

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

## Environment Variables ##

Here we can set the port env in the cli as well,  using --env (or -e), we must also expose the correct port in the -p flag for this to work

    docker run -p 3000:8000 --env PORT=8000 --rm --name feedback-node-44 -v feedback:/app/feedback -v "C:\Users\cfech\Desktop\code\udemy\docker\44_realNodeApp:/app:ro" -v /app/node_modules -v /app/temp -t feedback-node

--------------------- Environment Variables ------------------

There are also build arguments that allow us to set a default but then also change with the --build-arg tag without changing the docker file ie: having 2 different ports for prod and dev


# Section 4 Networking #
- 67 Networking


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

# Section 5 Multi Container Apps #
- 80 MultiContainer 

**FOR DOCKER CONTAINER COMMUNICATION WE MUST EITHER EXPOSE THE PORTS TO LOCAL HOST OR PUT THEM ALL ON THE SAME NETWORK OR BOTH**

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


## Running Multi Container Apps On The Same Network ##

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

 ## Running Mongo DB With A Named Volume ##

 This will allow us to persist data in our database

    docker run --rm -d --name mongodb -v data:/data/db --network 80-goals-net mongo

This will not create a username and password for this mongo db instance

*DON'T CHANGE THE PASSWORD AFTER THE 1ST CONTAINER AS IT SEEMS TO BE BOUND THE TO NAMED VOLUME, HAVE TO RESEARCH HOW TO CHANGE PASSWORD, PROBABLY ON MONGO DOCKER HUB PAGE*

    docker run --name mongodb -v data2:/data/db -d --network 80-goals-net -e MONGO_INITDB_ROOT_USERNAME=test -e MONGO_INITDB_ROOT_PASSWORD=test -t mongo 

## Volumes And Binds For The Backend ##

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

## Volumes And Binds For frontend ##

-v will bind the source code to the docker container for live source code updates 

*will not work on windows if not using a linux file system*

    docker run -v C:\Users\cfech\Desktop\code\udemy\docker\80_multiContainer\frontend\src:/app/src --name 80frontend --rm -p 3000:3000 -it 80frontend

*Adding dockerignore files and ignoring files (e.g.) any local node modules we don't need will speed up build time*

# Section 6 Docker Compose #
- 91 dockerCompose
*VIEW THE DOCKER-COMPOSE.YML FILE IN 91_DOCKER COMPOSE FOR MORE INFO*

**DOCKER COMPOSE DOES NOT REPLACE THE DOCKER FILE BUT WORKS IN CONJUNCTION WITH IT TO BUILD MORE COMPLEX MULTI CONTAINER PROJECTS WHERE MULTIPLE CONTAINERS MUST TALK TO EACH OTHER. IT ALSO REMOVES THE NEED FOR LONG CLI COMMANDS**

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

# Section 7 Utility Containers And Executing Commands In Containers #
- 102 Utilities

Run a container with node in it 

    docker run -it node

Run in default command

    docker run -d-it node

Docker exec allows us to execute a command inside a running container 

Here we say run npm init [container name] in interactive (-it) mode

    docker exec -it  keen_benz npm init

Run node and override default CMD

    docker run -it  node npm init

## Building Utility Container ##
- see docker file in project

    docker build -t node-util .

Start the docker container with a bind mount, this will allow us to run npm init inside the container and use the bind mount to share the package.json file to our home directory from inside the docker file, in essence than never needing node on our host machine to run npm init - makes this a utility container, more useful when we need a lot of things installed to setup projects

    docker run --name node-util -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util npm init

## Entry Points ##

 Now we just append init because of our npm entry point, no need to have the npm (and it wouldn't work) (see entrypoint in docker file)

    docker run --name node-util -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util init    

Could install too

    docker run -v C:\Users\cfech\Desktop\code\udemy\docker\102_Utilities:/app  -it node-util install express

## Run With Docker Compose ##
     
docker-compose run (service) (cmd to be appended to entry point)

     docker-compose run --rm(optional) example init


# Section 8 More Complex Multi Container Setup With PHP And Laravel 

Refer to 111_dockerLaravelPhp readme for more info

# Section 9 

# Deploying to AWS #

Bind mounts are not for production, only for development not production. They are useful because we don't have to rebuild the image with each code change

In production the container should be stand alone, no code should be needed from the outside. So when we build for production we always user COPY instead of bind mounts

## Steps To Deploy A Container To An EC2 From Docker Hub ##
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

## Adding Image To Docker Hub ##

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

---

20. Now we can check our service by navigating to the IP address of the server, found in the instances page of aws.

## Updating Image Running On An EC2 ##

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

## Shutting Down The Container ##

Run 

    sudo docker stop [container name]


## AWS Billing / Free Tier / Stopping an Instance ##

Aws free tier is limited and you can incur charges when using it if your leave your instances running constantly, especially if they are in an auto scale or load balancing group

If not a prod environment you should verify your instance is not in either of these groups, review the free tier allotments per month, and pause/stop the instance when not using it to avoid fees. You can monitor fees/ track usage from the Bill and Cost Management Dashboard

To stop and instance right click it in the EC2 instances window -> stop instance
or -> terminate instance to get rid of it. If you stop an instance and it is an an auto scaling group it will spin up another copy for you so watch out for that


## Deploying to ECS ##
Much more complicated
1. Create a cluster on aws, this is where all your tasks/containers sit. There are two options EC2 where you have a whole server and must manage/secure it or Fargate where you can just deploy your containers and have them be managed by AWS. You can create a private vpc for the container if necessary.
2. Create a task definition which includes information about your container. You can store your container on docker hub, a private registry or aws Elastic Container Registry(ECR) Service
    2a. You must select a role for the task that controls the permission aws will give the task , the role "ecsTaskExecution" should be created the 1st time the container setup wizard is used
    2b. Manage cpu's/ram 
    2c. Add the container(s) you want with the docker configuration (ports, envs, volumes)
3. Create a Service on the cluster - this will run tasks based on the task definition that is selected. Here you select the task:version you want to run as well as assign load balancers, autoscaling, vpcs and sub nets. Hit create and it will launch the container(s) listed in the task definition.

*To use ECR search for it on AWS, create a repository and use the cli command to push your image. You will have to have aws cli configured for this*


# Section 11 Kubernetes #

Kubernetes is a tool that helps deploying monitor and scale docker applications.
It does not replace docker but works hand in hand with it. There are a lot of similarities to that of AWS ECS provides including scaling and monitoring health of containers, relaunching if necessary. 

![image](./images/k8s-core.PNG)

## Nodes ##
---

![image](./images/k8s-all-nodes.PNG)

## Master Node ##

Kubernetes works by having a master node that runs services (API Server, which talks to the kubelet service on the worker node, 2. The scheduler that watches the pods and chooses worker nodes to add need pods due to health or scaling, 3. The cube controller manager watches the worker nodes to ensure we have the correct number of pods up and running. 4. Optional - There is also a cloud controller manager that performs the same tasks but to talk to a cloud service provider ) to manage a lot of worker nodes. 

## Worker Nodes ##

![image](./images/k8s-master-node.PNG)

The worker node is a machine (ie: ec2 instance) that host pods, pods host one or more containers and their resources such as volumes IP's and run configurations. Pods are managed by the master node. May have multiple containers inside a pod. Could have multiple pods with the same or different pods. Pods have to have some other software , docker to run docker containers, the kubelet which is responsible for communicating with the master node. And a proxy service which manages inbound and outbound network traffic.

![image](./images/k8s-worker-nodes.PNG)

![image](./images/k8s-vs-you.PNG)

# Section 12 Installing Kubernetes #

## Installing Kubernetes (Windows) ##
Have to install kubernetes

https://kubernetes.io/releases/download/

Install: 
- Kubectl - kubernetes controller, we use this to communicate with the master node to express what we want to happen (always need this locally)

Once installed and path updated test Kubectl with to show version

    kubectl version --client

- Minikube for local development, uses a vm on local machine that holds the cluster, can be run in most hypervisors:  vmware, virtual box etc.. or a docker container

Minikube will configure kubectl to look for minikube environment, in the cloud it would be talking to the cloud provider

https://minikube.sigs.k8s.io/docs/start/

**For windows need admin privileges to install**


## Running Kubernetes With Kubectl And Minikube ##

Once minikube installed run to setup a kubernetes cluster on your machine 

    minikube start (will start by default in docker)

or 

    minikube start --driver=[virtualbox, hyper-v, etc...]

Can run  to check status of the cluster

    minikube status 

Can run to see a web dashboard of the cluster

    minikube dashboard

Other Common Cmds

    minikube pause

    minikube unpause

    minikube update-context


## Kubernetes Objects ##
### Pod Object ###
---
- Pod is the smallest unit Kubernetes interacts with, it contains and runs one (usually) or multiple containers.

- Pods contain shared resources (volumes) for all Pod containers

- Pods have cluster internal ip address that can be used to send requests to the pod. 

- Containers in the pod can communicate via localhost

- Pods are designed to be ephemeral(do not persist), all the resources in the pod are lost if a pod is replaced or moved. This a deliberate design decision.

- Containers work like this as well. Could use volumes to persist data .

- For pods managed by the user you would need a controller.

### 185 Deployment Object  ###
---

- One of the key objects we work with

- Create a deployment object which we give instructions about the number and types of pods we wish to deploy

- Controls one or multiple pods

- Set a desired target state (two pods with x containers running) and Kubernetes will do the leg work.
ie: create the containers and pods, and places the pods on worker nodes with sufficient resources to handle them

- Deployments can be paused, rolled back or deleted. IF some code has a bug we can just rollback and then fix the bug in due time

- Can use autoscaling to create/delete more pods if necessary by tracking cpu% and other metrics 

- We can create multiple deployments to having multiple different pods. We do not typically create pods by themselves. We let the deployments do that


## FROM  Readme 186 first Kubernetes  ##
---

Must build an image to run on the a container in a pod on the cluster

    docker build -t 186-first-kub .

to push to docker hub must tag with docker hub repo name 

    docker tag 186-first-kub cfech/first-kub:[version optional]

then

    docker push cfech/first-kub

### Imperative Creation Example ###
---

![image](./images/imperative%20vs%20declarative%20deployment.PNG)

Start the kubernetes cluster to start the master node 

    kubectl create (shows help)

Kubernetes cluster runs in a vm so we cant just give it an image from our local machine, must pull it from a registry 

- talking to the master node 
- scheduler analyzes currently running pods and finds best node fro the new pods 

    kubectl create deployment first-app --image=cfech/first-kub
    [       cmd       ] [name of deployment ] [image location]



Shows the deployments

    kubectl get deployments


Show all pods 

    kubectl get pods

To delete deployments

    kubectl delete deployment [deployment name]


### 188 Service Object ###
---
![image](./images/service_objectPNG.PNG)


![image](./images/behind%20the%20scenes%20-%20services.PNG)

- To expose a pod to the outside world we need a service
-  Pods have an internal IP by default but it changes when the pod is replaced, which is pretty often

- 2 problems, cant use internal ip to access from outside the cluster and 2 it will change when the pod is replaced

- Cant rely on the pod to keep the same ip address. 

- Service groups pods and gives them a shared static ip address that wont change, and we can expose this address to the web. 

**Clusters are not reachable the outside world at all without a service**

- To expose a pod created by a deployment run This will create the necessary service

    kubectl expose deployment first-app --type=LoadBalancer --port=8080
   [ cmd   ]       [type] [deployment name] [use a load balancer for unique address for the service] [port exposed by project]

Other "types" are 

1. ClusterIp - gives a default IP only accessible inside the cluster

2. NodePort - Will expose based on the IP of the worker node, can be accessed from outside

3. LoadBalancer - Utilizes and LB and generates a unique address for this service, will also evenly distribute traffic across all pods, managed by this service. 

- load balancer is only available if the infrastructure supports it (AWS and minikube do support it)

to delete 

    kubectl delete service first-app [service name]


To see running services

    kubectl get services

- This will show us the services running and their internal/external IP's if using aws we would see an ip instead of pending but minikube is a vm on our host machine so does not have that capability

![image](./186_first_Kubernetes/services.PNG)


for local development we can get around that by using the minikube specific service command. If we deploy on a cloud provider it should provide an external IP for us

    minikube service first-app
                    [app name]


will run a local host type server with a 127.0.0.1 ip

### 190 Restarting Containers ###
---

If your container has an error and crashes kubernetes will restart the container. This is a behavior of our deployment. We want 1 pod(container) always running so the deployment will match the required state.

can reproduce this by using the demo project in 186_first-kubernetes following the steps above (or just use my image on docker hub if still there), launching the pod and adding a service with a load balancer, then navigating to the /error page which causes a crash, then back in cmd/terminal run

    kubectl get pods 

a couple times to see the different states of the pod. 

**Kubernetes does NOT create new containers/pods. It restarts the ones that have gone down**
### 191 Scaling in action ###
---

If don't have auto scalding configured Can scale up a deployment by 

    kubectl scale deployment/first-app --replicas=3
    [    cmd ] [deployment/name]      [have 3 pods at all times]

Then can check with 

    kubectl get pods

    
Scales back down 

    kubectl scale deployment/first-app --replicas=1

### 192 Updating Deployments ###
---
rebuild and re push image to image registry

kubectl will only pull images with unique tags

    docker build cfech/first-kub:2 .

push to repo

    docker push cfech/first-kub:2

- now will have a unique tag

then can run 

    kubectl set image deployment/first-app first-kub=cfech/first-kub:tag
    [cmd           ]   [deployment name]  [current container] = [new image]


check rollout status

    kubectl rollout status deployment/first-app
                                        [deployment name]
### 193 Deployment Rollbacks and History ###
---

- if we try to use a tag (line 928) that doesn't exist it will will fail

- can roll back this update by 

        kubectl rollout undo deployment/first-app
                                        [deployment name]

- if we ant to revert to an older deployment must take a look at the deployment history

        kubectl rollout history deployment/first-app

![image](./images/deployment-history-example.PNG)

- can get details with --revision flag

        kubectl rollout history deployment/first-app --revision=3

![image](./images/deployment-revision-details.PNG)

- to revert back to deployment revision 1

        kubectl rollout undo deployment/first-app --to-revision=1

duplicate cmds: 

        kubectl delete service first-app
        kubectl delete deployment first-app

### 194 Imperative vs Declarative Approach ###
---

![image](./images/imperative%20vs%20declarative%20deployment.PNG)

- in imperative we always have to repeat the same commands
- always had to run "docker run etc..." until we started using docker compose 
- declarative allows us to write down all our kubernetes info into a resource definition

- could define different types of objects kubernetes understands, such as pods, services and deployments

called with 

        kubectl apply -f example.yml

### 195 Creating A Deployment Configuration File With Declarative Approach ###
---
- includes 196 Adding Pod and Container Specs

- see 186_first_kubernetes/deployment.yml for notes

https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
https://kubernetes.io/docs/reference/


- to use this file, can have multiple -f is we want, then file path
    
    kubectl apply -f='deployment.yml'

- without a selector will get 

        error: error validating "deployment.yml": error validating data: ValidationError(Deployment.spec): missing required field "selector" in io.k8s.api.apps.v1.DeploymentSpec; if you choose to ignore these errors, turn validation off with --validate=false

### 197 Working With Labels And Selectors ###
---
https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

- selectors take in label labels of pods, these labels to the deployment which pods belong to it so that the deployment can manage them

#used to match the labels of the pods we want to be managed by this deployment

        ...
         #used to match the labels of the pods we want to be managed by this deployment
        selector:
        # for deployment we can use matchLabels or/and matchExpressions
            matchLabels:
            myApp: second-app  **XXX**
        
        #--------------- POD -------------------------
            
            ...
            
            # we need this because we will feed this label to the deployment selector in order for the deployment to be aware we want this pod(s) to be managed by it 
            labels:
            #values here can be anything we want 
                myApp: second-app XXX **XXX**


- Now we run 

        kubectl apply -f='deployment.yml'

- can check with 

        kubectl get deployments


### 198 Creating A Service Declaratively ###
---
![image](./images/service_objectPNG.PNG)

- need a service to be able to view the deployment , see  186_first_kubernetes/service.yml

- once defined we can then create the service with:  (syntax seems to be variable)

        kubectl apply -f service.yml

                        [file/file path]

can check with 

    kubectl get services

- then must expose the service to minikube with 

        minikube service dec-service
                        [name of service]

### 199 Updating And Deleting Resources While Using Declarative Approach ###
---

- can just change your yml file and reapply it

- ie change replicas to 2 or image you want 
- major benefit is you can just change the config file and re apply it. dont have to type long commands in succession to get this done

Deleting resources: 

could still use the delete commands individually

or could call 

        kubectl delete -f deployment.yml -f service.yml
                        [file name]

### 200 Multiple Vs Single Deployment Files ###
---

- could combine service.yml and deployment.yml into the same file and create both objects there

- see ./186_first_Kubernetes/parent.yml

- could have as many resource declarations in 1 file as you want, 

- must include '---' between your resources

- best project to put service first
- a service will continually analyze all pods created in the cluster to see which ones it should be monitoring via selectors

### 201 Labels And Selectors Continued ###
---
https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

- can use matchLabels or matchExpressions

    selector:
        matchLabels:
        myApp: second-app

- matchExpression allows us to have some more control by having a list of expressions that all have to be satisfied for the pods to be managed
- expressions example, look for a key with myApp, operator (In, NotIn, Exists DoesNotExist), value of what we are looking for
    matchExpressions:
        selector:
          - {key: myApp, operator: In , values: [second-app, something-else]  }

**Could also use selectors on cli commands**
- object must have a label, 

        kubectl delete deployments,services -l group=example
                    [what types to deploy ] -l  [ labelKey=labelValue ]

### 202 Liveness Probes ###
---
https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

- how does kubernetes check if our pods and containers are healthy? 

- we can configure this if we want
- see ./186_first_kubernetes/deployment.yml 

- can add the livenessProbe to our container configuration

      ...
      containers:
      #name of our container
        - name: second-nodejs-app
          #image we want to use
          image: cfech/dec-kub
          livenessProbe: 
          # send an http get to / on port 8080 (the port our container exposes), could have extra headers if we want
            httpGet:
              path: /
              port: 8080
            #the amount of time between checks, ie every 10 seconds
            periodSeconds: 10
            # wait 5 seconds before the fist check
            initialDelaySeconds: 5

-- WHAT IS THE DEFAULT

### 203 A Closer Look At Configuration Options ###
---

- cna configure env variables,  the image, how the image is pulled and more

- if we specify latest the service will always re-pull the latest image on pod restart

        image: cfech/dec-kub:latest

        vs

        image: cfech/dec-kub

or could set imagePullPolicy: (Always, Never or Preset), will either always pull it, never pull it or only pull if not present

- if you the apply the update it will pull the new image (may need a pod restart?)

        kubectl apply -f .\deployment.yml

### 204 A Summary ###
---
![image](./images/k8s-vs-you.PNG)

# 13 Managing Data & Volumes With Kubernetes #

- how do we store and manage data? 
- how will our data survive if oru containers or pods shut down?

### 207 Volume recap ###
---
- run with 

        docker compose up -d 
                            [detached] ( optional)

- docker volumes typically store C:\ProgramData\docker on windows
- can add specific destination by 

        volumes:
            - C:\Users\cfech\Desktop\udemy\docker\kubernetes_volumes:/app/story

            [local path ] : [container path]

- ./207_Kubernetes_Volumes/docker-compose.yaml

### 208 Kubernetes and Volumes More Than Docker Volumes ###
---
![image](./images/section_13/state.PNG)

- user generated data needs to persist
- intermediate data is only needed temporarily and usually destroyed eventually
- both type generally need to survive container restarts
- volumes help with this

![image](./images/section_13/volumes.PNG)

- how can we have kubernetes add volumes to the containers it starts/manages for us?

### 209 Kubernetes Volumes VS Docker Volumes ###
---

![image](./images/section_13/k8s'_and_volumes.PNG)

- kubernetes has powerful volume support
- local = folder on worker node where pod is running 
- cloud provider volumes ie: aws, google cloud, azure etc..
- by default volume lifetime is tied to pod lifetime since volumes exist inside the pods 
- survives container restarts but not pod restarts

![image](./images/section_13/k8's_vs_docker_volumes.PNG)

- kubernetes allows us more control over where the data is stored
- docker volumes are folders/directories somewhere on your host machine 

*c:\Program Data\Docker by default*

### 210 Creating A New Deployment And Service ###
 1. write deployment and service yml ./207_Kubernetes_Volumes/deployment.yml, ./207_Kubernetes_Volumes/service.yml
 2. create the image and push to docker hub (or registry of your choice)

        docker build -t cfech/k8s-volume .
        docker push cfech/k8s-volume

3. now run these deployment and service files to spin up the correct service
- check minikube is running: 
        
        minikube status

- if it is not 

        minikube start

- once running to spin up required kubernetes objects 

        kubectl apply -f deployment.yml -f service.yml

- then expose service to minikube 

        minikube service k8s-story-volume

---
side note to delete service 

        kubectl delete service first-app [service name]

---

### 211 Getting Started With Kubernetes And Volumes ###
---

https://kubernetes.io/docs/concepts/storage/volumes/

- can find all the types of volumes at the link above
- there are many types of volumes you can use with kubernetes

### 212 EmptyDir Volume Type ###
---

https://kubernetes.io/docs/concepts/storage/volumes/#emptydir

    "An emptyDir volume is first created when a Pod is assigned to a node, and exists as long as that Pod is running on that node. As the name says, the emptyDir volume is initially empty. All containers in the Pod can read and write the same files in the emptyDir volume, though that volume can be mounted at the same or different paths in each container. When a Pod is removed from a node for any reason, the data in the emptyDir is deleted permanently.

    Note: A container crashing does not remove a Pod from a node. The data in an emptyDir volume is safe across container crashes.

    Some uses for an emptyDir are:

    - scratch space, such as for a disk-based merge sort
    - checkpointing a long computation for recovery from crashes
    - holding files that a content-manager container fetches while a webserver container serves the data
    - Depending on your environment, emptyDir volumes are stored on whatever medium that backs the node such as disk or SSD, or network storage. However, if you set the emptyDir.medium field to "Memory", Kubernetes mounts a tmpfs (RAM-backed filesystem) for you instead. While tmpfs is very fast, be aware that unlike disks, tmpfs is cleared on node reboot and any files you write count against your container's memory limit."

- volumes are pod specific so we must define them in the same place we define a pod
- in this case .\207_Kubernetes_Volumes\deployment.yml

**To Update Deployment**
---
1. edit app
2. rebuild and tag the image 

        docker build -t cfech/k8s-volume:1 .

3. push the image to registry

        docker push cfech/k8s-volume:1


4. update deployment.yml with the tag

        spec:
            containers:
                - name: volume-story
                image: cfech/k8s-volume:1

5. apply update to deployment 

        kubectl apply -f .\deployment.yml

- could also use 

        spec:
            containers:
                - name: volume-story
                image: cfech/k8s-volume:1
                imagePullPolicy: Always

- and skip tagging the image so the latest one is always pulled but may have to restart the container for that
---

- After this update a new container will be started and our data will not persist, so we want to use a volume to solve this issue

see .\207_Kubernetes_Volumes\deployment.yml for volume configuration


### 213 Volume Type  hostPath ###
---
https://kubernetes.io/docs/concepts/storage/volumes/#hostpath

- what happens if we have multiple replicas, with multiple pods? how do we allow pods to share volumes so no matter what container you hit you get the volume data? 

- not pod specific 

- see 207_Kubernetes_Volumes\deployment-hostpath.yml for configuration

- hostpath could also be useful if we want to share some data with a pod at start

- not really useful if we have multiple nodes ( minikube only provides 1 node), data will be removed when node is destroyed
- real world apps usually have multiple nodes

### 214 Understanding CSI Volume Type ###
---

https://kubernetes.io/docs/concepts/storage/volumes/#csi


- Container Storage Interface

        "defines a standard interface for container orchestration systems (like Kubernetes) to expose arbitrary storage systems to their container workloads."

- this allows anyone to build drivers to interact with this interface
- if someone has built a drive for the storage type then we could connect any storage type in the world


### 215 From Volumes To Persistent Volumes ###
---
https://kubernetes.io/docs/concepts/storage/persistent-volumes/

![image](./images/section_13/k8s_persistant_volumes.PNG)

- we have a need for pod and node independent volumes when deploying in the real world

- always persist, pod and node independence

- persistent volumes give us full power over how the volume is configured, this is something aws ebs, azure etc.. dont offer

![image](./images/section_13/volumes_to_persistent_1.PNG)

![image](./images/section_13/persistant_volumes_and_claims.PNG)

- you create persistent volume claims are part of a pod , which reach out to standalone entities, the PV and ask to write/read to them
- could have multiple claims to multiple PV's


https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes

### 216 Defining A Persistent Volume ###
---

- example uses hostpath but this is only for testing. 
- hostpath only works in single node environments ( like local dev with minikube)
- hostpath is not meant to be used (and prob wont work) in a prod environment
- the concepts should remain consistent no matter what type of PV you are using though. 

- see 207_Kubernetes_Volumes\host-pv.yml for config

https://kubernetes.io/docs/concepts/storage/volumes/#hostpath

https://kubernetes.io/docs/concepts/storage/volumes/#hostpath-configuration-example

https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes

### 217 Creating A Persistent Volume Claim ###
---

In oder to connect to the   PV defined in 207_Kubernetes_Volumes\host-pv.yml we must tell our pods to connect or make a claim to it

- see 207_Kubernetes_Volumes\host-pvc.yml for config

- we write the claim which can then be used by pods to make the claim on the PV 

- See 207_Kubernetes_Volumes\deployment-pvc.yml for pod claim configuration
- with this config data will be fully independent from pods and nodes, if a pod or node is terminated the data should persist


### 218 Using A Claim In A Pod ###
---
 https://kubernetes.io/docs/concepts/storage/storage-classes/

 - storage classes - defines how storage should be provisioned , minikube comes with a standard storage class 

 - have to reference this in the host-pv and host-pvc.yml files

 - now ready to apply the files 

-  creating pv

        kubectl apply -f host-pv.yml

- creating claim
        
        kubectl apply -f host-pvc.yml

-  updating deployment to use the claim 

        kubectl apply -f deployment.-pvc.yml


- to see your configured/existing PV

        kubectl get pv


- example output 

            NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM              STORAGECLASS   REASON   AGE 
            host-pv   1Gi        RWO            Retain           Bound    default/host-pvc   standard                4m3s

- to see all claims 

        kubectl get pvc

- example output

        NAME       STATUS   VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE  
        host-pvc   Bound    host-pv   1Gi        RWO            standard       4m12s

**Persistent Volumes are independent from any pods, nodes or containers, this gives us pod and node independence, this allows us to store data so it will not be lost**


### 219 Volumes Vs Persistent Volumes ###
---

![image](./images/section_13/normal_vs_persistant_volumes.PNG)

- volumes allow you to persist data, both allow you to keep data through a container restart

**Normal Volumes**
- do help you persist data
- independent from containers but not pods
- pod is removed data is removed for emptyDir type
- other value types may not lose it such as data stored in cloud config
- volume config is included in same file as the pod config


**Persistent Volumes**
- not defined with pods, but stand alone resources
- claimed with persistent volume claim
- easy to reuse/administer across many pods
- work better for bigger projects
- gives pod and nod independence
- data will not be lost if pod/node is destroyed or launched on a different node

### 220 Using Environment Variables ###
---

- have to pass envs in almost all apps, 

- here we have to pass in the STORY_FOLDER variable

207_Kubernetes_Volumes\app.js

const filePath = path.join(__dirname, process.env.STORY_FOLDER, 'text.txt');

- this is set in the deployment.yml configuration where  we define the container

- see 207_Kubernetes_Volumes\deployment-pvc.yml for env config

- inline env

            spec:
            containers:
                - name: volume-story
                image: cfech/k8s-volume:2
                env:
                    - name: STORY_FOLDER
                    value: 'story'

### 221 Environment Variables And ConfigMaps ###
---

- https://kubernetes.io/docs/concepts/configuration/configmap/

- don't have to add the environment variable in the container spec, could keep them in a different file so different container specs can use the same environment variable file

- see 207_Kubernetes_Volumes\env.yml for config


- Can create the config map 

        Kubectl apply -f env.yml

- check config maps 

        kubectl get configmap

- Now have to tell our container to use it 

- example of pulling from config map, pulling env from 207_Kubernetes_Volumes\env.yml to 207_Kubernetes_Volumes\deployment-pvc.yml

        containers:
        - name: volume-story
          image: cfech/k8s-volume:2
          env:
            - name: STORY_FOLDER
              valueFrom:
                configMapKeyRef: 
                  name: env-configMap
                  key: folder

- then apply the deployment update

        kubectl apply -f deployment-pvc.yml


# Some Object CLI Commands #

        kubectl get pods
        kubectl get services
        kubectl get deployments
        kubectl get pv
        kubectl get pvc
        kubectl get configmap

        kubectl delete -f deployment.yml -f service.yml

        kubectl delete -f .\deployment-pvc.yml -f .\service.yml -f .\host-pv.yml -f .\host-pvc.yml -f .\env.yml

# 14 Kubernetes Networking #

- see -> ./slides-kubernetes-network.pdf

- Our containers must be able to communicate with us as well as the outside world 
- another look atr services
- pod-internal communication (pod with multiple containers)
- pod to pod communication


- using postman to communicate with these pods

### 225 Starting Project And Goal ###
---
- auth-api - verifies and generates user tokens
- tasks-api - returns a list of stored tasks or creates new tasks ( needs a token to identify a logged in user and will reach out to auth api to verify user)
- users-api  - creating and logging in user

**Goal of this is to configure kubernetes to allow these 3 containers to talk to each other**

send request to login -> users api verifies login -> reaches out to auth api which sends back a token

### 226 Creating First Deployment ###
---

configuring user api for deployment
1. build image

        docker build -t cfech/kub-225-user-app .

2. push to docker hub

        docker push cfech/kub-225-user-app

3. write deployment yml, see 225_Kubernetes_networking\kubernetes\users-deployment.yml
4. apply the deployment kubectl apply -f .\users-deployment.yml

### 227 Another Look At Services ###
---

- need a service to reach the user-api from the outside world
- services allow us to connect to the outside world by providing us a **STATIC IP** , and being configured to allow public access

1. write service yml 225_Kubernetes_networking\kubernetes\users-service.yml
2. apply service 

        kubectl apply -f .\users-service.yml

- for minikube must expose service 

        minikube service users-service 
                        [service name]

### 228 Multiple Containers In 1 Pod ###
---

- we want containers in the same pods communicate with each other

- users -> auth api
- have to pass in urls through environment variable to setup communication

ex: from users-api 

         const hashedPW = await axios.get(`http://${process.env.AUTH_ADDRESS}/hashed-password/` + password);

- after have a working users api have to create an auth API container

1. build image

        docker build -t cfech/kub-225-auth-app .

2. push to docker hub

        docker push cfech/kub-225-auth-app

3. write deployment yml, since we want to add this to the same pod as our users-api we just add it to the   225_Kubernetes_networking\kubernetes\users-deployment.yml
- this includes providing the env variable with for internal pod communication
4. apply the deployment 

        kubectl apply -f .\users-deployment.yml


- no need to update service file with the auth port because auth is only a pod internal, we only expose the port published by the users api

### 229 Pod Internal Communication ###
---

- when two containers are in the same pod, kubernetes allows you to send a request to local host using the port exposed by the other container

so can communicate from user-api to auth-api @ localhost:80

- see env for config 225_Kubernetes_networking\kubernetes\users-deployment.yml

auth in docker compose, localhost in kubernetes

- then apply the deployment and it will create a pod with 2 containers that have internal communication while users-api has external connectivity

        kubectl apply -f .\users-deployment.yml


### 230 Creating Multiple Deployments ###
---

- we want to have the users, auth and tasks in different pods
- however we do not want the auth  we want the users to talk to the auth and the tasks to talk to the auth but we do not want the auth to be public facing, so we need to use service type ClusterIP - see 225_Kubernetes_networking\kubernetes\auth-service.yml
- this will include multiple services, with the service for the auth api being cluster internal
- we need pod to pod communication inside of a cluster - so we want a type 

- have to build auth image and push to docker hub

        docker build -t cfech/kub-225-auth-app .
        docker push  -t cfech/kub-225-auth-app


### 231 Pod to Pod Communication With IP Addresses and Environment Variables ###
---

https://stackoverflow.com/questions/45759205/what-environment-variables-are-created-in-kubernetes-by-default


- in order for a container (users in this case) to talk to a container in another pod (auth in this case) we have to provide the ip address of the service that exposes the other pod

*side note - localhost works for containers talking to each other in the same pod*

- must find out what ip address the auth services is going to have

- one option is to create this service first and take look at the ip it is assigned and pass that as an env in the deployment.yml of the other pod, this works but not best options


- another option is using the exposed environnement variables built into kubernetes that will tell us the ip of the auth service in the form of [NAME]_SERVICE_HOST (name in this case is auth_service)

- see 225_Kubernetes_networking\users-api\users-app.js

        //231, using built in kubernetes env
        const response = await axios.get(
            `http://${process.env.AUTH_SERVICE_SERVICE_HOST}/token/` + hashedPassword + '/' + password
        );


### 232 Using DNS for Pod to Pod Communication ###
---

https://kubernetes.io/docs/tasks/administer-cluster/coredns/

- Kubernetes runs a dns called coredns, this allows us to set domain names inside of our cluster so we dont have to use IP's if we dont want

- to use this just pass into an env [service-name.namespace]

- namespace is a logical grouping of deployments/service etc. inside a cluster

- can check the namespaces by running 


        kubectl get namespaces

- pods are added to "default" by default

- ex 

        env:
          - name: AUTH_ADDRESS
            value: "auth-service.default"

### 233 Which Is Best ###
---



- Do you want more than 1 container in the same pod? Should only have this if the containers are tightly coupled

- If we want pods to talk to each other we need services for the different pods to give static ip, we can access this ip by 
1. manually generating it and pasting it into an env 
2. using the built in kubernetes env variables
3. using the generated domain name by coredns 


**Also a Challenge**
- write the deployment and service for the tasks app, modify the code, push the container to get it working with the other services

- part is to build task app image and push to docker hub
        
        docker build -t cfech/kub-225-task-app .
        docker push  -t cfech/kub-225-task-app


### 235 Adding A Containerized Frontend ###
---
- have to containerize the frontend and push it to docker hub


        docker build -t cfech/kub-225-frontend .
        docker push cfech/kub-225-frontend

will get a cors error so have to add some code to tasks api to handle this, see 225_Kubernetes_networking\tasks-api\tasks-app.js

- here to show a frontend that is not postman can communicate with our backend 

### 236 Deploying A Frontend Container With Kubernetes ###
---

- creating a new deployment because not tightly coupled or directly dependent on either tasks, users, or auth api

- see 225_Kubernetes_networking\kubernetes\frontend-deployment.yml and 225_Kubernetes_networking\kubernetes\frontend-service.yml for configuration

- build and push frontend to docker hub

- apply the changes

        kubectl apply -f frontend-deployment.yml -f frontend-service.yml

- still have to deal with getting the ip/domain name of our other apps to the frontend 

by hard coding in a known domain name or ip/port 

- could still use these methods if the code is running on the server, not in the browser


1. manually generating it and pasting it into an env 
2. using the built in kubernetes env variables
3. using the generated domain name by coredns 


### 237 Using A Reverse Proxy For The Frontend ###
---

- can configure our web server to redirect our web request to a different location based on structure and/or target

- see 225_Kubernetes_networking\frontend\conf\nginx.conf

*Side Note*
- nginx config and reverse proxy explanation

        server {
            - port to listen on
        listen 80;
        
        - any request  that comes in to /api... redirect to this location
        location /api {
            proxy_pass http://127.0.0.1:63827;
        }

        - default location for all requests "/",
        - root location of the html file
        - types of index to look for
        -if you dont find index.html throw 404
        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
            try_files $uri $uri/ /index.html =404;
        }

        - location of the config file inside the container
        include /etc/nginx/extra-conf.d/*.conf;
        }`


- The nginx config runs on the server itself, inside of the cluster not inside of the browser like react/js code

- so this means that we can use the built in kubernetes variables, such as  using the generated domain name by coredns  [tasks-service.default]

see ### 232 Using DNS for Pod to Pod Communication ### LINK**

- SO EVEN THOUGH OUR CODE EXECUTES ON THE BROWSER, NOT IN THE CONTAINER, WE CAN STILL PARSE THE ROUTES AND USE A REVERSE PROXY TO REDIRECT REQUESTS

- new nginx configuration, 8000 is the port the tasks app listens on


          
    location /api/ {
        proxy_pass http://task-service.default:8000/;
    }


## Common Kubernetes Deployment Cycle ##

1. build image locally 

        docker build -t cfech/kub-225-task-app .
                        [image tag] [file location]

2. push to a registry

        docker push  -t cfech/kub-225-task-app
                        [username/image:tag]

3. write deployment file 

- see 225_Kubernetes_networking\kubernetes\tasks-deployment.yml for example , pay attention to the tag on the image of the pull policy, if set to latest or not

- imagePullPolicy: (Always, Never or Preset), will either always pull it, never pull it or only pull if not present

4. write service file 

- see 225_Kubernetes_networking\kubernetes\frontend-service.yml for example

- see 243_AWS_EKS\kubernetes\auth.yaml for service and deployment in same file

5. apply the deployment and service 

        kubectl apply -f tasks-deployment.yml -f tasks-service.yml

6. (Minikube Specific) Expose service with minikube 

    - get service name 

            kubectl get service

    - expose service 

            minikube service frontend-service
                                [service name]

## Updating The Container ##

1. re build image locally (could add a tag ie image:2, or use default latest, just make sure to keep in sync with deployment file)

        docker build -t cfech/kub-225-task-app .
                        [image tag] [file location]

2. push to a registry 

        docker push  -t cfech/kub-225-task-app
                        [username/image:tag]

4.  Delete the deployment and recreate (5) in order to pull next image 

        kubectl delete -f tasks-deployment.yml


5. re-apply the deployment to pull the new image and generate the new pod

        kubectl apply -f tasks-deployment.yml 

6. (Minikube Specific) Expose service with minikube if stopped, not needed if kept open the whole time

    - get service name 

            kubectl get service

    - expose service 

            minikube service frontend-service
                                [service name]


# Section 15 AWS EKS #

- So far have bee working with just local development
- How do we put this application now into production for the world to use?

- Can use Amazon Elastic Kubernetes Service (EKS)

### 241 Deployment Options And Steps ###
---

![image](./images/k8s-vs-you.PNG)

- Keep this in mind

- while kubernetes does create and manage your objects, it will not create the cluster/nodes it must be installed on the nodes, both the control center and the worker nodes must be setup
- minikube sets up this dummy cluster for us in a development environment on the local machine 
- must setup the infrastructure for kubernetes to run on

- will we use our own data center or leverage a cloud provider (aws, azure, google cloud etc ...)

![image](./images/section_15/deployment-options.PNG)

- cloud provider, could configure a bunch of ec2s to run a cluster, ie install the software and create the network manually of using a tool like KOPS https://github.com/kubernetes/kops

- or could use cloud managed service like EKS, here we just define our cluster architecture and the manager service takes care of the rest for us, may nto have a much fine grained control but this is not always necessary

### 242 AWS EKS vs AWS ECS ###
---

- EKS - for kubernetes cluster
- ECS - for standalone containers 

![image](./images/section_15/ecs-vs-eks.PNG)


### 243 Preparing The Starting Project ###
---

see ./243_AWS_EKS

- can setup mongo db here if want to follow along and place in the 243_AWS_EKS\kubernetes\users.yaml file as well as 243_AWS_EKS\docker-compose.yaml

https://www.mongodb.com/atlas/database

- build and push the images for users-api and auth-api in order to retrieve them on docker hub 


### 246 Creating And Configuring Kubernetes Cluster With EKS ###
---

1. Configure the cluster
 - pick the version
 - pick the service role, 
        
    -- need to create a role for eks, by creating a new role with the AmazonEKSClusterPolicy, which will include everything we need, name the role and apply it to the cluster

 *behind the scenes EKS will create some ec2s to run your cluster, so we must allow EKS to provision resources on our behalf. This is done through IAM roles*

 - next must configure the cluster network that all the nodes will be added, we want to have both a public and private subnet that we can have nodes running on

 - can easily create this with cloudformation, using an s3 url, give it a name and leave the defaults or from the vpc console

 - back in cluster creation network tab, select your new vpc and subnets
 - select public and private under cluster endpoint access

 - can configure logging if you want, review and create

 - this creates and EKS cluster, a Kubernetes cluster with the help of  EKS

2. Have to configure kubectl to talk to AWS EKS if want to use it, by default it talks to minikube 

- can find config file at user/.kube/config on both mac and windows

- C:\Users\cfech\.kube\config

- ./config - minikube


- can configure to talk to eks by using the aws cli, have to install aws cli, create an access key and IAM and login to aws via cli

        aws configure # pass in your accessKeyId, SecretKeyId, and Region name

after we configure aws cli and the cluster is active run 

        aws eks --region us-east-1 update-kubeconfig --name kub-demo
                         [your region]                      [cluster name] 

- will upd the .kube/config file to talk to this cluster

- have to change this in order to talk to eks when setup


### 247 Adding Worker Nodes ###
---

 2. Create worker nodes

 - in the compute section on the cluster add a node group.

 - then assign an IAM role for the node (the worker nodes are just ec2s, which need permissions for logging and networking), have to create it in IAM, create a role and give it the eksWorkerNodePolicy and the AmazonEKE_CNI_Policy and the AmazonEC2ContainerRegistryReadOnlyPolicy, name the role and assign it to the node in the cluster/node group config

 - leave the rest default and proceed

 - set compute and scaling config sets the type of ec2s managed (ie small, medium large etc...), t3.small may be the smallest you can use, micro doesn't seem to have enough resources for kubernetes 

 - can then set the scaling policy, ie how many nodes, min, max and desired. Can have more the one pod on a node

- next configure networking, ie subnets and ssh into nodes (if we want)

- review and create 

- now eks will launch and install all of the software on these nodes and the networking is configured

- at this point it is now ready to start building deployments, services etc ... at this point it is at the state of minikube just after install

**FYI can see these instances in the EC2 Dashboard**

### 248 Applying Our Kubernetes Config ###
---


- apply our two files 243_AWS_EKS\kubernetes\auth.yaml and 243_AWS_EKS\kubernetes\users.yaml ( with kubectl pointing at aws eks cluster, and images in docker hub already)

        kubectl apply -f auth.yml -f user.yml 

- can check deployments, services and pods to monitor progress


- now on eks our services of type LoadBalancer we are provided a url, so we can send requests to this url from the outside world, no need to use minikube service (or some equivalent) to expose it

- after deploying a service of type LoadBalancer you can then see this Load Balancer in the EC2 console

*containers are in pods, pods are distributed by kubernetes across nodes based on available space/resources*

### 249 Getting Started With Volumes ###
---

- With a running application now need a volume to persist data 
- here we will us the CSI type  ( dont have any code that writes to a hard drive but just an example)

- https://kubernetes.io/docs/concepts/storage/volumes/#csi

- can add a volume in the yml file or setup a Persistent Volume and Persistent Volume Claim [216 Defining A Persistent Volume](#216-defining-a-persistent-volume)
    + [217 Creating A Persistent Volume Claim](#217-creating-a-persistent-volume-claim)

### 250 Adding AWS Elastic File System  ###
---

https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html

- will use CSI Volume type 
- follow guide above

- have to install the aws efs driver for csi in our cluster so we can use it , aws efs is not natively supported by kubernetes

3. Create EFS from AWS EFS console
- have to have/create a security group to allow access (inbound rules -> nfs, custom, your vpc cider range ( can be found un your vpc console for the vpc your working in) )
- Back on EFS console, create file system, name it  and choose correct vpc (the one your cluster is in)
- customize, next, change security groups to the one your just created for all availability zones, next , next , create 

- now we have a file system that can be used as a volume
### 251 Creating A Persistent Volume For EFS  ###
---

See 243_AWS_EKS\kubernetes\users.yaml for config

- show all storage classes

        kubectl get sc 

- created a storage class, persistent Volume and claim and connected this to our pod/container in the deployment
### 252 Creating A Persistent Volume For EFS  ###
---

**Go Back and Replace user-actions.js and user-logs.js with new updated versions, did not do this yet 4/10/22, rebuild and push to docker hub**

- with the configuration in the uses.yaml file our PV should be working with persistent container/pod/node independent data

- can test this by writing some data, the shrinking the number of replicas to 0 and applying the users.yaml

- once the pods are terminated the change the replicas in the users.yaml file new pods will be spun up

- send another get request to get the logs and if the data is there then it is working


### 253 A Challenge ###
---

files in ./253_EKS_Challenge

- deploy the files provided to aws eks, have to write a deployment/service/pvc for tasks api


### 254 Challenge Solution ###
---

1. build and push 3 images to docker hub
2. Follow directions above to create EKS cluster, worker nodes and EFS file system in AWS Console
3. map kubectl command to talk to that cluster
4. create a  tasks.yaml to create the resources tasks app needs, see 253_EKS_Challenge\kubernetes\tasks.yaml
5. Once kubectl connected to aws, aws cluster, worker nodes and efs are created, and we have pushed our images to docker hub we can apply the auth, tasks and user yaml files to create all of the objects necessary for our app to run
6. test your app with postman and the aws exposed urls ( find by running kubectl get services)
- send a POST request to the user service /signUp to create a user, json body {"email":"my@email.com", "password":"testing"}
- send a POST request to user service / login to login, json body {"email":"my@email.com", "password":"testing"}
- take the token in the response of the /login and paste it into an Authorization header "Bearer [Token]" for GET task service /tasks then send a request to get the tasks  - should get back empty tasks
- create the same authorization header for a POST  to task service /tasks with a json body {"title": "my title", "text": "my text" } to create a tasks
- repeat step above of GET  to /tasks (with authorization header) to see created task
- task array will be unique to the user
- can delete the tasks by sending DELETE request to tasks service /task/:id with the authorization header and task id as a url param

## Additional Areas of Study ##
- creating containers using different languages such as c#, python or java 
- CI/CD with containers (gitlab jobs, travis CI, github actions, aws code deploy)
- AWS Deep Dive and Other Cloud Providers such as Azure, Google, Digital Ocean, Linode etc...
- Advanced Cluster or Docker Administration, ie server admin stuff

# Command Index #

## Docker ##

- start docker service, mac/linux

        sudo service docker start

- Show all running containers

        docker ps

- Show all containers

        docker ps -a 

- build the image, the t is a tag,. the . tells docker the correct docker file is in the current directory
 
        docker build . -t nodeappsetup_20

- run a container with the image nodeappsetupe_20 and map local pro 80 to container port 80

        docker run -p 80:80 nodeappsetup_20

- start an old container

        docker start --id or name---

- will run in detached mode so we are no listening on the console and our console is not blocked
    
        docker start/run -d 

- can re-attach 
    
        docker attach --container name---

- can see logs of a container 

        docker logs --container name---

- reattach  in a different way

        docker logs  -f --container name---


- removing containers

        docker rm --name(s) name1 name 2

- removes all stopped containers at once
    
        docker container prune 

- shows all images

        docker mages

- to remove images 

        docker rmi --image id, 1,2, 3, ...-- 

- removes all images that are not tagged, add -a for all 

        docker image prune

- --rm remove the container when when stopped

        docker run (image) --rm 

- inspect all the config and info of the image
    
        docker image inspect --id----

- docker cp can copy files into a container from local machine (dummy is local file)

        docker cp dummy/. --container name--:/test (:/ path we want )

- copy from container to local
    
        docker --container name--:/test  dummy


- give tags to images and names to containers, --name give the container a name

        docker run -p 80:80 --name 20_node -t 20_appsetup

- giving a tag to image 

        docker build . -t 20_appsetup

- clones old image with a new tag, doesn't rename

                (old)               (new)
        docker tag ass1nodeapp:latest  cfech/node-hello-world

- login to docker hub (or other registry if url is passed)
  
        docker login 

- logout of docker hub

        docker logout 

- pushes to docker hub

                [repo name]
        docker push cfech/node-hello-world

- gets this image from the registry(docker hub), will pull the latest version

        docker pull cfech/node-hello-world

- shows all volumes 

        docker volume ls 

-  help with the volumes

        docker volumes --help 

- See all networks

        docker network ls 

- Create a network

        docker network create favorites-net

- Run a container with node in it, will pull from docker hub

        docker run -it node

- Run in default command

        docker run -d-it node

- Docker exec allows us to execute a command inside a running container, Here we say run npm init [container name] in interactive (-it) mode

        docker exec -it  keen_benz npm init

- Run node and override default CMD

        docker run -it  node npm init

### Docker Compose ###

- start a docker compose finds and builds all images , starts a custom network and attaches all containers to it 

        docker-compose up

- Starts in detached mode

        docker compose up -d

- brings the whole network down and prunes containers and networks

        docker-compose down

- Will remove the volumes as well

        docker-compose down -v

- Will rebuild all images in docker compose (ie: if there is a code change or something the bind mount doesn't pick up)

        docker-compose up --build

- Will just build the missing images but not start the containers

        docker-compose build

## Minikube ##


- Once minikube installed run to setup a kubernetes cluster on your machine 

        minikube start (will start by default in docker)

- or 

        minikube start --driver=[virtualbox, hyper-v, etc...]

- Can run  to check status of the cluster

        minikube status 

- Can run to see a web dashboard of the cluster

        minikube dashboard

- Other Common Cmds

        minikube pause

        minikube unpause

        minikube update-context

for local development we can get around that by using the minikube specific service command. If we deploy on a cloud provider it should provide an external IP for us

        minikube service first-app
                        [app name]


## Kubernetes ##

- check if installed and client version

        kubectl version --client

- Start the kubernetes cluster to start the master node 

        kubectl create (shows help)

- create a deployment 

            kubectl create deployment first-app --image=cfech/first-kub
            [       cmd       ] [name of deployment ] [image location]

### Deployments ###

- Shows the deployments

        kubectl get deployments

- To delete deployments

        kubectl delete deployment [deployment name]

- Show all pods 

        kubectl get pods


- To expose a pod created by a deployment run This will create the necessary service

        kubectl expose deployment first-app --type=LoadBalancer --port=8080
        [ cmd   ]       [type] [deployment name] [use a load balancer for unique address for the service] [port exposed by project]

- check rollout status

        kubectl rollout status deployment/first-app
                                        [deployment name]

- can roll back this update by 

        kubectl rollout undo deployment/first-app
                                        [deployment name]

- if we ant to revert to an older deployment must take a look at the deployment history

        kubectl rollout history deployment/first-app


- can get details with --revision flag

        kubectl rollout history deployment/first-app --revision=3

- to revert back to deployment revision 1

        kubectl rollout undo deployment/first-app --to-revision=1

### Services ###

- To see running services

        kubectl get services

- to delete a running service

        kubectl delete service first-app [service name]

- If don't have auto scalding configured Can scale up a deployment by 

        kubectl scale deployment/first-app --replicas=3
        [    cmd ] [deployment/name]      [have 3 pods at all times]
    
- Scale back down 

        kubectl scale deployment/first-app --replicas=1


### Declarative Approach ###

- apply a file

        kubectl apply -f example.yml

- delete a configuration based on file

        kubectl delete -f deployment.yml -f service.yml
                        [file name]

- delete configuration based on label

        kubectl delete deployments,services -l group=example
                 [what types to deploy ] -l  [ labelKey=labelValue ]

- to see your configured/existing PV

        kubectl get pv

- to see all claims 

        kubectl get pvc

- check config maps 

        kubectl get configmap

- show all storage classes

        kubectl get sc 

## AWS ##

- login to aws account 

        aws configure

- configure local kubectl to run vs aws eks cluster 

        aws eks --region us-east-1 update-kubeconfig --name kub-demo
                         [your region]                      [cluster name] 