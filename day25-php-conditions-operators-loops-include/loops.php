<?php 

// Loops with UNKNOWN number of iterations


$days_to_christmas = 0;

while ($days_to_christmas > 0) {
	echo '<p>While There are still ' . $days_to_christmas . ' days to christmas</p>';

	$days_to_christmas--;
}

// continue here after while

$days_to_christmas = 0;

do {
	echo '<p>Do While There are still ' . $days_to_christmas . ' days to christmas</p>';

	$days_to_christmas--;
   
} while ($days_to_christmas > 0);

// continue here after do while

echo '<hr>';


// Loops with KNOWN number of iterations

for ($i = 0; $i < 10; $i += 2) {
	echo '<p>' . $i . '</p>';
}


$i = 0; 
while($i < 10){
	echo '<p>' . $i . '</p>';

	$i += 2;
}

echo '<hr>';


// Comparing for to foreach - both codes are doing same thing 

$array = ['a', 'b', 'c'];

foreach($array as $value){
	echo '<p>' . $value . '</p>';
}


for($i = 0; $i < count($array); $i++){
	echo '<p>' . $array[$i] . '</p>';
}


// Interrupting loops and skipping iterations
echo '<hr>';

for ($number = 0; $number < 10; $number++) {
	if ($number == 3){
		continue;
	}

    if ($number == 5) {
        break; // will stop the loop when $number reaches 5
    }
    
    echo '<p>' . $number . '</p>';
}

