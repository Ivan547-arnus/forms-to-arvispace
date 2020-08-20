let login = {
    props:{
        isActive:false
    },
    components:{
        'rounded-button':roundedButton,
        'rounded-button':roundedButton,
        'component-form':componentForm
    },
    data() {
        return {
            buttonHeaderUser:{
                type:'roundend-button',
                content:"<i class='icon-Usuario'></i>",
                typeButton:'button',
                align:'center',
                size:''
            },
            formSchema: {
                fields: [
                    {
                        type: 'text-input',
                        name: 'input_user',
                        placeholder: 'Email/Numero',
                        validation:function(value){
                            if(value != ""){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    },
                    {
                        type: 'password-input',
                        name: 'input_password',
                        placeholder: 'Contraseña',
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
                input_user: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Campo requerido"
                    }
                },
                input_password: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Campo requerido"
                    }
                }
            },
            buttons:{
                type:'primary-button-block',
                content:'Iniciar',
                typeButton:'submit',
                disabled:false
            }
        }
    },
    methods: {
        onSubmit(form){
            let currentContentButton = this.buttons.content;
            this.buttons.disabled = true;
            this.buttons.content = "Procesando...";
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
                this.$emit("on-submit",form);
            }else{
                this.buttons.disabled = false;
                this.buttons.content = currentContentButton;
            }
        },
        setActiveRegister(){
            this.$emit('open-register');
        }
    },
    template:`
        <div class="container-fluid" v-show="isActive">
            <div class="login-head">
            </div>
            <rounded-button
                :field="buttonHeaderUser"
            ></rounded-button>
            <div class="container">
                <component-form
                    :schema="formSchema"
                    :data="formDefaultData"
                    :buttons="buttons"
                    @on-submit="onSubmit"
                ></component-form>  
                <p>¿No tienes cuenta? <a href="#" @click="setActiveRegister">Registrate aqui</a></p>
                <p class="cancel"><a href="uniwebview://close" >Cancelar</a></p>
            </div>
        </div>
    `
}