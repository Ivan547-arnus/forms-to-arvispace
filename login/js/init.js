/**
 * Area para testing comentar en prodduction
 */
$(document).ready(function(){
    content.init("testing","1","{}")
});


let content = new Vue({
    el:"#login",
    components:{
        'component-login':login,
        'component-register':register,
        'user-principal':userPrincipal,
        'ar-anim':arAnim
    },
    data(){
        return{
            initialize:null,
            isRegisterActive:false,
            isLoginActive:false
        }
    },

    methods: {
        init(use_mode, id_app, data){
            this.initialize = {
                use_mode: use_mode,
                id_app: id_app,
                data: JSON.parse(data)
            }
        },
        setContent(){
            this.isRegisterActive = !this.isRegisterActive;
            this.isLoginActive = !this.isLoginActive;
        },
        startSession(user){
            let params = "correo="+user.correo+"&password="+user.password+"&userName="+user.usuario+"&nombreCompleto="+user.nombreCompleto+"&telefono="+user.telefono;
            comunicateWebView("logguer",params);
        },
        onRegister(formSubmitted){
            let services = this.initialize.use_mode == "testing" ? "https://arvispace.com/serviciosASARAmbientePruebas/insertarUsuario.php" : "https://arvispace.com/serviciosASAR/insertarUsuario.php";
            let form = new FormData();
            
            form.append('correo',formSubmitted.data.input_email.value);
            form.append('password',formSubmitted.data.input_password.value);
            form.append('usuario',formSubmitted.data.input_apodo.value);
            form.append('nombreCompleto',formSubmitted.data.input_nombre.value);
            form.append('telefono',formSubmitted.data.input_telefono.value);
            axios.post(services,form).then(function(response){
                formSubmitted.buttons.content = "Registrar";
                formSubmitted.buttons.disabled = false;
                if(response.status==200){
                    /***
                     * Vaciando formulario aqui para antes saber que el reques fue correcto
                     */
                    formSubmitted.data.input_email.value="";
                    formSubmitted.data.input_password.value="";
                    formSubmitted.data.input_r_password.value="";
                    formSubmitted.data.input_apodo.value="";
                    formSubmitted.data.input_nombre.value="";
                    formSubmitted.data.input_telefono.value="";
                    createAviso(response.data.msg);
                }
            }).catch(function(error){

                formSubmitted.buttons.content = "Error"
                console.log(error);
            });
        },
        onSubmit(formSubmitted){
            let services = this.initialize.use_mode == "testing" ? "https://arvispace.com/serviciosASARAmbientePruebas/login.php" : "https://arvispace.com/serviciosASAR/login.php";
            let form = new FormData();
            form.append('correo',formSubmitted.data.input_user.value);
            form.append('password',formSubmitted.data.input_password.value);
            axios.post(services,form).then(function(response){
                if(response.status==200){
                    formSubmitted.buttons.content = "Completado";
                    let user = response.data[0];
                    if(user.correo != undefined){
                        content.startSession(user);
                    }else{
                        
                        formSubmitted.buttons.content = "Iniciar";
                        formSubmitted.buttons.disabled = false;
                        createAviso(user.msg);
                        console.log(user.msg);
                    }
                }
            }).catch(function(error){
                console.log(error);
            });
        },
        handleLogin(){
            this.isLoginActive = !this.isLoginActive;
        },
        handleRegister(){
            this.isRegisterActive = !this.isRegisterActive;
        },
        loginSocialNetworks(dataUser){
            let services = this.initialize.use_mode == "testing" ?
                "https://arvispace.com/serviciosASARAmbientePruebas/validarCorreoLogin.php" : 
                "https://arvispace.com/serviciosASAR/validarCorreoLogin.php";
            
            let form = new FormData();
            form.append('correo', dataUser.correo);
            form.append('displayName', dataUser.nombreCompleto);
            axios.post(services,form).then((response) => {
                if(response.status==200){
                    let user = response.data[0];
                    console.log(response.data)
                    content.startSession(user);
                }else{
                    console.log("Error al obtener los datos")
                }
            }).catch((error)=>{
                console.log(error);
            });
        },
        requestFacebook(){
            let provider = new firebase.auth.FacebookAuthProvider();
            this.loadLogin = true
            firebase.auth().signInWithRedirect(provider);
        },
        requestGoogle(){
            var provider = new firebase.auth.GoogleAuthProvider();
            this.loadLogin = true
            provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
            firebase.auth().signInWithRedirect(provider);
        },
        requestApple(){
            var provider = new firebase.auth.OAuthProvider('apple.com');
            this.loadLogin = true
            provider.addScope('email');
            provider.addScope('name');
            firebase.auth().signInWithRedirect(provider);
        }
    },
    watch:{
    }
});