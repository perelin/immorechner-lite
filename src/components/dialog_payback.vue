<template>
<div>
    <div class="card">
        <div class="card-header">
            Tilgungsphase <br />
            <small class="text-muted mb-3">Wie sehen Ihre Finanzen während der Tilgungsphase aus? Ist der Cashflow positiv oder negative?</small>
        </div>

        <div class="card-body">

            <div class="row">

                <div class="col">

                    <div class="card-group">
                        <div class="card text-white bg-info  mb-3">
                            <div class="card-header">Cashflow monatlich</div>
                            <div class="card-body">
                                <h5 class="card-title">{{formatEuro(burdenPerMonthLetting)}}</h5> ohne Steuern
                            </div>
                        </div>
                        <div class="card text-white bg-info  mb-3">
                            <div class="card-header">Cashflow jährlich</div>
                            <div class="card-body">
                                <h5 class="card-title">{{formatEuro(burdenPerYearInclTaxLetting)}}</h5> inklusive Steuern
                            </div>
                        </div>
                        <div class="card text-white bg-info mb-3">
                            <div class="card-header">Rendite p.a.</div>
                            <div class="card-body">
                                <h5 class="card-title">{{formatPercent(returnLettingAfterRuntime)}}</h5> inklusive Steuern
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card mb-3">
                        <div class="card-header">Zinsanteil</div>
                        <div class="card-body">
                            <chart-test-component />
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="card-footer text-center">
            <small><a href="javascript:(void)">Wie haben wir das berechnet?</a></small>
        </div>

    </div>
</div>
</template>

<script>
import ChartTestComponent from './chart_test2.js'

export default {
    computed: {
        burdenPerMonthLetting: function () {
            return this.$store.getters.burdenPerMonthLetting
        },
        burdenPerYearInclTaxLetting: function () {
            return this.$store.getters.burdenPerYearInclTaxLetting
        },
        returnLettingAfterRuntime: function () {
            return this.$store.getters.returnLettingAfterRuntime
        },
        cashflowPerMonth: function () {
            let cashflow = 'negative'
            if (this.$store.getters.burdenPerMonthLetting > 0) {
                cashflow = 'positiv'
            }
            return cashflow
        }
    },
    components: {
        ChartTestComponent
    }
}
</script>

<style scoped>

</style>
