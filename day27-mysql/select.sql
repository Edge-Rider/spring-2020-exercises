SELECT * 
FROM `country`;

SELECT *
FROM `country`
WHERE `population` > 20000000;

-- this is a comment
SELECT *
FROM `country`
WHERE `Population` > 20000000
ORDER BY `Population` DESC;

/* 
this is a multi-line comment
*/

SELECT *
FROM `country`
WHERE `Population` > 20000000
ORDER BY `Population` DESC
LIMIT 0, 10;
-- LIMIT 10;


