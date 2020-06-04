<?php 

  $party = [
    'bilbo' => 'Bilbo Baggins',
    'frodo' => 'Frodo Baggins',
    'ring' => 'The One Ring',
  ];


// if(!isset($_GET['step']) || $_GET['step'] > 0) {
  $party['gandalf'] = 'Gandalf the Grey';
// };

// if(!isset($_GET['step']) || $_GET['step'] > 1) {
  unset($party['bilbo']);
// };

// if(!isset($_GET['step']) || $_GET['step'] > 2) {
  $party['sam'] = 'Samwise Gamgee';
// };

// if(!isset($_GET['step']) || $_GET['step'] > 3) {
  unset($party['gandalf']);
// };

$party = leave_hobbiton($party);

$party = go_to_bree($party);

$party = go_to_weathertop($party);

$party = meet_arwen($party);

$party =  go_to_rivendell($party);
//#27
$party = go_to_moria($party);
//28
$party = go_to_falls_of_rauros($party);

$parties = break_fellowship($party);
?>