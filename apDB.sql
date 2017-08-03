DROP DATABASE IF EXISTS apDB;
DROP USER IF EXISTS writer;

CREATE USER writer WITH ENCRYPTED PASSWORD 'writing';
CREATE DATABASE apDB WITH OWNER writer;

\c apDB writer;

DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(30),
  body TEXT,
  author VARCHAR(30),
  urlTitle VARCHAR(30)
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30),
  price REAL,
  inventory INTEGER
);

INSERT INTO articles VALUES
  (default, 'article 1', 'This is the first article', 'author 1', 'article 1');



  INSERT INTO products VALUES
  (default, 'electric fly swatter', 39.99, 8);

