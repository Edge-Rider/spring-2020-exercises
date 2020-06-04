<?php

class IcehockeyMatch extends Match
{
    public $nr_of_players = 12;
    public $length = 60;
    public $thirds = [
        '0:0', // 0
        '0:0', // 1
        '0:0'  // 2
    ];

    public function getThirdScore($third_nr)
    {
        return $this->thirds[$third_nr - 1];
    }
}