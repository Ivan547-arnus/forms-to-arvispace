let content = new Vue({
    el:"#ubication",
    components:{
        'header-nav':headerNav,
        'ubication':ubication
    },
    data(){
        return{
            cp:''
        }
    },
    methods:{
        init(use_mode, id_app, data){
            let initialize = {
                use_mode: "testing",
                id_app: "1",
                data: JSON.stringify({cp:"72100"})
            }
            
            initialize.use_mode = use_mode;
            initialize.id_app = id_app;
            initialize.data = JSON.parse(data);

            alert(JSON.stringify(initialize));
        }
    }
});