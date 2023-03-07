insert into staff (first_name, last_name, address_id, store_id, username) 
values ('Ricardo', 'Gomes', 5, 1, 'Ricardão'),
('Rogerinho', 'Almeida', 2, 2, 'ReiDelas');

select * from staff;

insert into actor(first_name, last_name) 
	select first_name, last_name 
    from customer
    limit 5;

insert into category (`name`) 
values ('Terror'),
('Drama'),
('Ficção Cientifica'); 

select * from staff;

insert into store(manager_staff_id, address_id) values (11, 4);

select * from store;

# Update

select * from staff;

UPDATE sakila.staff
SET first_name = 'John'
WHERE staff_id = 1;

UPDATE sakila.staff
SET first_name = 'Maicon', last_name = 'José'
WHERE staff_id = 4;

UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

# Delete

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

DELETE FROM sakila.film_actor
WHERE actor_id = 7;

DELETE FROM sakila.actor #ERRO
WHERE first_name = 'GRACE';




