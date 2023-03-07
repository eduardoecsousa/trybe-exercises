use pixar;
# 01
insert into movies(title, director, `year`, length_minutes) 
values ('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

select * from movies;

#02
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (9, 6.8, 450000000, 370000000);
  
select * from box_office;

# 03
update movies
set director = 'Andrew Stanton'
where id = 9;

select * from movies;

#04
update movies 
set title = 'Ratatouille', `year`= 2007
where id = 3;

select * from movies;

# 05
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);
         
select * from box_office;

# 06
delete from box_office 
where movie_id = 11;

delete from movies 
where id = 11;

select * from movies;
select * from box_office;

# 07 
delete from box_office 
where movie_id = 9;

delete from movies 
where id = 9;

select * from movies;
select * from box_office;

# 08
update box_office 
set rating = 9.0
where domestic_sales > 400000000;

select * from box_office;

# 09
update box_office 
set rating = 6.0
where international_sales < 300000000
and domestic_sales > 200000000;

select * from box_office;

# 10 
delete from box_office 
where movie_id IN (1, 2, 6, 7, 8);

delete from movies 
where length_minutes < 100;

select * from movies;