<template>
<div id="app">
    <header>
        <header-component />
    </header>
    <stage-component />
    <div class="container">
        <dialog-component />
    </div>
    <footer-component />
</div>
</template>

<script>
import StageComponent from './components/stage.vue'
import DialogComponent from './components/dialog.vue'
import HeaderComponent from './components/header.vue'
import FooterComponent from './components/footer.vue'

export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        StageComponent,
        DialogComponent,
        HeaderComponent,
        FooterComponent
    },
    methods: {
        init() {
            // Person
            this.$store.commit('inputCurrentRent', 400)
            // Apartment
            this.$store.commit('inputCourtage', 2)
            this.$store.commit('inputSquareMeters', 60)
            this.$store.commit('inputRenovationCost', 2000)
            this.$store.commit('inputRenovationCostPerMonth', 20)
            this.$store.commit('inputHouseMoney', 100)
            this.$store.commit('inputHouseMoneyFoldable', 66)
            this.$store.commit('inputRentalSavings', 350)

            // Loan
            this.$store.commit('inputLoanInterest', 2)
            this.$store.commit('inputPropertyTransferTax', 2)
            this.$store.commit('inputRegisterCosts', 2)
            this.$store.commit('inputIncomeTaxRate', 45)

            // Invest
            this.$store.commit('inputInvestInterest', 6)
        }
    },
    mounted: function () {
        this.init()
    }
}
</script>
