DROP DATABASE IF EXISTS voluntarea_db;
CREATE DATABASE voluntarea_db;

USE voluntarea_db;

CREATE TABLE vols (
    id int not null auto_increment,
    vol_name varchar (45) not null,
    vol_email varchar (45) not null,
    vol_zip varchar (45) not null,
    primary key (id)
);

CREATE TABLE orgs (
    id int not null auto_increment,
    org_name varchar (45) not null,
    org_activity varchar (45) not null,
    org_url varchar (255) not null,
    org_date date not null,
    org_time time (6) not null,
    org_hours int (3) not null,
    org_vols int (250) not null,
    primary key (id)
);