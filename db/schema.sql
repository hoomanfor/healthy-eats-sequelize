DROP DATABASE IF EXISTS healthy_db;
CREATE DATABASE healthy_db; 

-- Heroku Deployment Tables
CREATE TABLE IF NOT EXISTS pkw7mw6qasxc1m7a.Moment (
    `id` INTEGER NOT NULL auto_increment , 
    `moment` VARCHAR(255), 
    `createdAt` DATETIME NOT NULL, 
    `updatedAt` DATETIME NOT NULL, 
    PRIMARY KEY (`id`)) 
    ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS pkw7mw6qasxc1m7a.Eat (
    `id` INTEGER NOT NULL auto_increment , 
    `name` VARCHAR(255) NOT NULL, `consumed` TINYINT(1) DEFAULT false, 
    `createdAt` DATETIME NOT NULL, `updatedAt` 
    DATETIME NOT NULL, `MomentId` INTEGER, 
    PRIMARY KEY (`id`), 
    FOREIGN KEY (`MomentId`) REFERENCES `Moment` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) 
    ENGINE=InnoDB;