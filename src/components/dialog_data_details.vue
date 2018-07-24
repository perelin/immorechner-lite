<template>
<small class="text-muted">Um Dinge einfach zu halten und eine schnellen Einstieg zu ermöglichen haben wir ein einige Annahmen getroffen. U.a.: Marklergebühr {{ formatPercent(courtage) }}, Grunderwerbssteuer {{ formatPercent(propertyTransferTax) }}, Notar- u. Grundbuchkosten {{ formatPercent(registerCosts) }}, Einmalige Renovierungsarbeiten {{ formatEuro(renovationCost) }}, Darlehnszins {{ formatPercent(loanInterest) }} p.a., nicht umlegbarer Hausgeldanteil: {{ formatEuro(houseMoneyFoldable) }}, monatliche Rücklagen für Reparaturen: {{ formatEuro(renovationCostPerMonth) }}. <a href="javascript:void(0)">Hier können Sie diese Werte im Detail anpassen</a>  </small>
</template>

<script>
import ImmoUtils from '../utils/immorechner_util.js'
import {
    mapState
} from 'vuex'

export default {
    computed: {
        houseMoneyFoldable: function() {
            return this.$store.getters.houseMoneyNotFoldable
        },
        ...mapState([
                'courtage',
                'propertyTransferTax',
                'registerCosts',
                'renovationCost',
                'loanInterest',
                'renovationCostPerMonth'
            ]
        )
    }
}
</script>

<style scoped>

</style>
