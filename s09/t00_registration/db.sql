CREATE DATABASE IF NOT EXISTS ucode_web;

CREATE USER IF NOT EXISTS 'ybobrov' @'localhost' IDENTIFIED BY 'securepass';

GRANT ALL PRIVILEGES ON ucode_web.* TO 'ybobrov' @'localhost';

USE ucode_web;

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    login VARCHAR(20) NOT NULL UNIQUE,
    full_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE
);