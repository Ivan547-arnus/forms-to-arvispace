let ubication = {
    props:{
        initialize:{
            type:Object
        }
    },
    components:{
        'component-form': componentForm
    }, 
    data(){
        return{
            postalCode:"",
            formSchema: {
                fields: [
                    {
                        type: 'text-input',
                        name: 'input_codigo_postal',
                        placeholder: 'Codigo postal',
                        validation:function(value){
                            if(value != ""){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    }
                ]
            },
            formDefaultData: {
                input_codigo_postal: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Opción invalida"
                    }
                }
            },
            buttons:{
                type:'roundend-button',
                content:'<i class="icon-Correcto"></i>',
                typeButton:'submit',
                align:'center'
            }
        }
    }, 
    methods:{
        setPostalCode(value){
            this.formDefaultData.input_codigo_postal.value  = value;
        },
        setPostalCodeApp(){
            let bandera = true;
            this.formSchema.fields.forEach(field=>{
                if(typeof field.validation == 'function'){
                    if(!field.validation(this.formDefaultData[field.name].value)){
                        this.formDefaultData[field.name].error.isActive=true;
                        bandera = false;
                    }else{
                        this.formDefaultData[field.name].error.isActive=false;
                    }
                }
            });
            if(bandera){
                comunicateWebView("location","postal_code="+this.formDefaultData.input_codigo_postal.value);
            }
        }
    },
    template:`
        <div class="container">
            <div class="wrapper" v-if="initialize!=null">
                <div class="form">
                    <h1>Elige donde recibiras tus compras.</h1>
                    <div v-if="initialize.data.cp !=''">
                        <p class="text-center"><b>Codigo postal actual:</b> {{initialize.data.cp}}</p>
                    </div>
                    <component-form
                        :schema="formSchema"
                        :data="formDefaultData"
                        :buttons="buttons"
                        @on-submit="setPostalCodeApp"
                    ></component-form>       
                </div>
            </div>
        </div>
    `
}