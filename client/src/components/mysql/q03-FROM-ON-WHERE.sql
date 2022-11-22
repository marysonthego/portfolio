-- @block Bookmarked query
-- @group 01 joins
-- @name q03 FROM-ON = FROM-WHERE

# query 03 FROM - WHERE is the same as FROM - ON
# What are the customer IDs and names of all customers, along with the
# order IDs for all the orders they have placed?

select c.customerId, customerName, orderId
from customer_t as c INNER JOIN order_t as o
  ON o.customerId = c.customerid
order by customerId;
