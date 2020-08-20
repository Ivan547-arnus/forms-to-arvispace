let register = {
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
                        name: 'input_nombre',
                        placeholder: 'Nombre completo',
                        validation:function(value){
                            if(value != ""){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text-input',
                        name: 'input_apodo',
                        placeholder: 'Nombre se usuario (apodo)',
                        validation:function(value){
                            if(value != ""){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text-input',
                        name: 'input_email',
                        placeholder: 'Email',
                        validation:function(value){
                            let reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                            if(reg.test(value)){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text-input',
                        name: 'input_telefono',
                        placeholder: 'Ingresa tu numero de telefono',
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
                        },
                        comparation:function(value,compareValue){
                            if(value == compareValue){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    },
                    {
                        type: 'password-input',
                        name: 'input_r_password',
                        placeholder: 'Repetir Contraseña',
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
                input_nombre: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Campo requerido"
                    }
                },
                input_apodo: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Campo requerido"
                    }
                },
                input_telefono: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Campo requerido"
                    }
                },
                input_email: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Necesita ingresar un correo."
                    }
                },
                input_password: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Campo requerido"
                    },
                    toCompare:"input_r_password"
                },
                input_r_password: {
                    value: '',
                    error:{
                        isActive:false,
                        message:"Campo requerido"
                    }
                }
            },
            buttons:{
                type:'primary-button-block',
                content:'Registrar',
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
                if(typeof field.comparation == 'function' && !this.formDefaultData[field.name].error.isActive){
                    if(!field.comparation(this.formDefaultData[field.name].value, this.formDefaultData[this.formDefaultData[field.name].toCompare].value)){
                        this.formDefaultData[field.name].error.isActive=true;
                        this.formDefaultData[field.name].error.message="Contraseñas no coinciden";
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
        setActiveLogin(){
            this.$emit('open-login');
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
                <p>¿Ya tienes cuenta? <a href="#" @click="setActiveLogin">Inicia sesión aqui</a></p>
                <p class="cancel"><a href="uniwebview://close" >Cancelar</a></p>
            </div>
        </div>
    `
}