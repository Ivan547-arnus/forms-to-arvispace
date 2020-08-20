let cardCobro = {
    props:{
        total:{
            type:Number,
            default:0.0
        },
        cantidad:{
            type:Number,
            default:0
        },
        envio:{
            type:Boolean,
            default:false
        },
        limiteEnvio:{
            type:Number,
            default:0.0
        },
        costoEnvio:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            dataTotal:{
                type:Number,
                default:0
            },
            isSendFree:false,
            buttonPay:{
                type:'primary-button-block',
                content:'Continuar compra',
                typeButton:'submit'
            }
        }
    },
    components:{
        'primary-button-block':primaryButtonBlock
    },
    watch: {
        total(){
            this.dataTotal = this.$props.total;
        }
    },
    computed: {
        getTotalEnvio(){
            if(this.$props.envio){
                if(this.$props.total>this.$props.limiteEnvio){
                    this.dataTotal = this.$props.total;
                    this.isSendFree = true;
                    return "¡Gratis!"
                }else{
                    
                    this.isSendFree = false;
                    this.dataTotal = this.$props.total + this.$props.costoEnvio;
                    return this.$props.costoEnvio;
                }
            }else{
                this.isSendFree = false;
                return "";
            }
        }
    },
    methods: {
        setActiveConfirmCart(){
            this.$emit('clicked-button');
        }
    },
    filters:{
        toCurrency(val){
            return '$' + parseFloat(val).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    },
    template:`
        <div class="navbar fixed-bottom">
            <p class="label-card-cobro" v-if="envio && isSendFree"><b>Costo por envio:</b> <label>{{getTotalEnvio}}</label></p>
            <p class="label-card-cobro" v-else><b>Costo por envio:</b> <label>{{getTotalEnvio | toCurrency}}</label></p>
            <p class="label-card-cobro"><b>Cantidad de productos:</b> <label>{{cantidad}}</label></p>
            <p class="label-card-cobro"><b>Total:</b> <label>{{dataTotal | toCurrency}}</label></p>
            <primary-button-block
                :field="buttonPay"
                @clicked-button="setActiveConfirmCart"
            ></primary-button-block>
        </div>
    `
}
