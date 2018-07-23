<template>
    <div class="row">
        <div class="col">
            <form class="form-inline" id="dialog">
    
                <blockquote>
                    <p>Der Kaufpreis der Immobilie ist laut Expose
                        <label class="sr-only" for="purchasePrice">Kaufpreis</label>
                        <input type="number" class="form-control" id="purchasePrice" :value="purchasePrice" @input="inputPurchasePrice" placeholder="85.000">&nbsp;€</p>
                    <p>Ich möchte dafür
                        <label class="sr-only" for="selfCaptive">Eigenkapital</label>
                        <input type="number" class="form-control" id="selfCaptive" :value="selfCaptive" @input="inputSelfCaptive"> € an Eigenkapital investieren.</p>
                    <p>Für den Rest möchte ich einen Kredit mit einer Laufzeit von
                        <label class="sr-only" for="runtime">Laufzeit in Jahren</label>
                        <input type="number" class="form-control" id="runtime" aria-describedby="runtimeHelp" :value="runtime" @input="inputRuntime"> Jahren aufnehmen.</p>
                    <p>Wenn ich vermiete halte ich eine Kaltmiete von
                        <label class="sr-only" for="rentalIncome">Kaltmiete</label>
                        <input type="number" class="form-control" id="rentalIncome" :value="rentalIncome" @input="inputRentalIncome"> € für realistisch.</p>
                </blockquote>
    
            </form>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    
    export default {
    
        computed: mapState({
            count: 'count',
            purchasePrice: 'purchasePrice',
            selfCaptive: 'selfCaptive',
            runtime: 'runtime',
            rentalIncome: 'rentalIncome',
        }),
        methods: {
            inputPurchasePrice(event) {
                this.$store.commit('inputPurchasePrice', +event.target.value)
            },
            inputSelfCaptive(event) {
                this.$store.commit('inputSelfCaptive', +event.target.value)
            },
            inputRuntime(event) {
                this.$store.commit('inputRuntime', +event.target.value)
            },
            inputRentalIncome(event) {
                this.$store.commit('inputRentalIncome', +event.target.value)
            },
        }
    }
</script>

<style scoped>

    input.form-control {
        border-width: 0px;
        border-bottom-width: 1px;
        width: 6rem;
        display: inline;
    }
    
    @media (min-width: 576px) {
        input.form-control {
            width: 6rem;
        }
    }
</style>
