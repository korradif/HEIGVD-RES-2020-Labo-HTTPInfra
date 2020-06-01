# HEIGVD-RES-2020-Labo-HTTPInfra
This is the repo for the HTTP lab at HEIG-vd

# Students
Frédéric Korradi and Simon Flückiger
# Dev environment
We used Docker on Windows 10 with Docker Engine v19.03.8
# Branches
Work is done in various "fb" branches, one for each step
# General 
Find ip address : docker inspect express_dynamic | select-string ipaddress

# Step 1 - Static HTTP server (apache)
Base image: php:7.4-apache

To build image : 
<code>docker build -t res/apache_php .</code>
Then to run it : 
<code>docker run -d -p 9090:80 res/apache_php</code>
to access it : http://127.0.0.1:9090/

# Apache config file location
![ApacheConfigFile](https://raw.githubusercontent.com/korradif/HEIGVD-RES-2020-Labo-HTTPInfra/master/ApacheConfigFile.png)

# Step 2 - Dynamic HTTP Server (express.js)
installed package chance
<code>docker build -t res/express-students .</code>
http://127.0.0.1:8000/generateNumbers to get random numbers using express.js
Node.js version : 12.16

# Step 3 - Reverse proxy
The static configuration is fragile and needs to be improved because as the IP addresses of Docker containers are generated at container startup, the configuration of the reverse proxy could need a change each time we restart containers in order to work properly.
 <code>docker run -it -p 8080:80 php:7.4-apache /bin/bash</code>

# Step 4 - Ajax
The ajax call to retrieve a random number is done with the following url: $.getJSON("/api/numbers/generateNumbers",...);

# Step 5 - Dynamic Configuration
Regarding the lab videos, we need to take the latest version of the ![apache2-foreground](https://github.com/docker-library/php/blob/master/apache2-foreground)

To run the RP with dynamic ip configuration using environment variables:
 <code>docker run -d -e STATIC_APP=172.17.0.3:80 -e DYNAMIC_APP=172.17.0.2:3000 --name apache_rp -p 8080:80 res/apache_rp</code>

## Modules nécessaires
a2ensite 001
a2enmod proxy
a2enmod proxy_http
service apache reload
