<?php

require_once 'DB.php';
require_once 'DB_functions.php';

//               database server  database name   username   password
$success = connect('localhost',      'world',      'root',  'rootroot');

/**
 * returns 20 cities, skipping a number of cities specified
 * by the argument
 * 
 * @param $page_nr - number of a page (1 - ?)
 * @return array of stdClass objects representing the rows from the table `city`
 */
function getPageOfCities($page_nr)
{
    // create an SQL query using the $page_nr to calculate correct LIMIT & OFFSET
    $limit = 20;
    $offset = ($page_nr-1) * $limit;

    $query = "
        SELECT * 
        FROM `city`
        ORDER BY `Population`
        LIMIT {$offset}, {$limit}
    ";

    $cities = select($query);

    // $query = "
    //     SELECT *
    //     FROM `city`
    //     WHERE `CountryCode` IN (?, ?, ?, ?)
    //     ORDER BY `Population` DESC
    //     LIMIT 10
    // ";

    // $cities = select($query, ['CZE', 'SVK', 'POL', 'HUN']);

    return $cities;
}

$page_of_cities = getPageOfCities(1);
var_dump($page_of_cities); // cities 0-19


$page_of_cities = getPageOfCities(3);
var_dump($page_of_cities); // cities 40-59