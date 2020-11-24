<?php
    header("Access-Control-Allow-Origin: *");
    include_once('../routes/routes.php');
    $routes = new routes();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>

    <!--General styles-->
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>buttons.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>text.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>inputs.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>close.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>carousel.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>container-caracteristica.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>sweet-alert.less">

    <!--Styles-->
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>header.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>text.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>cart.less">
    <link rel="stylesheet" href="<?php echo $routes->animation ?>">

    <!--JS libraries-->
    <script src="<?php echo $routes->libraries;?>jquery/jquery.js"></script>
    
    <!--JS Bootstrap scripts-->
    <script src="<?php echo $routes->popper;?>" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="<?php echo $routes->libraries;?>bootstrap/js/bootstrap.js"></script>

    <!--Sweet alert libraries-->
    <script src="<?php echo $routes->sweetAlert?>"></script>

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
    <div id="cart">
        <header-nav
            nav-to-done-icon
            text-done="Cancelar"
            header-icon = "../images/logo.png"
        ></header-nav>

        <products-in-cart
            ref="productosInCart"
            v-bind:productos="productos"
            :initialize="initialize"
            @clicked-button="setActiveConfirmCart"
            @on-change-total="onChangeTotal"
            @delete-producto="deleteProduct"
        ></products-in-cart>

        <confirm-cart
            v-bind:is-active="isActiveConfirmCart"
            :initialize="initialize"
            :total="total"
            :locations="locations"
            @close="setActiveConfirmCart"
            @on-submit="validateExists"
        ></confirm-cart>
    </div>
</body>

<!--Scripts jquery to Vue-->
<script src="<?php echo $routes->js; ?>utils.js"></script>

<!--Generañ components by Vue js-->
<script src="<?php echo $routes->components; ?>rounded-buttons.js"></script>
<script src="<?php echo $routes->components; ?>close-container.js"></script>
<script src="<?php echo $routes->components; ?>image-to-carousel.js"></script>
<script src="<?php echo $routes->components; ?>buttons.js"></script>
<script src="<?php echo $routes->components; ?>inputs.js"></script>
<script src="<?php echo $routes->components; ?>forms.js"></script>
<script src="<?php echo $routes->components; ?>carousel.js"></script>

<!--Components by vue-->
<script src="<?php echo $routes->components; ?>header.js"></script>
<script src="<?php echo $routes->components; ?>card-cobro.js"></script>
<script src="<?php echo $routes->components; ?>confirm-cart.js"></script>
<script src="<?php echo $routes->components; ?>container-caracteristica.js"></script>
<script src="<?php echo $routes->components; ?>product-in-cart.js"></script>
<script src="<?php echo $routes->components; ?>productos-in-cart.js"></script>

<!--Initialize App request and routes to services-->
<script src="<?php echo $routes->init; ?>"></script>

</html>