<?php
    header("Access-Control-Allow-Origin: *");
    //include_once('https://arvispace.com/serviciosASAR/get_productos.php');    
    //$objProducto = new producto();
    //$objProducto = json_decode($objProducto->ToToJsonProductos(72100));
    include_once('../routes/routes.php');
    $routes = new routes();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agreements</title>

    <!--General styles-->
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>buttons.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>text.less">

    <!--Styles-->
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>header.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>side-menu.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>agreements.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>text.less">

    <!--JS libraries-->
    <script src="<?php echo $routes->libraries;?>jquery/jquery.js"></script>
    
    <!--JS Bootstrap scripts-->
    <script src="<?php echo $routes->popper;?>" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="<?php echo $routes->libraries;?>bootstrap/js/bootstrap.js"></script>

    
    <!--Vue development-->
    <script src="<?php echo $routes->vue;?>"></script>

    <!--Less style-->
    <script src="<?php echo $routes->less;?>"></script>

    <!--Axios http request-->
    <script src="<?php echo $routes->axios;?>"></script>
    
    <!--CSS libraries-->
    <link rel="stylesheet" href="<?php echo $routes->libraries;?>bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $routes->libraries;?>icons/index.css">
    
</head>
<body>
    <div id="agreements">
        <header-nav
            nav-to-done-icon
            text-done=""
            header-icon = "../images/logo.png"
        ></header-nav>
        <agreements></agreements>
    </div>
</body>

<!--Scripts jquery to Vue-->
<script src="<?php echo $routes->js; ?>utils.js"></script>

<!--General components-->
<script src="<?php echo $routes->components; ?>buttons.js"></script>
<script src="<?php echo $routes->components; ?>header.js"></script>
<script src="<?php echo $routes->components; ?>agreements.js"></script>
<script src="<?php echo $routes->components; ?>close-container.js"></script>

<!--Components to pedidos-->

<!--Initialize App request and routes to services-->
<script src="<?php echo $routes->init; ?>"></script>

</html>