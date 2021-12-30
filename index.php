<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.css">
    <title>Calculator</title>
</head>

<body>
    <div class="container">
        <?php
        if (isset($_GET['calculateBtn'])) {
            $input = $_GET['calculateInput'];
            $input = str_replace(' ', '', $input);
            if (preg_match('[([-+/*]\d+(\d+)?)]', $input)) {
                $res = eval('return ' . $input . ';');
                echo "<p>Result is $res</p>";
            } else {
                echo "<p style=color:red>Please insert math expression!</p>";
            }
            echo "<a href=<?php include('form.php');?>Back</a>";
        } else {
            include('form.php');
        }
        ?>
    </div>
</body>

</html>