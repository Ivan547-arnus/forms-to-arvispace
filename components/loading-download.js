let loadingDownload = {
    props:{
        isActive:{
            type:Boolean,
            default:true
        }
    },
    template:`
        <transition name="show-load-container">
            <div v-if="isActive" class="load-store">
                <div class="lds-dual-ring">
                </div>
            </div>
        </transition>
    `
}