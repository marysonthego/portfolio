-- @block Bookmarked query
-- @group 01 joins
-- @name q04 USING

# query 04 USING
# What are the customer IDs and names of all customers, along with the
# order IDs for all the orders they have placed?
# The USING(join_column_list) clause names a list of columns that must exist in both tables.
# A USING clause can be rewritten as an ON clause that compares corresponding columns.

SELECT c.customerId, customerName, orderId
FROM customer_t AS c INNER JOIN order_t as o
  USING (customerId)
ORDER BY customerId;
