CREATE DATABASE ucode_web;
CREATE USER 'ybobrov'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web.* TO 'ybobrov'@'localhost';