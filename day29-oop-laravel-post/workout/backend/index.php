<?php

require_once 'DB.php';
require_once 'DB_functions.php';

// connect to the database games
connect('localhost', 'games', 'root', 'rootroot');

/**
 * gets values from the URL ($_GET) in a smart way, returning
 * a default value if the parameter is not found or if its 
 * value is not allowed
 */
function getURLParameter($name, $default_value, $allowed_values)
{
    // if there is an element with key $name in $_GET and its value is allowed
    if (isset($_GET[$name]) && in_array($_GET[$name], $allowed_values)) {
        // then return it
        return $_GET[$name];
    } else {
        // return the default value
        return $default_value;
    }
}

$column = getURLParameter('orderby', 'name', ['name', 'rating']);
$way    = getURLParameter('way', 'asc', ['asc', 'desc']);

// make a query to select all the games
$query = "
    SELECT *
    FROM `games`
    ORDER BY `{$column}` {$way}
";

// run the query
$games = select($query);

// send JSON headers
header('Content-type: application/json');

// output them as a JSON string
echo json_encode($games);

