/**
 * Area para testing comentar en prodduction
 */
/*$(document).ready(function(){
    content.init("testing","1",'{"cp":"90796"}');
});*/

let content = new Vue({
    el:"#ubication",
    components:{
        'header-nav':headerNav,
        'ubication':ubication
    },
    data(){
        return{
            initialize:{},
        }
    },
    watch:{
        initialize(){
        } 
    },
    methods:{
        init(use_mode, id_app, data){
            this.initialize = {
                use_mode: use_mode,
                id_app: id_app,
                data: JSON.parse(data)
            }
        }
    }
});