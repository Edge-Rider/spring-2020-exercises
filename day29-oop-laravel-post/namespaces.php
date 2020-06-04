<?php

namespace Honza\code;

use function Honza\functions\strlen as thebestfunction;

require_once 'Honza/functions/functions.php';

var_dump(\Honza\functions\strlen('Hello')); 

var_dump(\strlen('Hello'));

var_dump(thebestfunction('Hello'));

// FQN:   \Honza\code\strlen - not exists
// trying \strlen - exists!
var_dump(strlen('Hello'));

var_dump(\Honza\functions\SomeClass::class);

