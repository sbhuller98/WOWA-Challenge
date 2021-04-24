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

