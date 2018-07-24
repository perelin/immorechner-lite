<template>
<small class="text-muted">Um Dinge einfach zu halten und eine schnellen Einstieg zu ermöglichen haben wir ein einige Annahmen getroffen. U.a.: Marklergebühr {{ formatPercent(courtage) }}, Grunderwerbssteuer 6,00%, Notar- u. Grundbuchkosten 2,00%, Einmalige Renovierungsarbeiten 15.000€, Darlehnszins p.a. 2,00%, Nicht umlegbarer Hausgeldanteil: 80 €, monatliche Rücklagen für Reparaturen: 15 €. <a href="#">Hier können Sie diese Werte im Detail anpassen</a>  </small>
</template>

<script>
import ImmoUtils from '../utils/immorechner_util.js'
import {
    mapState
} from 'vuex'

export default {
    computed: {
        burdenPerMonthLetting: function () {
            let burden = ImmoUtils.format2Eur(this.$store.getters.burdenPerMonthLetting)
            return burden
        },
        cashflow: function () {
            let cashflow = 'negative'
            if (this.$store.getters.burdenPerMonthLetting > 0) {
                cashflow = 'positiv'
            }
            return cashflow
        },
        courtagePercentFormated: function () {
            return courtage
        },
        ...mapState([
                'courtage'
            ]
        )
    }
}
</script>

<style scoped>

</style>
