export default {
    format2Eur: function(number) {
        return (number).toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2 })
    },
    formatEuroMixin: {
        methods: {
            formatEuro: function(number) {
                return (number).toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2 })
            }
        }
    },
    formatPercentMixin: {
        methods: {
            formatPercent: function(value) {
                return Number(value / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
            }
        }
    }
}