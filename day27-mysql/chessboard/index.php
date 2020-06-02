<?php

// the idea is that the variable $html will contain
// the HTML code for the entire board. We start with
// the opening tag and we will keep adding to it with .=
$html = '<div class="board">';

// for 8 rows
for ($row = 1; $row <= 8; $row++) {

    // start HTML for a row
    $html .= '<div class="row">';

    // for 8 columns
    for ($column = 1; $column <= 8; $column++) {
 
        // square is white when both row and column numbers
        // are either odd or even
        $class = $row % 2 == $column % 2 ? 'white' : 'black';

        // by default there is no piece so we plan to put just ''
        // on the square
        $piece = '';

        // but if this is B4, the piece will be a white king
        if ($column == 2 && $row == 4) {
            $piece = '<img src="https://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png">';
        }

        // and if this is F8, the piece will be a white queen
        if ($column == 6 && $row == 8) {
            $piece = '<img src="https://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/queen.png">';
        }

        // we add the code for the square, together with its class 
        // and the piece inside
        $html .= '<div class="' . $class . '">' . $piece . '</div>';
    }

    // end HTML for a row
    $html .= '</div>';
}

// end HTML for the board
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

    <?php echo $html ?>
    
</body>
</html>