<?php

require_once 'DB.php';

DB::connect('localhost', 'world', 'root', 'rootroot');

$query = "
    SELECT `city`.*, `country`.`Code`, `country`.`Name` AS country_name
    FROM `city`
    LEFT JOIN `country`
        ON `city`.`CountryCode` = `country`.`Code`
    WHERE `city`.`Population` > ?
";

$cities_with_countries = DB::select($query, [5000000]);

var_dump($cities_with_countries);