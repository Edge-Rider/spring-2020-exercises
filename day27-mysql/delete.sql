DELETE
FROM `region`
WHERE `id` = 1;

DELETE
FROM `region`
WHERE `slug` LIKE '%america%';

DELETE
FROM `region`
WHERE `name` LIKE '%africa%';
