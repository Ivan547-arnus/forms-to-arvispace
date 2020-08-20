let pedidos = {
    props:{
        isActive:{
            type:Boolean,
            default:false
        }, 
        initialize:null,
        listaPedidos:null
    },
    data() {
        return {
            styleToClose:{
                background:"#0F0F19",
                color:"#FFFFFF"
            },
            statusSelected:1,//1:Proceso 2:Enviado 3:Entregado
            productos:null,
            buttonFacturar:{
                type:'primary-button-block',
                content:'Facturar',
                typeButton:'button'
            },
            buttonRastrear:{
                type:'primary-button-block',
                content:'Rastrear',
                typeButton:'button'
            }
        }
    },
    watch: {
        listaPedidos(){
            if(this.$props.listaPedidos != null){
                let tempProductos = [];
                this.$props.listaPedidos.forEach(pedido =>{
                    pedido.Bodegas.forEach(bodega=>{
                        bodega.Productos.forEach(producto=>{
                            tempProductos.push(producto);
                        })
                    });
                });
                this.productos = tempProductos;
            }
        }
    },
    filters:{
        toCurrency(val){
            return '$' + parseFloat(val).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    },
    methods: {
        close(){
            this.$emit("close");
        },
        verProceso(){
            this.statusSelected = 1;
        },
        verEnviados(){
            this.statusSelected = 2;
        },
        verEntregados(){
            this.statusSelected = 3;
        },
        getPedidoById(id){
            let pos = this.$props.listaPedidos.map(function(e) { return e.idPedido; }).indexOf(id);
            return this.$props.listaPedidos[pos];
        },
        validateView(estatus){
            let result = false;
            estatus.forEach(data =>{
                if(data==this.statusSelected)
                    result = true;
            });
            return result;
        },
        rastreo(urlSeguimiento){
            window.location.replace(urlSeguimiento);
        }
    },
    components:{
        'close-container':closeContainer,
        'carousel':carousel,
        'primary-button-block':primaryButtonBlock
    },
    template:`
        <transition name="show-container">
            <div v-if="isActive && initialize!=null" class="pedidos-container">
                <close-container
                    :style-content="styleToClose"
                    title="Pedidos"
                    @close="close"
                ></close-container>
                <div class="container">
                    <div class="nav-wrapper">
                        <ul role="tablist" class="nav nav-pills nav-fill">
                            <li class="nav-item" @click="verProceso">
                                <a data-toggle="tab" role="tab" href="#undefined" class="nav-link" :class="statusSelected == 1 ? 'active':''">
                                    <div>
                                        <i class="icon-Entregado mr-1"></i>
                                        Proceso
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item" @click="verEnviados">
                                <a data-toggle="tab" role="tab" href="#undefined" class="nav-link" :class="statusSelected == 2 ? 'active':''">
                                    <div>
                                        <i class="icon-Enviado mr-1"></i>
                                        Enviado
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item" @click="verEntregados">
                                <a data-toggle="tab" role="tab" href="#undefined" class="nav-link" :class="statusSelected == 3 ? 'active':''">
                                    
                                    <div>
                                        <i class="icon-Entregado mr-1"></i>
                                        Entregado
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card mt-2 mb-2" v-if="producto.estatus==statusSelected" v-for="producto in productos">
                        <div class="card-body">
                            <carousel
                                v-bind:id="producto.idCaracteristica"
                                name="pedido-carousel-"
                                :imagenes="producto.imagnes"
                            ></carousel>
                            <p v-if="validateView(['1'])"><b>Fecha de creación del pedido:</b> {{getPedidoById(producto.idPedido).fechaHoraPedido}}</p>
                            <p v-if="validateView(['2'])"><b>Fecha de creación del pedido:</b> {{producto.fechaEntrega}}</p>
                            <p v-if="validateView(['1'])"><b>Dirección de entrega:</b> {{getPedidoById(producto.idPedido).direccion}}</p>
                            <p v-if="validateView(['1','2','3'])"><b>Cantidad de productos:</b> {{producto.cantidad}}</p>
                            <p v-if="validateView(['1','2','3'])"><b>Total:</b> {{producto.total | toCurrency}}</p>
                            <primary-button-block
                                v-if="validateView(['3'])"
                                :field="buttonFacturar"
                            ></primary-button-block>
                            <primary-button-block
                                v-if="validateView(['2']) && producto.activacionSeguimiento=='1'"
                                @clicked-button="rastreo(producto.url)"
                                :field="buttonRastrear"
                            ></primary-button-block>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    `
}