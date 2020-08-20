let productInCart = {
    props:{
        producto:{
            type:Object
        },
        selected:{
            type:String
        },
        precio:0,
        cantidad:0
    },
    data(){
        return{
            field:{
                placeholder:"Cantidad",
                name: 'input-cantidad',
                placeholder: 'Cantidad'
            },
            inputNumberData:{
                value:1
            },
            currentPrice:0,
            isContainerVarianteActive:false,
            selectedCaracteristica:-1,
            buttonDelete:{
                type:'roundend-button',
                content:'x',
                typeButton:'button',
                align:'top-end ',
                size:''
            }
        }
    },
    watch: {
        selected(){
            this.selectedCaracteristica = this.$props.selected;
        },
        selectedCaracteristica(){
            this.setCurrentPrice();
        },
        'inputNumberData.value'(){
            this.setCurrentPrice();
        }
    },
    components:{
        carousel:carousel,
        'number-input':numberInput,
        'container-variante':containerVariante,
        'roundend-button':roundedButton
    },
    mounted() {
        this.inputNumberData.value = this.$props.cantidad;
        this.selectedCaracteristica = this.$props.selected;
        this.setCurrentPrice();
    },
    computed: {
        selectedIndex(){
            return this.$props.producto.Caracteristicas.map(function(e) { return e.idCaracteristica; }).indexOf(this.$props.selected);
        }
    },
    methods: {
        increment(){
            this.inputNumberData.value++;
            let params = "idProBodPre="+this.$props.producto.idProBodPre+"&idCaracteristica="+this.selectedCaracteristica+"&cantidad="+this.inputNumberData.value;
            comunicateWebView("increment-cantidad-cart",params);
        },
        decrement(){
            let tempValue = this.inputNumberData.value-1;
            if(tempValue>0){
                this.inputNumberData.value--;
                let params = "idProBodPre="+this.$props.producto.idProBodPre+"&idCaracteristica="+this.selectedCaracteristica+"&cantidad="+this.inputNumberData.value;
                comunicateWebView("decrement-cantidad-cart",params);
            }
        },
        deleteFromCart(){
            this.$emit('delete-producto',this.$props.producto.idProBodPre);
        },
        setCurrentPrice(){
            let tempPrecio = 0;
            this.$props.producto.Caracteristicas.forEach(caracteristica=>{
                if(this.selectedCaracteristica == caracteristica.idCaracteristica){
                    tempPrecio = caracteristica.statusOferta=="1"?caracteristica.precioOferta:caracteristica.precio;
                    return false;
                }
            });
            tempPrecio *= this.inputNumberData.value;
            this.currentPrice =  tempPrecio;
            this.$emit('set-current-price');
        },
        setContainerViewVariante(){
            this.isContainerVarianteActive = !this.isContainerVarianteActive;
        },
        setVariante(idCaracteristica){
            this.selectedCaracteristica = idCaracteristica;
            let params = "idProBodPre="+this.$props.producto.idProBodPre+"&idCaracteristica="+this.selectedCaracteristica;
            comunicateWebView("change-caracteristica",params);
            this.setContainerViewVariante();
        }
    },
    filters:{
        toCurrency(val){
            return '$' + val.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    },
    template:`
        <div>
            <container-variante 
                :isActive="isContainerVarianteActive"
                :caracteristicas="producto.Caracteristicas"
                :currentCaracteristica="selectedCaracteristica"
                @on-change-caracteristica="setVariante"
            ></container-variante>
            <div class="row element"
                :class="caracteristica.idCaracteristica == selectedCaracteristica ? 'element-active' : 'element-disabled'" 
                v-for="(caracteristica, caracteristicaIndex) in producto.Caracteristicas"
            >
                <roundend-button
                    :field="buttonDelete"
                    @clicked-rounded="deleteFromCart"
                ></roundend-button>
                <div class="col-5">
                    <carousel
                        v-bind:id="caracteristica.idCaracteristica"
                        name="product-in-cart-carousel-"
                        v-bind:imagenes="caracteristica.imagenes"
                    ></carousel>
                </div>
                <div class="col-7">
                    <h4 class="title">{{producto.descripcion}}</h4>
                    <a @click="setContainerViewVariante" v-if="producto.Caracteristicas.length > 1">Ver colores</a>
                    <p v-if="caracteristica.statusOferta == 0" class="precio">{{currentPrice | toCurrency}}</p>
                    <p v-if="caracteristica.statusOferta == 1" class="precio-oferta">{{currentPrice | toCurrency}}</p>
                    <number-input
                        :field="field"
                        :data="inputNumberData"
                        @increment="increment"
                        @decrement="decrement"
                    ></number-input>
                </div>
            </div>
        </div>
    `
}