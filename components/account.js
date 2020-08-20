let account = {
    props:{
        initialize:null,
        pedidos:null
    },
    components:{
        'pedidos':pedidos,
        'rounded-button':roundedButton,
        'configuration':configuration
    },
    data(){
        return{
            isPedidosContainerActive:false,
            isConfigurationContainerActive:false,
            buttonHeaderUser:{
                type:'roundend-button',
                content:"<i class='icon-Usuario'></i>",
                typeButton:'button',
                align:'',
                size:'lg'
            },
            buttonEdit:{
                type:'roundend-button',
                content:"<i class='icon-Editar'></i>",
                typeButton:'button',
                align:'',
                size:'lg'
            },
            buttonPedidos:{
                type:'roundend-button',
                content:"<i class='icon-Paquetes'></i>",
                typeButton:'button',
                align:'',
                size:'lg'
            },
            buttonFacturacion:{
                type:'roundend-button',
                content:"<i class='icon-Facturacin'></i>",
                typeButton:'button',
                align:'',
                size:'lg'
            },
            buttonConfiguracion:{
                type:'roundend-button',
                content:"<i class='icon-Configuracion'></i>",
                typeButton:'button',
                align:'',
                size:'lg'
            },
            buttonCerrarSesion:{
                type:'roundend-button',
                content:"<i class='icon-cerrar-sesin'></i>",
                typeButton:'button',
                align:'',
                size:'lg'
            }
        }
    },
    methods: {
        closeSesion(){
            let params = "";
            comunicateWebView("cerrar-session",params);
        },
        setPedidosContainer(){
            this.isPedidosContainerActive = !this.isPedidosContainerActive;
        },
        setConfigurationContainer(){
            this.isConfigurationContainerActive = !this.isConfigurationContainerActive; 
        }
    },
    template:`
        <div class="account-container" v-if="initialize!=null">
            <pedidos
                :isActive = "isPedidosContainerActive"
                @close = "setPedidosContainer"
                :initialize="initialize"
                :listaPedidos = "pedidos"
            ></pedidos>
            <configuration
                :isActive="isConfigurationContainerActive"
                :initialize="initialize"
                @close="setConfigurationContainer"
            ></configuration>
            <div class="header">
                <div class="header-container">
                    <div class="content">
                        <rounded-button
                            :field = "buttonHeaderUser"
                        ></rounded-button>
                        <label>
                            <b>{{initialize.data.nombre}}</b>
                        </label>
                    </div>
                </div>
            </div>
            <div class="card" v-if="1>5">
                <div class="card-body option-to-menu ">
                    <rounded-button
                        :field="buttonEdit"
                    ></rounded-button>
                    <label><b>Editar Cuenta.</b></label>
                </div>
            </div>
            <div class="card first-card" @click="setPedidosContainer">
                <div class="card-body option-to-menu ">
                    <rounded-button
                        :field="buttonPedidos"
                    ></rounded-button>
                    <label><b>Ver pedidos</b></label>
                </div>
            </div>
            <div class="card">
                <div class="card-body option-to-menu ">
                    <rounded-button
                        :field="buttonFacturacion"
                    ></rounded-button>
                    <label><b>Facturación.</b></label>
                </div>
            </div>
            
            <div class="card" @click="setConfigurationContainer">
                <div class="card-body option-to-menu">
                    <rounded-button
                        :field="buttonConfiguracion"
                    ></rounded-button>
                    <label><b>Configuración.</b></label>
                </div>
            </div>
            <div class="card" @click="closeSesion">
                <div class="card-body option-to-menu ">
                    <rounded-button
                        :field="buttonCerrarSesion"
                    ></rounded-button>
                    <label><b>Cerrar sesión.</b></label>
                </div>
            </div>
        </div>
    `
}