FROM php:7.4-apache

COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*
RUN a2enmod ssl
RUN a2enmod proxy
RUN a2enmod proxy_balancer
RUN a2enmod proxy_http