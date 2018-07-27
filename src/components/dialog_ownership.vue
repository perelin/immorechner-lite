<template>
<div>
    <div class="card">
        <div class="card-header">
            Eigentumsphase <br />
            <small class="text-muted mb-3">Wie sehen die Finanzen nach der Tilgungsphase aus? Wieviel wirft die Immobilie wirklich ab?</small>
        </div>

        <div class="card-body">
            <div class="card-group">
                <div class="card text-white bg-info  mb-3">
                    <div class="card-header">Cashflow monatlich</div>
                    <div class="card-body">
                        <h5 class="card-title">{{formatEuro(burdenPerMonthLettingOwnership)}}</h5> ohne Steuern
                    </div>
                </div>
                <div class="card text-white bg-info  mb-3">
                    <div class="card-header">Cashflow jährlich</div>
                    <div class="card-body">
                        <h5 class="card-title">??</h5> inklusive Steuern
                    </div>
                </div>
                <div class="card text-white bg-info mb-3">
                    <div class="card-header">Rendite p.a.</div>
                    <div class="card-body">
                        <h5 class="card-title">??</h5> inklusive Steuern
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
export default {
    computed: {
        burdenPerMonthLettingOwnership: function () {
            return this.$store.getters.burdenPerMonthLettingOwnership
        },
        burdenPerYearInclTaxLetting: function () {
            return this.$store.getters.burdenPerYearInclTaxLetting
        },
        returnLettingAfterRuntime: function () {
            return this.$store.getters.returnLettingAfterRuntime
        }
    }
}
</script>

<style scoped>

</style>
