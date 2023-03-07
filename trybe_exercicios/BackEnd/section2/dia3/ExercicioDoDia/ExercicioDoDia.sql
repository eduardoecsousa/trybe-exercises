USE store;

# 01
SELECT * FROM itens
WHERE name LIKE 'gr%';

# 02
SELECT * FROM supplies
WHERE item_id = 2
ORDER BY supplier_id;

# 03
SELECT item_id, price, supplier_id
FROM supplies 
WHERE supplier_id LIKE '%n%';

# 04
SELECT * FROM suppliers
ORDER BY name DESC;

# 05
SELECT COUNT(*) FROM suppliers
WHERE name LIKE '%f%';

# 06
SELECT * FROM supplies
WHERE price BETWEEN 15 AND 40
ORDER BY price;

# 07
SELECT COUNT(*) FROM sales
WHERE order_date 
BETWEEN '2018-04-15' AND '2019-07-30'
