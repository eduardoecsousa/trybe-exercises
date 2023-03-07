use hr;
#1
select MAX(salary) from employees;

#2
Select (max(salary) - min(salary)) from employees;

#3
select job_id, job_title, 
(min_salary + max_salary / 2) as media_salarial 
from jobs Order by media_salarial desc;

#4
select sum(salary) from employees;

#5
select min(salary), max(salary), sum(salary), avg(salary) from employees;

#6
select count(*) from employees 
WHERE job_id = 'it_prog';

#7
select job_id, sum(salary) from employees
group by job_id;

#8
select job_id, sum(salary) from employees
group by job_id
having job_id = 'it_prog';

#9
select job_id, job_title, 
(min_salary + max_salary / 2) as media_salarial 
from jobs 
group by job_id 
having job_id <> 'it_prog'
Order by media_salarial desc;

#10 
select department_id, AVG(salary), count(*) as qtd_department
from employees
group by department_id
having qtd_department > 10;

#11 
select REPLACE(phone_number, '515', '777') from employees;

#12
select * from employees 
WHERE CHAR_LENGTH(first_name) >= 8;

#13
select employee_id, first_name, year(hire_date) as year_hire
from employees;

#14 
select employee_id, first_name, day(hire_date) as day_hire
from employees;

#15
select employee_id, first_name, month(hire_date) as month_hire
from employees; 

#16
SELECT ucase(first_name) 
from employees;

#17 
select last_name, hire_date from employees
where (year(hire_date) = 1987 and month(hire_date) = 7);

#18
select first_name, last_name, DATEDIFF(now(), hire_date) as temp_work
from employees;

select * from employees;
