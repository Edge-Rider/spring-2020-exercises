<?php

$html = '<div class="board">';

for ($row = 1; $row <= 8; $row++) {

    $html .= '<div class="row">';

    for ($column = 1; $column <= 8; $column++) {
 
        $class = $row % 2 == $column % 2 ? 'white' : 'black';

        $piece = '';

        if ($column == 2 && $row == 4) {
            $piece = '<img src="https://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png">';
        }

        if ($column == 6 && $row == 8) {
            $piece = '<img src="https://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/queen.png">';
        }

        $html .= '<div class="' . $class . '">' . $piece . '</div>';

    }

    $html .= '</div>';
}

$html .= '</div>';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess board</title>

    <style>
    .board .row {
        width: 24em;
        display: flex;
    }
    .board .row > div {
        width: 3em;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .board .white {
        background-color: #c2c2c2;
    }
    .board .black {
        background-color: #525252;
    }
    </style>
</head>
<body>

    <?= $html ?>
    
</body>
</html>