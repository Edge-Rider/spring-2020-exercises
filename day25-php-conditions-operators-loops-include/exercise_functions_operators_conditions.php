<?php
echo '<h1>Functions Operators Conditions</h1>';

// Variables & data types
$my_name = 'Slavo';
$height  = '1.88';
var_dump($my_name);
var_dump($height);

echo '<hr/>';

// Functions #1
function headline($text)
{
    echo '<h1>' . $text . '</h1>';
}

headline('My Website');
echo '<hr/>';

// Functions #2
function headline_2($text)
{
    return '<h1>' . $text . '</h1>';
}

echo headline_2('My website');

echo '<hr/>';

// Functions #3
function inchesToCentimeters($in)
{
    return $in * 2.54;
}

$inches      = 12;
$centimeters = inchesToCentimeters($inches);
echo $centimeters;

echo '<hr/>';
// Function #4

function celsiusToFahrenheit($celsius)
{
    return (9 / 5) * $celsius + 32;
}

$celsius = 100;
echo celsiusToFahrenheit($celsius);

echo '<hr/>';
// Conditions #1

function isHealthy($t, $unit)
{
    $t = ($unit == 'f') ? celsiusToFahrenheit($t) : $t;

    return $t < 37;
}

var_dump(isHealthy(36.5, 'c'));
var_dump(isHealthy(36.5, 'f'));
echo '<hr/>';
// Ternary operator

function evenOrOdd($n)
{
    return $n % 2 == 0 ? 'Even' : 'Odd';
}

$number = 42;
echo evenOrOdd($number);

echo '<hr/>';

// Concatenation #1
$weekday = 'Monday';
function sayWeekday($wd)
{
    echo 'Today is ' . $wd;
}

sayWeekday($weekday);

echo '<hr/>';

// Concatenation #2

$year_of_birth = 1993;

function sayBirthday($year)
{
    $this_year = date('Y');

    echo 'I was born in ' . $year . ' so this year I am celebrating my ' . ($this_year - $year) . ' birthday.';
}
sayBirthday($year_of_birth);

echo '<hr/>';

// Conditions

function assessHeight($h){
    if($h > 180){
        return 'tall';
    }elseif($h > 160){
        return 'average';
    }else{
        return 'small';
    }
}

echo assessHeight(188);

echo '<hr/>';

// Switch

function getLanguageUsage($lang){
    switch($lang){
        case 'php':
        case 'python':
        case 'ruby':
            return 'serverside';

        case 'javascript':
            return 'clientside';

        default:
            return 'IDK';
    }
}
echo getLanguageUsage('php') . '<br/>';
echo getLanguageUsage('python') . '<br/>';
echo getLanguageUsage('ruby') . '<br/>';
echo getLanguageUsage('javascript') . '<br/>';
echo getLanguageUsage('node') . '<br/>';
echo '<hr/>';


//PHP.net

function getLanguageUsage_2($lang){
    $lang = strtolower($lang);
    switch($lang){
        case 'php':
        case 'python':
        case 'ruby':
            return 'serverside';

        case 'javascript':
            return 'clientside';

        default:
            return 'IDK';
    }
}

echo getLanguageUsage_2('PHP') . '<br/>';
echo getLanguageUsage_2('php') . '<br/>';
echo getLanguageUsage_2('Php') . '<br/>';
echo getLanguageUsage_2('javascript') . '<br/>';
echo getLanguageUsage_2('JavaScript') . '<br/>';


// Logical operators

$age = 26;
$gender = 'm';
$employed = false;


if($age < 15){
    //if the age is less than 25
}

if($employed){
    //if employed
}
if($age > 24 && !$employed){
    //if age is above 34 and not employed
}
if($age <= 18){
    //if the age is not greater than 18
}

if($age < 12 && $gender == 'f'){
    //if the age is lower than 12 and gender is female
}

if($age >= 18 && !$employed){
    //if age is greater or equal to 18 and is not employed
}

if($age >= 60 && $employed && $gender == 'f'){
    //if age is greater or equal to 60, is employed and is a female
}

if($gender == 'm' && $age > 20 || $gender == 'f' && $age > 25 && !$employed){
    //if (someone) is a male above 20 or is an unemployed female above 25
}



