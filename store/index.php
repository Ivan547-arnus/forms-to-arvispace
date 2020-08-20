<?php
    header("Access-Control-Allow-Origin: *");
    //include_once('https://arvispace.com/serviciosASAR/get_productos.php');    
    //$objProducto = new producto();
    //$objProducto = json_decode($objProducto->ToToJsonProductos(72100));
    include_once('../routes/routes.php');
    $routes = new routes();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Store</title>
    <!--General styles-->
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>carousel.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>close.less">


    <!--Styles-->
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>header.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>sweet-alert.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>side-menu.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>document.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>content-store.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>buttons.less">
    <link rel="stylesheet/less" href="<?php echo $routes->style;?>container-caracteristica.less">
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
    <div id="store">
        <div class="container">
            <header-nav
                nav-to-side
                secondary-button-content = '<i class="icon-Buscar"></i>'
                @set-side-menu="setSideMenu"
                @secondary-click="setSearchContainer"
            ></header-nav>

            <side-menu-container
                v-bind:is-active="sideMenuIsActive"
                @set-side-menu="setSideMenu"
                :options="
                    [{titulo:'Perfil',icon:'icon-Usuario' ,url:'uniwebview://open-profile'},
                    {titulo:'Mi carrito',icon:'icon-carrito2', url:'uniwebview://open-cart'},
                    {titulo:'Mis pedidos',icon:'icon-Pedido', url:'uniwebview://open-profile'},
                    {titulo:'Volver a camara',icon:'icon-modelo-3d-con-AR', url:'uniwebview://close'}]"
            ></side-menu-container>

            <categories 
                v-bind:categorias="data"
                @selected-category="selectCategory"
            ></categories>

            <productos
                v-bind:productos = "topVistos"
                name-to-carousel="top-vistos-carousel-"
                title = "Mas vistos"
                @selected-producto = "setProducto"
            ></productos> 

            <item-producto
                v-bind:producto = "selectedProducto"
                @close-item-producto = "closeItemProducto"
            ></item-producto>


            <subcategories
                v-bind:category="selectedCategory"
                @close-subcategory = "closeSubcategory"
                @select-producto = "setProducto"
            ></subcategories>

            <search-productos
                v-bind:is-active="searchIsActive"
                v-bind:list-productos = "productos"
                @close-search="closeSearch"
                @selected-producto="setProducto"
            ></search-productos>

        </div>
    </div>
</body>
<!--Scripts jquery to Vue-->
<script src="<?php echo $routes->js; ?>utils.js"></script>

<!--General components-->
<script src="<?php echo $routes->components; ?>empty-component.js"></script>
<script src="<?php echo $routes->components; ?>rounded-buttons.js"></script>
<script src="<?php echo $routes->components; ?>header.js"></script>
<script src="<?php echo $routes->components; ?>side-menu.js"></script>
<script src="<?php echo $routes->components; ?>close-container.js"></script>
<script src="<?php echo $routes->components; ?>image-to-carousel.js"></script>

<!--Components by vue-->
<script src="<?php echo $routes->components; ?>container-caracteristica.js"></script>
<script src="<?php echo $routes->components; ?>carousel.js"></script>
<script src="<?php echo $routes->components; ?>producto.js"></script>
<script src="<?php echo $routes->components; ?>search-products.js"></script>
<script src="<?php echo $routes->components; ?>category.js"></script>
<script src="<?php echo $routes->components; ?>subcategory.js"></script>
<script src="<?php echo $routes->components; ?>marcas.js"></script>
<script src="<?php echo $routes->components; ?>item-producto.js"></script>

<!--Initialize App request and routes to services-->
<script src="<?php echo $routes->init; ?>"></script>
</html>