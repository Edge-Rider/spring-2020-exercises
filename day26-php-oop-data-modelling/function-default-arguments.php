<?php


function headline($text, $level = 1)
{
    //         <h1>                        </h1>
    return '<h'.$level.'>' . $text . '</h'.$level.'>';
}

echo headline('Headline 1'); // default value 1 will be used for second argument

echo headline('Headline 3', 3);