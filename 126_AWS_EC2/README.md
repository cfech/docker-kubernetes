Build the image

    docker build -t awsexample .

Run the image 

    docker run -d --rm --name awsexample -p 80:80 awsexample


### Adding image to docker hub ####

1. Go to docker hub and create a repo

2. Building the image for docker hub, must give a tag with the docker hub repo name

        docker build -t node-aws-example .

3. Re-tag the image with docker hub username/repo-name

    docker tag node-aws-example cfech/node-aws-example

4. Push to docker hub

    docker push cfech/node-aws-example

*If this fails you may need to login to docker hub account with 'docker login'*




rebuild

docker build -t node-aws-example .

retag

docker tag node-aws-example cfech/node-aws-example


repush
docker push cfech/node-aws-example
