<?php

class Region
{
    public $id = null;
    public $name = null;
    public $slug = null;

    public function insert()
    {
        $query = "
            INSERT 
            INTO `region`
            (`name`)
            VALUES
            (?)
        ";

        insert($query, [ $this->name ]);

        // update the id property of this object with the value
        // of the autoincremented id column
        $this->id = last_insert_id();
    }
}