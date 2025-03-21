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
- docker run <application> (run a specific application)
- docker ps (show all running containers)
- docker ps -a (show all running and stopped container)
- docker run -d <application> (run in detach mode)
- docker start <container_id>
- docker stop <container_id>
- docker run -p <host_port>:<container_port> <application>(port binding)

