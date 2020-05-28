<?php 


$array = [1, 2, 3]; // array 

// var_dump($array);


$associative_array = [
	'a' => 1,
	'b' => 2,
	'c' => 3
];

// var_dump($associative_array);


$fruit = [
    'Apple', // automatically assigned index 0
    'Pear',  // automatically assigned index 1
    'Orange' // automatically assigned index 2
];

$fruit = [
    0 => 'Apple',
    1 => 'Pear',
    3 => 'Orange'
];

// var_dump($fruit);


$days = [
	'Mon',
	'Tue',
	'Wen'
];


// echo $days[1];

$days[1] = 'Tuesday';

// echo $days[1];




//create an empty array 
$fruit = array();

$fruit[] = 'Pear';
$fruit[] = 'Plum';
$fruit[] = 'Apple';

// var_dump($fruit);

// looping 

foreach ($fruit as $value) {
    // code to run for each of the items in an array
    // the $value variable holds the value of the current item
	// var_dump($value);
}


//create an empty array 
$fruit = [];

$fruit['green_one'] = 'Pear';


// var_dump($fruit);

foreach ($fruit as $key => $value){
	var_dump($key);
	var_dump($value);
}


echo count($fruit);

?>