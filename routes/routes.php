<?php
    class routes{
        public $server;
        public $libraries;
        public $components;
        public $style;
        public $js;
        public $vue;
        public $less;
        public $axios;
        public $init;
        public $popper;
        public $sweetAlert;
        public $animation;
        public $maps;

        function __construct() {
            $this->server = "https://arvispace.com/";
            $this->libraries = $this->server."lib/" ;
            $this->components = "../components/";
            $this->style = "../style/";
            $this->js = "../js/";
            $this->vue = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
            $this->less = "https://cdn.jsdelivr.net/npm/less";
            $this->axios = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
            $this->init = "js/init.js";
            $this->popper = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
            $this->sweetAlert = "https://arvispace.com/lib/sweet-alert/dist/sweetalert2.all.min.js";
            $this->animation = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css";
            $this->maps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDTYVpzbCOcSSB54S6f9qUVVKqQkZDvvaY&callback=initMap&libraries=places";
        }
    }
?>