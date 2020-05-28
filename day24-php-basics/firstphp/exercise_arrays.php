<?php 

// 1) Create an empty array $cars_i_want.


$cars_i_want = [];

//var_dump($cars_i_want);

// 2) adding items to an array


$cars_i_want[] = 'Aston Martin';
$cars_i_want[] = 'Bugatti';
$cars_i_want[] = 'Ferrari';
$cars_i_want[] = 'Lamborghini';
$cars_i_want[] = 'Maserati';
$cars_i_want[] = 'Mercedes';
$cars_i_want[] = 'Porsche';
$cars_i_want[] = 'Skoda';

//var_dump($cars_i_want);


// 3) retrieving array values


echo 'For myself I would buy ' . $cars_i_want[1] . '.<br>';

echo 'For my spouse I would buy ' . $cars_i_want[3] . '.<br>';
 
$cars_i_want[4] = 'Smart';

echo 'Print the sentence Each of my kids will get a ' . $cars_i_want[4] . '.<br>';


// 4) foreach loop
echo '<ul>';
foreach($cars_i_want as $car){
	echo '<li>' . $car . '</li>';
}

echo '</ul>';


// 5) Associative arrays


$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];


foreach($car_prices as $car => $price){
	echo 'The price of ' . $car . ' is ' . $price . ' CZK.<br>';
}