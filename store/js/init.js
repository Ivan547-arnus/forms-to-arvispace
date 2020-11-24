/**
 * Area para testing comentar en prodduction
 */
$(document).ready(function(){
    content.init("testing","1",'{"cp":"90796"}');
});


let content = new Vue({
    el:'#store',
    props:{
    },
    data(){
        return{
            initialize:{},
            data:[],
            productos:[],
            marcas:[],
            productosOferta:[],
            topVistos:[],
            limitTopVistos:8,
            selectedProducto:null,
            selectedCategory:null,
            searchIsActive:false,
            sideMenuIsActive:false,
            dataBrands:[],
            currentBrand : 0,
            brandIsActive :true,
            categoriesData:[],
            currentObjBrand:null
        }
    },
    components:{
        categories: category,
        empresas: marca,
        productos: producto,
        'item-producto':itemProducto,
        'subcategories':subcategory,
        'search-productos':searchProductos,
        'brands': brands,
        'header-nav': headerNav,
        'side-menu-container':sideMenuContainer,
        'brand-selected': brandSelected
    },
    methods:{
        setData(data){
            this.data = data;
        },
        selectBrand(id){
            this.brandIsActive = false
            this.currentBrand = id

            this.dataBrands.forEach( brand =>{
                if(brand.idEmpresa == id){
                    this.currentObjBrand = brand
                }
            })

            this.setCategories();
            this.setProductos();//llenamos areglo de productos cuando note cambio en arreglo data
            this.setMarcas();//llenamos arreglo de marcas cuando detecte un cambio en data
            this.setTopVistos();//llenamos arreglo de mas vistos cuando detecte cambio de data
        },
        backToSelectBrand(){
            this.currentObjBrand = null
            this.currentBrand = 0
            this.brandIsActive = true
            this.selectedProducto = null
            this.selectedCategory = null
            this.searchIsActive = false
        },
        setMarcas(){
            let marcasid = [];
            let tempMarca = [];

            this.data.forEach(categoria => {
                categoria.SubCategorias.forEach(subCategoria=>{
                    subCategoria.Productos.forEach(producto=>{
                        if(!marcasid.includes(producto.idEmpresa)){
                            let marca={
                                id:producto.idEmpresa,
                                foto:producto.imagenEmpresa,
                            }
                            marcasid.push(producto.idEmpresa);
                            tempMarca.push(marca);
                        }
                    });
                });
            });
            this.marcas = tempMarca;
        },
        setCategories(){
            let tempCategorias = [];
            this.data.forEach(categoria => {
                try{
                    categoria.SubCategorias.forEach(subCategoria=>{
                        subCategoria.Productos.forEach(producto=>{
                            if(producto.idEmpresa == this.currentBrand){
                                tempCategorias.push(categoria)
                                throw BreakException;
                            }
                        })
                    })
                }catch(e){

                }
            })
            this.categoriesData = tempCategorias
        },
        setProductos(){
            let tempProducto=[];
            this.data.forEach(categoria => {
                categoria.SubCategorias.forEach(subCategoria=>{
                    subCategoria.Productos.forEach(producto=>{
                        if(producto.idEmpresa == this.currentBrand){
                            tempProducto.push(producto);
                        }
                    });
                });
            });

            this.productos = tempProducto;
        },
        setTopVistos(){
            var tempProducto = [];
            
            this.productos.forEach(producto=>{
                let acumDescarga=0;
                producto.Caracteristicas.forEach(caracteristica=>{
                    acumDescarga = parseInt(acumDescarga) + parseInt(caracteristica.numeroDescargas);
                });
                let tempObj = {
                    idProBodPre:producto.idProBodPre,
                    numDescarga:parseInt(acumDescarga)
                }
                tempProducto.push(tempObj);
            });

            tempProducto = sortByKeyAsc(tempProducto,"numDescarga");

            let tempTopVistos = [];

            //console.log(this.limitTopVistos);
            let limit = this.productos.length < this.limitTopVistos ? this.productos.length : this.limitTopVistos
            for (let index = 0; index < limit; index++) {
                this.productos.forEach(producto=>{
                    if(producto.idProBodPre == tempProducto[index].idProBodPre){
                        tempTopVistos.push(producto);
                    }
                });
            }

            this.topVistos = tempTopVistos;
            //console.log(this.topVistos);
        },
        setProducto(producto){
            //llenamos la variable producto para abrir contenedor de producto
            this.selectedProducto = producto;
        },
        closeItemProducto(){
            this.selectedProducto = null; //vaciamos apara ocultar from del producto
        },
        closeSubcategory(){
            this.selectedCategory = null; //vaciamos para ocultar form 
        },
        selectCategory(idCategoria){
            this.selectedCategory = true;
            this.data.forEach(categoria => {
                //buscamos la categoria deseada
                if(categoria.idCategoria == idCategoria){
                    this.selectedCategory = categoria;//asignamos objeto
                    return false //Rompemos el ciclo
                }
            });
        },
        closeSearch(){
            this.searchIsActive = !this.searchIsActive;
        },
        setSideMenu(){
            this.sideMenuIsActive = !this.sideMenuIsActive;
        },
        setSearchContainer(){
            this.searchIsActive = !this.searchIsActive;
        },
        init(use_mode, id_app, data){
            this.initialize = {
                use_mode: use_mode,
                id_app: id_app,
                data: JSON.parse(data)
            }
        },
        getProductos(){
            //obtenermos productos por POST con JSON
            let service = this.initialize.use_mode == "testing" ? "https://arvispace.com/serviciosASARAmbientePruebas/ProductosAsar.php" : "https://arvispace.com/serviciosASAR/ProductosAsar.php"; 
            let form = new FormData();
            form.append('cp',this.initialize.data.cp);
            axios.post(service,form).then(function (response) {
                //cachamos informacion 
                content.setData(response.data);
            }).catch(function (error) {
                //devolvemos error en caso de que lo haya
                console.log(error);
            });
        },
        setBrands(brands){
            this.dataBrands = brands;
        }
        ,
        getBrands(){
            //obtenermos productos por POST con JSON
            let service = this.initialize.use_mode == "testing" ? "https://arvispace.com/serviciosASARAmbientePruebas/getInformacionEmpresas.php" : "https://arvispace.com/serviciosASAR/getInformacionEmpresas.php"; 
            let form = new FormData();
            form.append('cp',this.initialize.data.cp);
            axios.post(service,form).then(function (response) {
                //cachamos informacion 
                content.setBrands(response.data);
            }).catch(function (error) {
                //devolvemos error en caso de que lo haya
                console.log(error);
            });
        }
    },
    watch:{
        data(){
        },
        initialize(){
            this.getProductos();
            this.getBrands()
        }
    },
    //ejecutamos cuando se renderee la app
    mounted(){
    }
});


