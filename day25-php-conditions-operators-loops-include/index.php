<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>A website</title>
</head>
<body>
    
    <?php 
        include('./header.php');
    ?>

    <?php 
        if(isset($_GET['p'])){

            if($_GET['p'] === 'home'){
                include('./home.php');
            }else{
                include('./page.php');
            }

        } else {
            include('./home.php');
        }
    ?>

    <?php 
        include('./footer.php');
    ?>

</body>
</html>