<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';

//               database server  database name   username   password
$success = connect('localhost',      'world',      'root',  'rootroot');

$results = select('
    SELECT *
    FROM `country`
    WHERE `Population` > ?
        AND `Continent` = ?
    ORDER BY `Population` DESC,
             `SurfaceArea` DESC
    LIMIT 0, 10;
', [20000000, 'Europe'], 'Country');

// var_dump($results);

foreach ($results as $country) {
    // echo $country->getPopulationFormatted() . '<br>';

    echo $country . '<br>';
}

// header('Content-type: application/json');
// echo json_encode($results);
