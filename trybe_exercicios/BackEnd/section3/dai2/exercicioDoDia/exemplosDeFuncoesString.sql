# 01
select  m.title, b.domestic_sales, b.international_sales
from movies as m
inner join box_office as b
on m.id = b.movie_id;

#02
select  m.title, b.domestic_sales, b.international_sales
from movies as m
inner join box_office as b
on m.id = b.movie_id
where b.international_sales > b.domestic_sales;

#03 
select m.title, b.rating 
from movies as m
inner join box_office as b
on m.id = b.movie_id
order by b.rating DESC ;

#04
select t.`name` as cinema, t.location as local_cinema, m.title from theater as t
left join movies as m
on t.id = m.theater_id
order by m.title;

#05 
select t.`name` as cinema, t.location as local_cinema, m.title from theater as t
right join movies as m
on t.id = m.theater_id
order by m.title;

#06 
select *
from movies as m
inner join box_office as b
on m.id = b.movie_id
where m.theater_id IS NOT NULL
AND b.rating > 8;