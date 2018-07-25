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
                        <vue-numeric currency="" separator="." v-model="purchasePrice" pattern="[0-9]*" class="form-control" id="purchasePrice"></vue-numeric>
                        <!-- <input type="number" pattern="[0-9]*" class="form-control" id="purchasePrice" :value="purchasePrice" @input="inputPurchasePrice" placeholder="85000" step="1000"> -->
                        <div class="input-group-append">
                            <span class="input-group-text">€</span>
                        </div>
                    </div>
                    <small id="purchasePriceHelp" class="form-text text-muted">Der Kaufpreis der Immobilie.</small>
                </div>
                <div class="form-group">
                    <label for="selfCaptive">Eigenkapital</label>
                    <div class="input-group">
                        <vue-numeric currency="" separator="." v-model="selfCaptive" pattern="[0-9]*" class="form-control" id="selfCaptive"></vue-numeric>
                        <div class="input-group-append">
                            <span class="input-group-text">€</span>
                        </div>
                    </div>
                    <small id="selfCaptiveHelp" class="form-text text-muted">Die Startinvestition aus eigenem Kapital.</small>
                </div>
                <div class="form-group">
                    <label for="runtime">Laufzeit</label>
                    <div class="input-group">
                        <input type="number" pattern="[0-9]*" class="form-control" id="runtime" :value="runtime" @input="inputRuntime">
                        <div class="input-group-append">
                            <span class="input-group-text">Jahre</span>
                        </div>
                    </div>
                    <small id="runtimeHelp" class="form-text text-muted">Die Laufzeit des Kredites.</small>
                </div>
                <div class="form-group">
                    <label for="rentalIncome">Kaltmiete</label>
                    <div class="input-group">
                        <vue-numeric currency="" separator="." v-model="rentalIncome" pattern="[0-9]*" class="form-control" id="rentalIncome"></vue-numeric>
                        <div class="input-group-append">
                            <span class="input-group-text">€ / Monat</span>
                        </div>
                    </div>
                    <small id="rentalIncomeHelp" class="form-text text-muted">Die erwartete Netto-Kaltmiete.</small>
                </div>
            </form>
        </div>

        <div class="card-footer bg-transparent ">
            <dialog-data-details-component />
        </div>
    </div>
</div>
</template>

<script>
import DialogDataDetailsComponent from './dialog_data_details'
import VueNumeric from 'vue-numeric'
import {
    mapState
} from 'vuex'

export default {
    computed: {
        ...mapState({
            //purchasePrice: 'purchasePrice',
            //selfCaptive: 'selfCaptive',
            runtime: 'runtime',
            //rentalIncome: 'rentalIncome',
        }),
        // vue-numeric needs to use v-model instead of :value
        purchasePrice: {
            set(value) {
                this.$store.commit('inputPurchasePrice', +value)
            },
            get() {
                return this.$store.state.purchasePrice
            }
        },
        selfCaptive: {
            set(value) {
                this.$store.commit('inputSelfCaptive', +value)
            },
            get() {
                return this.$store.state.selfCaptive
            }
        },
        rentalIncome: {
            set(value) {
                this.$store.commit('inputRentalIncome', +value)
            },
            get() {
                return this.$store.state.rentalIncome
            }
        },

    },
    methods: {
        // inputPurchasePrice(event) {
        //     this.$store.commit('inputPurchasePrice', +event.target.value)
        // },
        // inputSelfCaptive(event) {
        //     this.$store.commit('inputSelfCaptive', +event.target.value)
        // },
        inputRuntime(event) {
            this.$store.commit('inputRuntime', +event.target.value)
        }
        // inputRentalIncome(event) {
        //     this.$store.commit('inputRentalIncome', +event.target.value)
        // },
    },
    components: {
        DialogDataDetailsComponent,
        VueNumeric,
    }
}
</script>

<style scoped>

</style>
