CREATE DATABASE IF NOT EXISTS Rates;
USE Rates;

CREATE TABLE MortRates(
    id INT PRIMARY KEY,
    source CHAR(30),
    year INT,
    down_payment_level INT,
    rate_type CHAR(10),
    rate Real
);

LOAD DATA INFILE 'path to rates.csv file' 
INTO TABLE discounts 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;