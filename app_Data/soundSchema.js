//this is dummy data for the db

CREATE DATABASE IF NOT EXISTS soundFiles;
USE soundFiles;

DROP TABLE IF EXISTS oceanSoundset;
CREATE TABLE IF NOT EXISTS oceanSoundset (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(32),
  wav VARCHAR(420),
	PRIMARY KEY (id)
);

INSERT INTO oceanSoundset (name, wav) VALUES ('dawn', 'blahblah');
