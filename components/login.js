let login = {
    props: {
        isActive: false,
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
                            if(value.length == 0){
                                return {isValid : false, msg : "Campo Requerido"};
                            }else{
                                return {isValid : true, msg : ""};
                            }
                        }
                    },
                    {
                        type: 'password-input',
                        name: 'input_password',
                        placeholder: 'Contraseña',
                        validation:function(value){
                            if(value.length == 0){
                                return {isValid : false, msg : "Campo Requerido"};
                            }else{
                                return {isValid : true, msg : ""};
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
    watch:{
        'formDefaultData.input_user.value':function(newValue, oldValue){
            let field = this.formSchema.fields.filter(x => x.name == "input_user");
            let res = field[0].validation(newValue);
            this.formDefaultData.input_user.error.isActive = !res.isValid
            this.formDefaultData.input_user.error.message = res.msg
        },
        'formDefaultData.input_password.value':function(newValue, oldValue){
            let field = this.formSchema.fields.filter(x => x.name == "input_password");
            let res = field[0].validation(newValue);
            this.formDefaultData.input_password.error.isActive = !res.isValid
            this.formDefaultData.input_password.error.message = res.msg
        },
    },
    methods: {
        onSubmit(form){
            let currentContentButton = this.buttons.content;
            this.buttons.disabled = true;
            this.buttons.content = "Procesando...";
            let bandera = true;
            this.formSchema.fields.forEach(field=>{
                if(typeof field.validation == 'function'){
                    if(!field.validation(this.formDefaultData[field.name].value).isValid){
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
            console.log("emmit register");
            this.$emit('open-register');
        },
        hideLogin(){
            
            this.$emit('hide-login')
        }
    },
    template:`
    
        <div class="container-fluid" v-show="isActive">
        <transition name="fade">
                <div class="container">
                    <component-form
                        :schema="formSchema"
                        :data="formDefaultData"
                        :buttons="buttons"
                        @on-submit="onSubmit"
                    ></component-form>  
                    <p>¿No tienes cuenta? <a href="#" @click="setActiveRegister">Registrate aqui</a></p>
                    <p class="cancel" @click="hideLogin">Cancelar</p>
                </div>
                </transition>
        </div>
    `
}