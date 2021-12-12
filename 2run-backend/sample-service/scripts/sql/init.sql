CREATE DATABASE IF NOT EXISTS 2run;

use 2run;

CREATE TABLE `userAuth` (
                         `id` varchar(255) NOT NULL DEFAULT '',
                         `user_name` varchar (255) UNIQUE NOT NULL DEFAULT '',
                         `password` varchar(255)  NOT NULL DEFAULT '',
                         `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `userProfile` (
                              `id` varchar(255) NOT NULL DEFAULT '',
                              `email` varchar(255) NOT NULL DEFAULT '',
                              `first_name` varchar (255) UNIQUE NOT NULL DEFAULT '',
                              `last_name` varchar (255) UNIQUE NOT NULL DEFAULT '',
                              `birth_day`  varchar(10),
                              PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;