<template>
<span>

    
    
    <form>
        <input type="text" class="form-control small" v-model="dump" /> <button type="button" v-on:click="dumpState()" class="btn btn-sm btn-secondary">Dump State</button> <button type="button" v-on:click="importState()" class="btn btn-sm btn-secondary">Import State</button> <button type="button" v-on:click="prefilSomeValuesLite()" class="btn btn-sm btn-secondary">Prefil some values</button>
    </form>
</span>
</template>

<script>
import Vue from 'vue'

export default {
    data: function () {
        return {
            dump: ''
        }
    },
    methods: {
        prefilSomeValuesFull() {
            // Person
            this.$store.commit('inputCurrentRent', 400)
            // Apartment
            this.$store.commit('inputPurchasePrice', 100000)
            this.$store.commit('inputCourtage', 3)
            this.$store.commit('inputSquareMeters', 60)
            this.$store.commit('inputRenovationCost', 15000)
            this.$store.commit('inputRenovationCostPerMonth', 25)
            this.$store.commit('inputRentalIncome', 600)
            this.$store.commit('inputHouseMoney', 140)
            this.$store.commit('inputHouseMoneyFoldable', 88.2)
            this.$store.commit('inputRentalSavings', 350)

            // Loan
            this.$store.commit('inputSelfCaptive', 30000)
            this.$store.commit('inputLoanInterest', 2)
            this.$store.commit('inputRuntime', 25)
            this.$store.commit('inputPropertyTransferTax', 5)
            this.$store.commit('inputRegisterCosts', 2.5)
            this.$store.commit('inputIncomeTaxRate', 0.45)

            // Invest
            this.$store.commit('inputInvestInterest', 6)
        },
        prefilSomeValuesLite() {
            // Apartment
            this.$store.commit('inputPurchasePrice', 100000)
            this.$store.commit('inputRentalIncome', 600)

            // Loan
            this.$store.commit('inputSelfCaptive', 30000)
            this.$store.commit('inputRuntime', 25)
        },
        dumpState() {
            const state = this.$store.state
            const stateBlob = JSON.stringify(state)
            this.dump = stateBlob
            console.log(stateBlob)
        },
        importState() {
            //console.log(this.dump)
            this.$store.replaceState(JSON.parse(this.dump))
        }
    }
}
</script>

<style scoped>
div#debug {
    border: 1px solid blue;
}
</style>
