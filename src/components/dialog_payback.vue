<template>
<div>
    <div class="card">
        <div class="card-header">
            Tilgung <br />
            <small class="text-muted mb-3">Wie sehen Ihre Finanzen während der Tilgungsphase aus? Ist der Cashflow positiv oder negative?</small>
        </div>

        <div class="card-body">
            <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                <div class="card-header">Cashflow: {{cashflow}}</div>
                <div class="card-body">
                    <h5 class="card-title">{{formatEuro(burdenPerMonthLetting)}}</h5> im Monat
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    computed: {
        burdenPerMonthLetting: function () {
            return this.$store.getters.burdenPerMonthLetting
        },
        cashflow: function () {
            let cashflow = 'negative'
            if (this.$store.getters.burdenPerMonthLetting > 0) {
                cashflow = 'positiv'
            }
            return cashflow
        }
    }
}
</script>

<style scoped>

</style>
