<template>
<div>
    <div class="card">
        <div class="card-header">
            Daten <br />
            <small class="text-muted mb-3">Alle Daten zu Ihrem Investment. Kosten, Kredit, etc.</small>
        </div>
        <div class="card-body">

            <form>
                <div class="form-group">
                    <label for="purchasePrice">Kaufpreis</label>
                    <div class="input-group">
                        <input type="number" class="form-control" id="purchasePrice" :value="purchasePrice" @input="inputPurchasePrice" placeholder="85000" step="1000">
                        <div class="input-group-append">
                            <span class="input-group-text">€</span>
                        </div>
                    </div>
                    <small id="purchasePriceHelp" class="form-text text-muted">Der Kaufpreis der Immobilie.</small>
                </div>
                <div class="form-group">
                    <label for="selfCaptive">Eigenkapital</label>
                    <div class="input-group">
                        <input type="number" class="form-control" id="selfCaptive" :value="selfCaptive" @input="inputSelfCaptive">
                        <div class="input-group-append">
                            <span class="input-group-text">€</span>
                        </div>
                    </div>
                    <small id="selfCaptiveHelp" class="form-text text-muted">Die Startinvestition aus eigenem Kapital.</small>
                </div>
                <div class="form-group">
                    <label for="runtime">Laufzeit</label>
                    <div class="input-group">
                        <input type="number" class="form-control" id="runtime" :value="runtime" @input="inputRuntime">
                        <div class="input-group-append">
                            <span class="input-group-text">Jahre</span>
                        </div>
                    </div>
                    <small id="runtimeHelp" class="form-text text-muted">Die Laufzeit des Kredites.</small>
                </div>
                <div class="form-group">
                    <label for="rentalIncome">Kaltmiete</label>
                    <div class="input-group">
                        <input type="number" class="form-control" id="rentalIncome" :value="rentalIncome" @input="inputRentalIncome">
                        <div class="input-group-append">
                            <span class="input-group-text">€</span>
                        </div>
                    </div>
                    <small id="rentalIncomeHelp" class="form-text text-muted">Die erwartete Netto-Kaltmiete.</small>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    computed: mapState({
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

</style>
