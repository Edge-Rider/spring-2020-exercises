<?php 

	define('MY_SERVER', 'Apache');


	$quote = '"Today\'s special moments are tomorrow\'s memories" - Aladdin';

	$quote = "\"Today's special moments are tomorrow's memories\" - Aladdin";

	$year = 1415;
	$place = 'Azincourt';
 
	$quote = "<p>In the year {$year} a battle of {$place} was fought.</p>";
	
	echo $quote;

	$quote = '<p>In the year ' . ( $year + 5 ) . ' a battle of ' . $place . ' was fought.</p>';


	echo $quote;




	$my_greeting = "<p>Hello, world!</p>";

	$a = '12';

	var_dump($a + 3);

	var_dump($a);

	$b = (float)$a;

	var_dump($b);
	exit();




 	function my_first_function($my_greeting) {
 		echo $my_greeting;

 		echo MY_SERVER;

 		$my_greeting = "<p>Hello slavo</p>";

 		echo $my_greeting;
 	}


	echo $my_greeting;

	echo '<br/>';

	my_first_function($my_greeting);

	echo '<br/>';

	unset($my_greeting);

	echo $my_greeting; // this echo would cause an notice "Undefined variable: my_greeting"

?>