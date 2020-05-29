<?php 

$s = 'Hello';

$s .= ' World'; 	// shortcut of next line
// $s = $s . ' World';

echo $s;


$number = 0;
$number++;
var_dump($number);

$number = 0;
var_dump($number++);

$number = 0;
var_dump(++$number);


$age = 15;

// if($age > 18){
// 	$message = 'You are old enough';
// }else{
// 	$message = 'You are too young';
// }

// shorter and cleaner version of previous IF using ternary operator
$message = $age > 18 ? 'You are old enough' : 'You are too young';

echo $message;




if($age < 18){
	$message = 'You are too young';
}elseif($age > 80){
	$message = 'You are too old';
}else{
	$message = 'You can drink';
}


$message = $age < 18 ? 'You are too young' : ( $age > 80 ? 'You are too old' : 'You can drink' );

$g = 'm'

$string = 'Your user is ' . ( isset($g) && $g == 'm' ? 'Male' : 'Female' ) . '.';





