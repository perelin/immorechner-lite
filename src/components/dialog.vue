<template>
<div>
    <div class="row">
        <div class="col-md-3">
            <dialog-data-component />
        </div>

        <div class="col-md-3">
            <dialog-payback-component />
        </div>
        <div class="col-md-3">
            <dialog-return-component />
        </div>
        <div class="col-md-3">
            <dialog-ownership-component />
        </div>
    </div>
</div>
</template>

<script>
import DialogDataComponent from './dialog_data.vue'
import DialogPaybackComponent from './dialog_payback.vue'
import DialogReturnComponent from './dialog_return.vue'
import DialogOwnershipComponent from './dialog_ownership.vue'

export default {
    components: {
        DialogDataComponent,
        DialogPaybackComponent,
        DialogReturnComponent,
        DialogOwnershipComponent,
    }
}
</script>

<style scoped>
form#dialog input.form-control {
    border-width: 0px;
    border-bottom-width: 1px;
    width: 6rem;
    display: inline;
}

@media (min-width: 576px) {
    form#dialog input.form-control {
        width: 6rem;
    }
}
</style>
