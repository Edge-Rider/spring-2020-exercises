<?php

require_once 'DB.php';
require_once 'DB_functions.php';

// connect to the database games
connect('localhost', 'games', 'root', 'rootroot');

var_dump($_GET);

// default values
$column = 'name';
$way = 'ASC';

// if there is an element with key 'orderby' in $_GET and if its value is 'rating'
if (isset($_GET['orderby']) && $_GET['orderby'] == 'rating') {
    // order by rating
    $column = 'rating';
}

// if there is an element with key 'orderby' in $_GET and if its value is 'name'
if (isset($_GET['orderby']) && $_GET['orderby'] == 'name') {
    // order by name
    $column = 'name';
}

// if there is an element with key 'way' in $_GET and if its value is 'asc'
if (isset($_GET['way']) && $_GET['way'] == 'asc') {
    // order in ascending order
    $way = 'ASC';
}

// if there is an element with key 'way' in $_GET and if its value is 'desc'
if (isset($_GET['way']) && $_GET['way'] == 'desc') {
    // order in descending order
    $way = 'DESC';
}

// make a query to select all the games
$query = "
    SELECT *
    FROM `games`
    ORDER BY `{$column}` {$way}
";
var_dump($query);
// run the query
$games = select($query);

// send JSON headers
// header('Content-type: application/json');

// output them as a JSON string
// echo json_encode($games);

var_dump($games);
