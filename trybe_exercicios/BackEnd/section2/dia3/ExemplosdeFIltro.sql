# exemplos
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT CONCAT(first_name, ' ', last_name) AS 'Cliente Inativos' FROM sakila.customer 
WHERE active IS FALSE 
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year, rating, replacement_cost 
FROM sakila.film
WHERE (rating = 'G' OR rating = 'PG')
AND replacement_cost >= 18.00
ORDER BY title
LIMIT 100;

SELECT COUNT(*) FROM sakila.customer
WHERE active IS NOT FALSE
AND store_id = 1;

SELECT * FROM sakila.customer
WHERE active IS NOT TRUE
AND store_id = 1;

SELECT title, description, release_year, rating, rental_rate
FROM sakila.film
WHERE rating = 'NC-17'
AND rental_rate < 1
ORDER BY title
LIMIT 50;

# LIKE

SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

SELECT * FROM sakila.film
WHERE title LIKE '_C%';

SELECT * FROM sakila.film
WHERE title LIKE '________';

SELECT * FROM sakila.film
WHERE title LIKE 'E__%';

# IN 

SELECT * FROM sakila.payment
WHERE customer_id IN (269, 239, 126, 399, 142);

SELECT * FROM sakila.address
WHERE district IN ('QLD','Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

# BETWEEN 

SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

# FILTRANDO DATAS

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';

SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo


