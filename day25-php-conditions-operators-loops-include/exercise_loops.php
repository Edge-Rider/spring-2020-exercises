<h1>Exercise Loops</h1>
<?php

// while loop
$time_served = 0;
while ($time_served < 10) {
    echo 'The prisoner has served ' . $time_served . ' years';
    $time_served++;
}

// do while loop
$time_served = 0;
do {
    echo 'The prisoner has served ' . $time_served . ' years' . '<br/>';
    $time_served++;
} while ($time_served < 10);

// for loop
for ($i = 0; $i < 5; $i++) {
    echo 'The prisoner has ' . 5 - $i . ' more years to serve' . '<br/>';
}

for ($i = 5; $i > 0; $i--) {
    echo 'The prisoner has ' . $i . ' more years to serve' . '<br/>';
}


// continue & break
for ($i = 10; $i > 0; $i--) {
    echo 'The prisoner has ' . $i . ' more years to serve' . '<br/>';

    if ($i > 5) {
        continue;
    }

    echo 'Going to a parole hearing...' . '<br/>';

    if($i === 2){
        echo 'Paroled!';
        break;
    }
}
