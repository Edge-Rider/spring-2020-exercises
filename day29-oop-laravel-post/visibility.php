<?php

require_once 'Warehouse.php';

$trainyard_warehouse = new Warehouse;
$docks_warehouse = new Warehouse;

$trainyard_warehouse->name = 'Trainyard warehouse';

$docks_warehouse->name = 'Docks warehouse';

$trainyard_warehouse->addCrate('Doomsday device');
$trainyard_warehouse->addCrate('Arc of Covenant');

var_dump($trainyard_warehouse);

var_dump($docks_warehouse);
