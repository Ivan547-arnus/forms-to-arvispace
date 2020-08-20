/**
 * Area para testing comentar en prodduction
 */
$(document).ready(function(){
    let idPayment = getParameterByName('id');
    let use_mode = getParameterByName('use_mode');
    content.init(idPayment,use_mode);
});


let content = new Vue({
    el:"#payment",
    components:{
        'payment':payment
    },
    data(){
        return{
            paymentDetails:null
        }
    },
    watch:{
    },
    methods:{
        init(idPayment,use_mode){
            this.getPayment(idPayment,use_mode);
        },
        activatePayment(idPayment,use_mode){
            let params = "";
            comunicateWebView("clear-cart",params);
            let form = new FormData();
            form.append('idBanco',idPayment);
            let service = use_mode == 'testing' ? "https://arvispace.com/serviciosASARAmbientePruebas/activarPedido.php" : "https://arvispace.com/serviciosASAR/activarPedido.php";
            axios.post(service,form).then(function(response){
                console.log(response.data);
            }).catch(function(error){
                console.log(error);
            });
        },
        getPayment(idPayment,use_mode){
            let form = new FormData();
            form.append('id',idPayment);
            let service = use_mode == 'testing' ? "https://arvispace.com/lib/paymenttesting/charge.php" : "https://arvispace.com/lib/payment/charge.php";
            axios.post(service, form).then(function(response){
                if(response.status==200){
                    if(response.data.status=="completed"){
                        content.activatePayment(idPayment,use_mode);
                    }
                    content.paymentDetails = response.data;
                }
            }).catch(function(error){
                console.log(error);
            });
        }
    }
});