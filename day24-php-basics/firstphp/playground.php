<?php 


// solutions to exercises at
// https://classes.codingbootcamp.cz/coding-bootcamp/spring-2020/698-playground-php-basics

// 1) 

$first_name = 'Bruce';
$last_name = 'Wayne';

echo 'First name: ' . $first_name . '<br>' . 'Surname: ' . $last_name;

// 2) 

$year_of_birth = 1993;
$height = 27;

echo 'Year of birth: ' . $first_name . '<br>' . 'Height: ' . $last_name;

// 3) 

define('SERVER_SOFTWARE', 'Apache');


echo 'This server is running on ' . SERVER_SOFTWARE . '.';


// 4) 

define('MY_OS', 'Mac OS');


echo 'This server is running on ' . MY_OS . '.';



// 5) 
function greet(){
	echo 'Hello, world!'
}

greet();


// 6) 

function greet2($whom){
	echo 'Hello, ' . $whom . '!';
}

greet2();


// 7)

function greet3($whom){
	return 'Hello, ' . $whom . '!';
}

greet3();


