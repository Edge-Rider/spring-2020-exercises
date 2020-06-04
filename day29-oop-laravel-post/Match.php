<?php

class Match
{
    public $begins_at       = null;
    public $score           = null;
    public $nr_of_players   = null;
    public $length          = null;

    public function __construct($begins_at)
    {
        $this->begins_at = $begins_at;
    }

    public function getEstimatedEnd()
    {
        // '2020-06-04 14:00:00'
        $begins_at_timestamp = strtotime($this->begins_at);

        $ends_at_datetime = date('Y-m-d H:i:s', $begins_at_timestamp + $this->length * 60);

        return $ends_at_datetime;
    }
}