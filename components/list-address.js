let listAdress = {
    props:{
        address:null,
        isActive:false
    },
    data() {
        return {
            button:{
                type:'rounded-button',
                content:"<i class='icon-Zona-de-bodegas'></i>",
                typeButton:'button',
                align:'lg',
                size:'',
            },
            fieldScheme: 
            {
                placeholder: 'Dirección'
            },
            inputAddress: {
                value: '',
                error:{
                    isActive:false,
                    message:"Opción invalida"
                },
                action:null
            }
        }
    },
    methods: {
        closeListAddress(){
            this.$emit("close-list");
        },
        selectedAddress(address){
            this.$emit('selected-address',address);
        }
    },
    watch: {
        'inputAddress.value':function(){
            if(this.inputAddress.action != null){
                clearTimeout(this.inputAddress.action);
            }
            this.inputAddress.action = setTimeout(() => 
                { this.$emit('change-input-address',this.inputAddress.value); 
                this.inputAddress.action = null;
            }, 2000);
        }
    },
    components:{
        'rounded-button':roundedButton,
        'input-text':textInput
    },
    template:`
        <transition name="show-container">
            <div class="list-address-container" :class="isActive? '':'hide'">
                <div class="close-list" @click="closeListAddress">
                    <div class="icon-atras2" :class="isActive ? 'arrow-down':'arrow-up'">
                    </div>
                </div>
                <div class="input-address">
                    <input-text
                        :field="fieldScheme"
                        :data.sync="inputAddress"
                    ></input-text>
                </div>
                <div v-if="isActive && address != null">
                    <div @click="selectedAddress(item)" class="row address-element" v-if="item.geometry.location_type == 'ROOFTOP' || item.geometry.location_type == 'RANGE_INTERPOLATED' || item.geometry.location_type == 'GEOMETRIC_CENTER'" v-for="item in address">
                        <div class="col-3 icon">
                            <rounded-button
                                :field="button"
                            ></rounded-button>
                        </div>
                        <div class="col-9 formated-address">
                            <p class="title">{{item.address_components[1].long_name+", "+item.address_components[0].long_name}}</p>
                            <p class="text">{{item.address_components[2].long_name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    `
}