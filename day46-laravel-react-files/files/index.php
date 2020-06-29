<?php


var_dump( __FILE__ );

var_dump( __DIR__ );

var_dump( pathinfo( __FILE__ ) );

var_dump( pathinfo( __FILE__ , PATHINFO_EXTENSION) );

var_dump( dirname( 'C:\web\vhosts.conf' ));

var_dump( basename( 'C:\web\vhosts.conf' ));


$contents = scandir( __DIR__ );

var_dump($contents);


$directory_handle = opendir( __DIR__ );

while (false !== ($next_file = readdir($directory_handle))) {
    var_dump($next_file);
}

closedir($directory_handle);

// mkdir('2020');

// rmdir('2020');

var_dump( is_dir( '2019' ) );

var_dump( is_dir( 'photos.txt' ) );


var_dump( file_exists( 'photos.txt' ) );
var_dump( file_exists( 'C:\web\vhosts.conf' ) );

var_dump( file_exists( 'C:\web\readme.md' ) );


$file_handle = fopen('photos.txt', 'r');

while (false !== ($next_line = fgets($file_handle))) {
    var_dump($next_line);
}

fclose($file_handle);


// $file_handle = fopen('photos.txt', 'a');

// fwrite($file_handle, "\r\n" . 'No more images in this folder');

// fclose($file_handle);

var_dump( file( 'photos.txt' ) );

var_dump( file_get_contents( 'photos.txt' ) );

// file_put_contents( 'photos.txt', 'This overwrites everything');

// unlink( 'photos.txt' );

function browse_directory($directory, &$results = [])
{
    $files = scandir($directory);
    foreach($files as $file) {
        if($file == '.' || $file == '..') continue;
        if(is_dir($directory.'/'.$file)) {
            // using recursiveness to go deeper
            browse_directory($directory.'/'.$file, $results);
        } else {
            // do something with the file
            $results[] = $directory . '/' . $file;
            // var_dump($file);
        }
    }
}

browse_directory( __DIR__ , $results);

var_dump($results);