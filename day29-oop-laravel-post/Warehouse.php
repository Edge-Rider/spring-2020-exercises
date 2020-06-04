<?php

class Warehouse
{
    public $name = null;
    protected $nr_of_crates = 0;
    protected $crates = [];

    public function addCrate($crate_contents)
    {
        $this->crates[] = $crate_contents;

        $this->nr_of_crates = count($this->crates);
    }
}