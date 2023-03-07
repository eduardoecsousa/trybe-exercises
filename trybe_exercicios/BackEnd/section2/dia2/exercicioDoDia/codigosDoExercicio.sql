# 01
SELECT 'This is SQL Exercise, Practice and Solution';

# 02
SELECT 15 AS 'Dia', 02 AS 'Mês', 2023 AS 'Ano';

# 03
SELECT 10 + 15;

# 04
SELECT 10 + (15 * 20);

# 05
USE Scientists;
SELECT * FROM Scientists;

# 06
SELECT Name as 'Nome do Projeto', Hours as 'Tempo de Trabalho' FROM Projects; 

# 07
SELECT Name FROM Scientists ORDER BY Name;

# 08
SELECT Name FROM Projects ORDER BY Name;


# 09
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' Horas para ser concluido.' )
AS 'Projetos'
FROM Projects; 

# 10
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;

# 11 
SELECT DISTINCT Project FROM AssignedTo;

# 12 
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;

# 13
SELECT Name, Hours FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;

# 14
SELECT Name FROM Projects ORDER BY Hours LIMIT 5;

# 15
SELECT
CONCAT('Existem ', CAST(COUNT(DISTINCT Name) as CHAR(4)), ' cientistas na tabela Scientists') 
FROM Scientists;
 