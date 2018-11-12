<!DOCTYPE html>
<html><head>
    <link rel="stylesheet" href="style.css">
    <meta charset="utf-8">
    <title>tile stamper</title>
  </head>
  <body>
    <div class="menu">
      <?php
        $phppath = $_SERVER['DOCUMENT_ROOT'] . "/portfolio/php/";
        include_once($phppath . "/menu.php");
        print($phppath);
      ?>
    </div>
    <br>
    <br>
    <div id="container">
      <canvas id="canvas" width="512" height="512"></canvas>
    </div>
    <script src="tile.js"></script>
</body></html>
