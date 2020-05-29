<?php 

$a = 6;

switch ($a) {
    case 5:
        echo 'match 5';
        // break; // mandatory

    case 6:
        echo 'match 6';
        break;

    case 7:
        echo 'match 7';
        // break;
 
    default:
        echo 'no match';
        break;
}

echo 'out of switch';