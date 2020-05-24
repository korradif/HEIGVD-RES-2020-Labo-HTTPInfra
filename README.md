# HEIGVD-RES-2020-Labo-HTTPInfra
This is the repo for the HTTP lab at HEIG-vd

# Students
Frédéric Korradi and Simon Flückiger

# Branches
Work is done in various "fb" branches, for each step
# General 
find ip address : docker inspect express_dynamic | select-string ipaddress

# Step 1 - Static HTTP server (apache)
Base image: php:7.4-apache

To build image : 
docker build -t res/apache_php .
Then to run it : 
docker run -d -p 9090:80 res/apache_php
to access it : http://127.0.0.1:9090/

# Apache config file location
![ApacheConfigFile](https://raw.githubusercontent.com/korradif/HEIGVD-RES-2020-Labo-HTTPInfra/master/ApacheConfigFile.png)

# Step 2 - Dynamic HTTP Server (express.js)
installed package chance
docker build -t res/express-students .
http://127.0.0.1:8000/generateNumbers to get random numbers using express.js
Node.js version : 12.16

# Step 3 - Reverse proxy
The static configuration is fragile and needs to be improved because as the IP addresses of Docker containers are generated at container startup, the configuration of the reverse proxy could need a change each time we restart containers in order to work properly.
 docker run -it -p 8080:80 php:7.4-apache /bin/bash

## Modules nécessaires
a2ensite 001
a2enmod proxy
a2enmod proxy_http
service apache reload
