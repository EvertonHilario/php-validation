FROM php:8.4-fpm-alpine

RUN apk add --no-cache \
    bash curl git unzip zip libpng-dev libjpeg-turbo-dev freetype-dev \
    oniguruma-dev libzip-dev postgresql-dev \
 && docker-php-ext-install pdo pdo_pgsql mbstring zip exif pcntl gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
