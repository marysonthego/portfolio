-- @block Bookmarked query
-- @group 01 joins
-- @name q01 where

-- query 01 WHERE
-- What are the customer IDs and names of all customers, along with the
-- order IDs for all the orders they have placed?

SELECT c.customerId, customerName, orderId
FROM customer_t c, order_t o
  WHERE o.customerId = c.customerid
ORDER BY customerId;
