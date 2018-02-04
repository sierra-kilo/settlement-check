USE settlement_db;

CREATE TABLE testTable (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description VARCHAR(100) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);
