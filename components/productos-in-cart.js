let productosInCart = {
    props:{
        productos:Array,
        initialize:{
            type:Object
        }
    },
    data(){
        return{
            total:0,
            cantidad:0
        }
    },
    methods: {
        setTotal(){
            let tempTotal = 0;
            this.$props.productos.forEach(producto=>{
                producto.Caracteristicas.forEach(caracteristica=>{
                    if(caracteristica.statusOferta == 0){
                        tempTotal+= parseFloat(caracteristica.precio);
                    }else{
                        tempTotal+= parseFloat(caracteristica.precioOferta);
                    }
                });
            });
            this.total = tempTotal;
            this.$emit("on-change-total",this.total)
        },
        setCantidad(){
            this.cantidad = this.$props.productos.length;
        },
        setActiveConfirmCart(){
            this.$emit('clicked-button');
        },
        onChangeProducto(){
            try{
                let tempTotal = 0;
                let tempCantidad = 0;
                for (let index = 0; index < this.$refs.dataPorProducto.length; index++) {
                    tempCantidad += this.$refs.dataPorProducto[index].inputNumberData.value;
                    tempTotal += this.$refs.dataPorProducto[index].currentPrice;
                }
                this.total = tempTotal;
                this.cantidad = tempCantidad;
                this.$emit("on-change-total",this.total);
            }catch(e){
                console.log("Error por que se monto antes de iniciar variables.");
            }
        },/**
         * Aun no ha sido probado en produccion con muchas caracteristicas (Ya fue probado si manda la informacion correctamente)
         * @param {Objeto producto} producto 
         */
        getIndexCaractersticaSelected(producto){
            let idProBodPre = producto.idProBodPre;
            let pos = this.$props.initialize.data._cartCollection.data.map(function(e) { return e.idProBodPre; }).indexOf(idProBodPre);
            let tempcurrentProducto = this.$props.initialize.data._cartCollection.data[pos];
            pos = producto.Caracteristicas.map(function(e) { return e.idCaracteristica; }).indexOf(tempcurrentProducto.idCaracteristica);
            return pos;
        },
        getCantidadByCart(producto){
            let idProBodPre = producto.idProBodPre;
            let pos = this.$props.initialize.data._cartCollection.data.map(function(e) { return e.idProBodPre; }).indexOf(idProBodPre);
            let tempcurrentProducto = this.$props.initialize.data._cartCollection.data[pos];
            return parseInt(tempcurrentProducto.cantidad);
        },
        deleteProduct(id){
            this.$emit('delete-producto',id);
        },
    },
    watch: {
        total(){
            this.$emit('on-change-total',this.total);
        },
        productos(){
            this.setTotal();
            this.setCantidad();
        }
    },
    components:{
        'card-cobro':cardCobro,
        'product-in-cart':productInCart
    },
    template:`
        <div class="container">
            <div class="row products-in-cart">
                <div class="col-12"  v-for="(producto,productoIndex) in productos">
                    <product-in-cart
                        ref="dataPorProducto"
                        :producto="producto"
                        :selected="producto.Caracteristicas[getIndexCaractersticaSelected(producto)].idCaracteristica"
                        :precio="producto.Caracteristicas[getIndexCaractersticaSelected(producto)].statusOferta == '1'?producto.Caracteristicas[getIndexCaractersticaSelected(producto)].precioOferta:producto.Caracteristicas[getIndexCaractersticaSelected(producto)].precio"
                        :cantidad="getCantidadByCart(producto)"
                        @set-current-price="onChangeProducto"
                        @delete-producto="deleteProduct"
                    ></product-in-cart>
                </div>
            </div>
            <card-cobro
                :limiteEnvio="10000"
                :costoEnvio="500"
                :total="total"
                :cantidad="cantidad"
                ref="card-cobro"
                @clicked-button="setActiveConfirmCart"
            ></card-cobro>
        </div>
    `
}

