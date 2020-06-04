<?php

require_once 'Match.php';
require_once 'FootballMatch.php';
require_once 'IcehockeyMatch.php';

$generic_match = new Match('2020-06-04 14:00:00');

var_dump($generic_match);

echo 'The match ends at ' . $generic_match->getEstimatedEnd();

$football_match = new FootballMatch('2020-06-04 15:00:00');

var_dump($football_match);

echo 'The football match ends at ' . $football_match->getEstimatedEnd();

$icehockey_match = new IcehockeyMatch('2020-06-04 19:00:00');

var_dump($icehockey_match);

echo 'The icehockey match ends at ' . $icehockey_match->getEstimatedEnd();

echo '<br>The third nr. 2\' score is ' . $icehockey_match->getThirdScore(2);