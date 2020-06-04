<?php

class BestBlueberryPancake extends BlueberryPancake
{
    public function prepare()
    {
        parent::prepare();

        echo 'Preparing strawberry jam...<br>';
    }
}