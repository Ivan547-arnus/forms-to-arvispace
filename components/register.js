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
                                return {isValid : true, msg : ""};
                            }else{
                                return {isValid : false, msg : "Campo Requerido"};
                            }
                        }
                    },
                    {
                        type: 'text-input',
                        name: 'input_apodo',
                        placeholder: 'Nombre se usuario (apodo)',
                        validation:function(value){
                            if(value.length == 0){
                                return {isValid : false, msg : "Campo Requerido"};
                            }
                            else if(value.length < 4){
                                return {isValid : false, msg : "Debe tener minimo 4 caracteres"};
                            }else{
                                return {isValid : true, msg : ""};
                            }
                        }
                    },
                    {
                        type: 'text-input',
                        name: 'input_email',
                        placeholder: 'Email',
                        validation:function(value){
                            let reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                            if(value.length == 0){
                                return {isValid : false, msg : "Campo requerido"};
                            }
                            if(!reg.test(value)){
                                return {isValid : false, msg : "Formato invalido"};
                            }else{
                                return {isValid : true, msg : ""};
                            }
                        }
                    },
                    {
                        type: 'text-input',
                        name: 'input_telefono',
                        placeholder: 'Ingresa tu numero de telefono',
                        validation:function(value){
                            let letters = value.split('').filter(x => /\d/.test(x) == false);
                            if(letters.length > 0){
                                return {isValid : false, msg : "Esta campo no permite letras"};
                            }else if(value.length < 10){
                                return {isValid : false, msg : "Debe tener 10 caracteres"};
                            }
                            else if(value.length > 10){
                                return {isValid : false, msg : "No puedes tener mas de 10 caracteres"};
                            }else if(value.length == 0){
                                return {isValid : false, msg : "Campo requerido"};
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
                            if(value.length <= 8){
                                return {isValid : false, msg : "Su contraseña debe de tener mas de 8 caracteres"};
                            }else{
                                return {isValid : true, msg : ""};
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
                            if(value.length <= 8){
                                return {isValid : false, msg : "Su contraseña debe de tener mas de 8 caracteres"};
                            }else{
                                return {isValid : true, msg : ""};
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
                        message:"Campo requerido"
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
    watch:{
        'formDefaultData.input_nombre.value':function(newValue, oldValue){
            let field = this.formSchema.fields.filter(x => x.name == "input_nombre");
            let res = field[0].validation(newValue);
            this.formDefaultData.input_nombre.error.isActive = !res.isValid
            this.formDefaultData.input_nombre.error.message = res.msg
        },
        'formDefaultData.input_apodo.value':function(newValue, oldValue){
            let field = this.formSchema.fields.filter(x => x.name == "input_apodo");
            let res = field[0].validation(newValue);
            this.formDefaultData.input_apodo.error.isActive = !res.isValid
            this.formDefaultData.input_apodo.error.message = res.msg
        },
        'formDefaultData.input_email.value':function(newValue, oldValue){
            let field = this.formSchema.fields.filter(x => x.name == "input_email");
            let res = field[0].validation(newValue);
            this.formDefaultData.input_email.error.isActive = !res.isValid
            this.formDefaultData.input_email.error.message = res.msg
        },
        'formDefaultData.input_password.value':function(newValue, oldValue){
            let field = this.formSchema.fields.filter(x => x.name == "input_password");
            let res = field[0].validation(newValue);
            this.formDefaultData.input_password.error.isActive = !res.isValid
            this.formDefaultData.input_password.error.message = res.msg
        },
        'formDefaultData.input_r_password.value':function(newValue, oldValue){
            let field = this.formSchema.fields.filter(x => x.name == "input_r_password");
            let res = field[0].validation(newValue);
            this.formDefaultData.input_r_password.error.isActive = !res.isValid
            this.formDefaultData.input_r_password.error.message = res.msg
        },
        'formDefaultData.input_telefono.value': function(newValue, oldValue){
            let field = this.formSchema.fields.filter(x => x.name == "input_telefono");
            let res = field[0].validation(newValue);
            this.formDefaultData.input_telefono.error.isActive = !res.isValid
            this.formDefaultData.input_telefono.error.message = res.msg
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
                    if(!field.validation(this.formDefaultData[field.name].value).isValid){
                        this.formDefaultData[field.name].error.isActive=true;
                        bandera = false;
                    }else{
                        this.formDefaultData[field.name].error.isActive=false;
                    }
                }
                if(typeof field.comparation == 'function' && !this.formDefaultData[field.name].error.isActive){
                    if(!field.comparation(this.formDefaultData[field.name].value, this.formDefaultData[this.formDefaultData[field.name].toCompare].value)){
                        this.formDefaultData[field.name].error.isActive=true;
                        this.formDefaultData[field.name].error.message = "Contraseñas no coinciden";
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
        },
        hideRegister(){
            this.$emit('hide-register')
        }
    },
    template:`
    
        <div id="register">
        <transition name="slide">
            <div class="container-fluid" v-show="isActive">
                <div class="container">
                    <component-form
                        :schema="formSchema"
                        :data="formDefaultData"
                        :buttons="buttons"
                        @on-submit="onSubmit"
                    ></component-form>  
                    <p>¿Ya tienes cuenta? <a href="#" @click="setActiveLogin">Inicia sesión aqui</a></p>
                    <p class="cancel" @click="hideRegister">Cancelar</p>
                </div>
            </div>
            </transition>
        </div>
    
    `
}