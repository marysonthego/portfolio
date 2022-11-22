-- @block Bookmarked query
-- @group 01 joins
-- @name q05 SELECT * ON

# query 05 SELECT * ON duplicates columns.

select *
FROM customer_t as c INNER JOIN order_t as o
  ON o.customerId = c.customerid
ORDER BY c.customerId;
