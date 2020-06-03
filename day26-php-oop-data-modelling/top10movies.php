<?php

// lines of code for database access

// ...

// pretend that this list came from the database
$movies = [
    'The Shawshank redemption',
    'The Godfather',
    'The Godfather II',
    'Dark Knight', 
    '12 angry men', 
    'Schindler\'s list',
    'Pulp fiction',
    'Lord of the Rings: Return of the King',
    'The good, the bad and the ugly',
    'Fight club'
];



// let the consuming app know that we are sending JSON string
header('Content-type: application/json');

// encode the data into JSON and output it
echo json_encode($movies);


