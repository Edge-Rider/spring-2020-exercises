SELECT *
FROM `paragraphs`
WHERE `id` = 1337;

EXPLAIN
SELECT *
FROM `paragraphs`
WHERE `id` = 1337;



SELECT *
FROM `words`
WHERE `word` = 'kissed';
-- 0.0235s
-- 0.0012s with index

EXPLAIN
SELECT *
FROM `words`
WHERE `word` = 'kissed';


INSERT INTO `words`
(`word`)
VALUES
('february');


INSERT INTO `words`
(`word`)
VALUES
('February');


SELECT *
FROM `paragraphs`
WHERE `text` LIKE '%Edmond Dantès%';
-- 0.1392s
-- 41 results


SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('Edmond Dantès');
-- 0.0646s
-- 788 results


SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('"Edmond Dantès"');
-- 0.0055s
-- 41 results


SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('+Edmond +Dantès' IN BOOLEAN MODE);
-- 0.0083s
-- 90 results