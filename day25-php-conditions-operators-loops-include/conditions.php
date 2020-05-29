<?php 

// $a = 10;


// if ( $a == 10) {
//     // echo 'match';
// } else {
// 	echo 'not match';  
// }


// if ($a == 10) echo 'match';
// else echo 'not match';



// if ($a == 10) {
//     echo 'match 10';
// } elseif($a == 20) {
//     echo 'match 20';
// } else {
//     echo 'not match';
// }


// if( $a == '10') 	// evaluated as true
// if( $a === '10') 	// evaluated as false


$age = 15; 

if( isset($age) && $age > 18){   // if ( variable $age exists and $age > 18 )
	echo '<p>you can drink beer!</p>';
}else{
	echo '<p>You are too young!</p>';
}





function e(){
	echo '<p>i am in the function</p>';

	return true;
}

$day = '29';

if( $day == 30 || e() ){
	echo '<p>yep!</p>';
}


