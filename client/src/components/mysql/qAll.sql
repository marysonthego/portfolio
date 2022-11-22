-- query 01 WHERE
-- What are the customer IDs and names of all customers, along with the
-- order IDs for all the orders they have placed?

SELECT c.customerId, customerName, orderId
FROM customer_t c, order_t o
  WHERE o.customerId = c.customerid
ORDER BY customerId;

-- query 02 no WHERE
-- What are the customer IDs and names of all customers, along with the
-- order IDs for all the orders they have placed?

SELECT c.customerId, customerName, orderId
FROM customer_t c, order_t as o
-- where o.customerId = c.customerid
ORDER BY customerId;

# query 03 FROM - WHERE is the same as FROM - ON
# What are the customer IDs and names of all customers, along with the
# order IDs for all the orders they have placed?

select c.customerId, customerName, orderId
from customer_t as c INNER JOIN order_t as o
  ON o.customerId = c.customerid
order by customerId;

# query 04 USING
# What are the customer IDs and names of all customers, along with the
# order IDs for all the orders they have placed?
# The USING(join_column_list) clause names a list of columns that must exist in both tables.
# A USING clause can be rewritten as an ON clause that compares corresponding columns.

SELECT c.customerId, customerName, orderId
FROM customer_t AS c INNER JOIN order_t as o
  USING (customerId)
ORDER BY customerId;

# query 05 SELECT * ON duplicates columns.

select *
FROM customer_t as c INNER JOIN order_t as o
  ON o.customerId = c.customerid
ORDER BY c.customerId;

# query 06 SELECT * USING coalesces duplicate columns into one column.

select *
FROM customer_t as c INNER JOIN order_t as o
  USING (customerId)
ORDER BY customerId;

# query 07 NATURAL JOIN coalesces duplicate columns like USING

SELECT c.customerId, customerName, orderId
FROM customer_t as c NATURAL JOIN order_t as o
ORDER BY customerId;

# query 08 LEFT JOIN = LEFT OUTER JOIN
# LEFT Joins return everything in the left-hand table plus any matches in the right-hand table.
# List customerId, customerName, and orderId for each customer in the customer_t table
# even if they do not have any entries in the order_t table.

SELECT c.customerId, customerName, orderId
FROM customer_t AS c LEFT JOIN order_t as o
  USING (customerId)
ORDER BY customerId;


# query 09 LEFT OUTER JOIN = LEFT JOIN
# List customer name, identification number, and order number for all customers
# listed in the Customer table. Include the customer identification number
# and name even if there is no order available for that customer.

SELECT c.customerId, customerName, orderId
FROM customer_t as c LEFT OUTER JOIN order_t as o
ON c.customerId = o.customerId;
