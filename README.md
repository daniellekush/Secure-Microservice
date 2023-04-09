# Secure-Microservice

Repository storing the configuration files used in the project.

# Set-up guide
Note that this guide goes through how to set up the main application to run on the browser and how to deploy the cluster in the same way used in the project. It will not go step-by-step of how to configure it identically to the development, this can instead be followed along in Chapter 4 of the report.

Step 1: Install the required software: Minikube (https://minikube.sigs.k8s.io/docs/start/), Docker Desktop (https://www.docker.com/products/docker-desktop/) and kubectl (https://kubernetes.io/docs/tasks/tools/)

Step 2: Open Docker Desktop

Step 3: Open a terminal and type ```minikube start --nodes=2``` to create a cluster with two nodes. With Docker Desktop open, it should automatically detect and use it to create the containers.

Step 4: After Minikube has successfully created the cluster, apply all the manifests (YAML files) in the main directory (YAML files in the External folder should **not** be applied). This can be done using the ```kubectl apply -f filename.yaml```.

The order is important:
1. mongo-secret.yaml
2. mongo-config.yaml
3. mongo.yaml
4. webapp.yaml

With all the manifests applied, the cluster should be identical to the test application with the addition of security context and resource management.

For configuring the security measures from the report, note that the control node files can be accessed by running ```minikube ssh``` and traversing the directories. For example, etcd.yaml is found in /etc/kubernetes/manifests/etcd.yaml .

# How to run

Step 1: Run the command ```minikube start``` in a terminal to start Minikube (if not already started).

Step 2: Run ```minikube service web-app-service``` and keep the terminal open. It should automatically open the service in a browser, if it does not the link is provided in the terminal. Note that if you close this terminal, the service ends and the web application will no longer work. Also note that it might take up to a minute for the application to load in the browser.
