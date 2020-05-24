# HEIGVD-RES-2020-Labo-HTTPInfra
This is the repo for the HTTP lab at HEIG-vd

# Students
Frédéric Korradi and Simon Flückiger

# Branches
Work is done in branch dev

# Base image
php:7.4-apache

To build image : 
docker build -t res/apache_php .
Then to run it : 
docker run -d -p 9090:80 res/apache_php
to access it : http://127.0.0.1:9090/

# Apache config file location
![ApacheConfigFile](https://raw.githubusercontent.com/korradif/HEIGVD-RES-2020-Labo-HTTPInfra/master/ApacheConfigFile.png)

# Step 2
installed package chance
docker build -t res/express-students .
http://127.0.0.1:8000/generateNumbers to get random numbers using express.js
