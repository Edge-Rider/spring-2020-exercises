<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';

//               database server  database name   username   password
$success = connect('localhost',      'world',      'root',  'rootroot');

$results = select('
    SELECT *
    FROM `country`
    WHERE `Population` > 20000000
    ORDER BY `Population` DESC
    LIMIT 0, 10;
', [], 'Country');

// var_dump($results);

foreach ($results as $country) {
    echo $country->getPopulationFormatted() . '<br>';
}


// header('Content-type: application/json');
// echo json_encode($results);
