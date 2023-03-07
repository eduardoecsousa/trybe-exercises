USE sakila;

CREATE TABLE filme (
filme_id int PRIMARY KEY AUTO_INCREMENT,
descricao varchar(100) NOT NULL,
ano_lancamento int NOT NULL,
nota int
);



SELECT 'Olá, bem-vindo ao SQL!';
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 2019 AS ano;

SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';

SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
