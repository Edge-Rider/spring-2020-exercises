<?php

require_once 'Animal.php';
require_once 'Domesticated.php';
require_once 'Dog.php';
require_once 'Sheep.php';
require_once 'Wolf.php';

$benjie = new Dog;
$benjie->eat();
$benjie->beFed();
var_dump($benjie);

$shaun = new Sheep;
$shaun->eat();
$shaun->beFed();
var_dump($shaun);

$fang = new Wolf;
$fang->eat();
$fang->beFed();
var_dump($fang);