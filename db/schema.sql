DROP DATABASE IF EXISTS voluntarea_db;
CREATE DATABASE voluntarea_db;

USE voluntarea_db;

CREATE TABLE vols (
    id int not null auto_increment,
    vol_name varchar (45) not null,
    vol_email varchar (45) not null,
    vol_area varchar (45) not null,
    primary key (id)
);

CREATE TABLE orgs (
    id int not null auto_increment,
    org_name varchar (45) not null,
    org_activity varchar (45) not null,
    org_url varchar (255) not null,
    org_date date (15) not null,
    org_time time (15) not null,
    org_hours (15) int not null,
    vols_needed (250) int not null,
    primary key (id)
);