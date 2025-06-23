# CONTAINERS
- A way to package application with all necessary dependencies and configuration.
- Portable artifact, easily shared and moved around.
- Container is a running environment for Image.
- Environemental stuffs are provided by the container.
- Container has a port binded to it which makes it possible it to talk with the applications which are running inside of a container.
- File system is virtual in contienr. It has it's own operating system.
- Contianers can run on same port. Your host (laptop,desktop) has different ports. As long as you bind your host's different ports to same containers ports, it will work fine.
- Detached mode allows you to run a container in the background, freeing up your terminal for other tasks, while still managing the container with Docker commands

# MAIN DOCKER COMMANDS
- docker images (show all images)
- docker pull (pull repository to local envrionment)
- docker run <application> (create a new container from image and run a specific application)
- docker run -d <application> (run in detach mode)
- docker run -p<host_port>:<container_port> <application>(port binding)
- docker run -d -p<host_port>:<container_port> --name <user_defined_container_name> 
- docker ps (show all running containers)
- docker ps -a (show all running and stopped container)
- docker start <container_id> ( will start the contianer with attributes of docker run)
- docker stop <container_id>
<image_name>(user defined container name)
- docker logs <container_id> / docker logs <container_name>
- docker exec -it <container_id> /bin/bash / docker exec -it <container_name> /bin/bash (to debug the container)
- docker network ls (show all networks)
- docker network create <network_name>
- docker build .
- docker build -t <name> .

# DOCKER NETWORK
- Docker creates their isolated docker network where the containers runung.

# CONTAINER REGISTRY
- a repository or collection of repositories used to store and access container images.
- 